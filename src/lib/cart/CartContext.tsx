"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { products } from "@/lib/data/products";

const STORAGE_KEY = "apothecary-cart";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
}

type CartAction =
  | { type: "add"; productId: string; quantity?: number }
  | { type: "remove"; productId: string }
  | { type: "setQty"; productId: string; quantity: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] }
  | { type: "open" }
  | { type: "close" };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const existing = state.lines.find((line) => line.productId === action.productId);
      const quantity = action.quantity ?? 1;
      const lines = existing
        ? state.lines.map((line) =>
            line.productId === action.productId
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          )
        : [...state.lines, { productId: action.productId, quantity }];
      return { ...state, lines, isOpen: true };
    }
    case "remove":
      return { ...state, lines: state.lines.filter((line) => line.productId !== action.productId) };
    case "setQty":
      return {
        ...state,
        lines: state.lines
          .map((line) =>
            line.productId === action.productId
              ? { ...line, quantity: action.quantity }
              : line,
          )
          .filter((line) => line.quantity > 0),
      };
    case "clear":
      return { ...state, lines: [] };
    case "hydrate":
      return { ...state, lines: action.lines };
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], isOpen: false });

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: "hydrate", lines: JSON.parse(stored) });
      }
    } catch {
      // ignore malformed/unavailable storage
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      // ignore write failures (private browsing, quota, etc.)
    }
  }, [state.lines]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = state.lines.reduce((sum, line) => {
      const product = products.find((p) => p.id === line.productId);
      return product ? sum + product.price * line.quantity : sum;
    }, 0);

    return {
      lines: state.lines,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem: (productId, quantity) => dispatch({ type: "add", productId, quantity }),
      removeItem: (productId) => dispatch({ type: "remove", productId }),
      setQuantity: (productId, quantity) => dispatch({ type: "setQty", productId, quantity }),
      clear: () => dispatch({ type: "clear" }),
      openCart: () => dispatch({ type: "open" }),
      closeCart: () => dispatch({ type: "close" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
