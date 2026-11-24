/** True when the email service for the contact form has been configured. Server-only. */
export function isContactConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}
