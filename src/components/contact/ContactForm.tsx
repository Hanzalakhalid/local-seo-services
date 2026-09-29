"use client";

import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, LoaderCircle, Lock, Send } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { formspreeFormId, site } from "@/lib/site";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "url";
  autoComplete?: string;
  placeholder?: string;
  required: boolean;
  wide?: boolean;
};

const fields: Field[] = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
  {
    name: "business",
    label: "Business name",
    type: "text",
    autoComplete: "organization",
    required: true,
  },
  {
    name: "location",
    label: "City / service area",
    type: "text",
    autoComplete: "address-level2",
    placeholder: "e.g. Austin, TX",
    required: false,
  },
  {
    name: "profile_url",
    label: "Website or Google Maps link",
    type: "url",
    autoComplete: "url",
    placeholder: "https://",
    required: false,
    wide: true,
  },
];

const inputClasses =
  "mt-2 block w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/60 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-blue-500/15 aria-[invalid=true]:border-rose-500";

const errorClasses = "mt-1.5 text-sm font-medium text-rose-600 dark:text-rose-400";

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm(formspreeFormId, {
    data: { _subject: "New Free Analysis request from your website" },
  });
  const hasFieldError = (name: string) =>
    (state.errors?.getFieldErrors(name).length ?? 0) > 0;

  return (
    <AnimatePresence mode="wait">
      {state.succeeded ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
          role="status"
        >
          <CircleCheck
            aria-hidden
            className="mx-auto size-12 text-emerald-600 dark:text-emerald-400"
          />
          <h3 className="mt-4 font-display text-xl font-bold text-fg">
            Thanks, your request is in!
          </h3>
          <p className="mt-2 text-base text-muted">
            We&apos;ll review your business and reply by email with your free
            analysis.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 block w-full text-sm font-medium text-brand-fg hover:underline"
          >
            Send another request
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-8 space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className={field.wide ? "sm:col-span-2" : ""}>
                <label htmlFor={field.name} className="text-sm font-semibold text-fg">
                  {field.label}
                  {!field.required && (
                    <span className="ml-1.5 font-normal text-muted">(optional)</span>
                  )}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  required={field.required}
                  maxLength={300}
                  aria-invalid={hasFieldError(field.name) || undefined}
                  className={inputClasses}
                />
                <ValidationError
                  field={field.name}
                  prefix={field.label}
                  errors={state.errors}
                  className={errorClasses}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-fg">
              What would you like help with?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              placeholder="Tell us a little about your business and your goals, e.g. more calls, more reviews, or fixing your listing."
              aria-invalid={hasFieldError("message") || undefined}
              className={`${inputClasses} resize-y`}
            />
            <ValidationError
              field="message"
              prefix="Message"
              errors={state.errors}
              className={errorClasses}
            />
          </div>

          {/* Formspree honeypot: hidden from people, often filled in by bots. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="hidden"
          />

          {/* Form-level errors (e.g. network problems or form configuration). */}
          <ValidationError errors={state.errors} role="alert" className={errorClasses} />

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={state.submitting}
              className={buttonClasses("primary", "xl", "w-full sm:w-auto")}
            >
              {state.submitting ? (
                <>
                  <LoaderCircle aria-hidden className="size-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send aria-hidden className="size-5" />
                  {site.cta.label}
                </>
              )}
            </button>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <Lock aria-hidden className="size-4" />
              Free, no obligation. We only use your details to reply.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
