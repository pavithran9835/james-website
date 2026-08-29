"use client";

import { useActionState } from "react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { subscribe, type SubscribeResult } from "@/lib/actions/newsletter";

interface NewsletterFormProps {
  variant?: "underline" | "boxed";
  className?: string;
}

export function NewsletterForm({
  variant = "underline",
  className,
}: NewsletterFormProps) {
  const [state, formAction, pending] = useActionState<SubscribeResult | null, FormData>(
    subscribe,
    null,
  );

  if (variant === "boxed") {
    return (
      <div className={className}>
        <form action={formAction} className="flex flex-col md:flex-row gap-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="flex-grow bg-surface border-none focus:ring-1 focus:ring-primary py-4 px-6 text-base font-body-md"
          />
          <button
            type="submit"
            disabled={pending}
            className="bg-primary text-surface px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-all disabled:opacity-60"
          >
            {pending ? "Submitting…" : "Subscribe"}
          </button>
        </form>
        {state && (
          <p
            className={clsx(
              "mt-3 text-sm",
              state.success ? "text-on-primary-container" : "text-error",
            )}
          >
            {state.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <form className="flex border-b border-outline-variant py-2 transition-colors focus-within:border-tertiary-fixed-dim" action={formAction}>
        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="bg-transparent border-none focus:ring-0 text-base w-full font-body-md placeholder:text-on-surface-variant/50"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="-my-2.5 -mr-2.5 shrink-0 p-2.5 inline-flex items-center justify-center"
        >
          <Icon name="arrow_forward" className="text-primary" />
        </button>
      </form>
      {state && (
        <p
          className={clsx(
            "mt-2 text-xs",
            state.success ? "text-on-primary-container" : "text-error",
          )}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
