import { CONTACT_FORM_URL } from "@/lib/content";

type Props = { formUrl?: string; size?: "large" | "small" };

/** Opens the Google Form in a new tab. Without a form URL it says so instead of linking nowhere. */
export function ContactButton({ formUrl = CONTACT_FORM_URL, size = "large" }: Props) {
  const sizing = size === "large" ? "px-6 py-3.5 text-lg" : "px-4 py-2 text-sm";
  if (!formUrl) {
    return <p className={`inline-block rounded-md border-2 border-dashed border-rule text-ink-soft ${sizing}`}>相談フォームは準備中です</p>;
  }
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-md border-2 border-ink bg-marker font-bold text-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0_var(--color-ink)] motion-reduce:transition-none ${sizing}`}
    >
      相談する
      <span className="sr-only">（Googleフォームが新しいタブで開きます）</span>
    </a>
  );
}
