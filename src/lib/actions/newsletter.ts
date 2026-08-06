"use server";

export interface SubscribeResult {
  success: boolean;
  message: string;
}

// TODO: wire up to a real ESP (e.g. Resend, Mailchimp) once one is chosen.
export async function subscribe(
  _prevState: SubscribeResult | null,
  formData: FormData,
): Promise<SubscribeResult> {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Enter a valid email address." };
  }

  return { success: true, message: "You're on the list." };
}
