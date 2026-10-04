import type { ReactNode } from "react";
import { ContactButton } from "@/components/contact-button";
import { career, contact, practices, prices, services, site, skills, steps, works } from "@/lib/content";

const NAV = [
  ["#services", "できること"],
  ["#works", "実績"],
  ["#prices", "料金"],
  ["#flow", "依頼の流れ"],
  ["#skills", "技術"],
] as const;

function Section({ id, title, lead, children }: { id: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 id={`${id}-heading`} className="font-display text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-3 max-w-2xl text-ink-soft">{lead}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function Home() {
  const published = works.filter((work) => work.url);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-2">
        本文へ移動
      </a>
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-xl">
            {site.name}
          </a>
          <nav aria-label="ページ内" className="-mx-1 flex min-w-0 flex-1 overflow-x-auto text-sm">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className="shrink-0 rounded px-2 py-1 hover:bg-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden sm:block">
            <ContactButton size="small" />
          </div>
        </div>
      </header>

      <main id="main">
        <div id="top" className="graph-paper border-b border-rule">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <h1 className="font-display text-[2.6rem] leading-[1.25] sm:text-6xl">
                小さな業務の
                <br />
                システム、
                <br />
                ひとりで作ります。
              </h1>
              <p className="mt-6 max-w-xl text-lg">
                個人で開発を請け負っている taboki です。予約・在庫・顧客管理などの業務ツールから、ホームページ、動いているシステムの改修まで、設計からテスト、公開、保守まで一人で担当します。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ContactButton />
                <a href="#prices" className="font-bold underline decoration-2 underline-offset-4">
                  料金の目安を見る
                </a>
              </div>
            </div>

            <nav aria-labelledby="index-heading" className="rounded-md border-2 border-ink bg-white p-5">
              <h2 id="index-heading" className="font-bold">
                最近つくったもの
              </h2>
              <ul className="mt-2 divide-y divide-dashed divide-rule">
                {works.map((work) => (
                  <li key={work.name} className="flex items-baseline justify-between gap-3 py-2">
                    <a href={`#work-${works.indexOf(work)}`} className="font-bold hover:underline">
                      {work.name}
                    </a>
                    <span className={`shrink-0 text-xs ${work.url ? "rounded bg-marker px-1.5 py-0.5 font-bold" : "text-ink-soft"}`}>
                      {work.url ? "公開中" : "公開準備中"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-soft">{published.length}件は実際に触れます。</p>
            </nav>
          </div>
        </div>

        <Section id="services" title="できること">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.title} className="border-t-2 border-ink pt-5">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.body}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm" aria-label={`${service.title}の例`}>
                  {service.examples.map((example) => (
                    <li key={example} className="rounded border border-rule bg-white px-2 py-0.5">
                      {example}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <div className="border-y border-rule bg-white">
          <Section id="works" title="実績" lead="個人で企画から公開まで作ったWebアプリです。どれも自動テストとセキュリティ設計を入れて作っています。">
            <ul className="flex flex-col">
              {works.map((work, index) => (
                <li
                  key={work.name}
                  id={`work-${index}`}
                  className="grid gap-4 border-t border-rule py-8 first:border-t-0 first:pt-0 md:grid-cols-[16rem_1fr]"
                >
                  <div>
                    <h3 className="text-xl font-bold">{work.name}</h3>
                    {work.url ? (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-bold underline decoration-marker-deep decoration-[3px] underline-offset-4"
                      >
                        アプリを開く<span className="sr-only">（{work.name}、新しいタブ）</span>
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-ink-soft">公開準備中</p>
                    )}
                  </div>
                  <div>
                    <p>{work.summary}</p>
                    <ul className="mt-2 list-disc pl-5 text-ink-soft">
                      {work.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-ink-soft">使った技術: {work.stack.join("、")}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section id="prices" title="料金の目安" lead="内容をうかがってから、作る範囲と金額を見積もりでお出しします。合意する前に費用はかかりません。">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <caption className="sr-only">料金の目安</caption>
              <thead>
                <tr className="border-b-2 border-ink text-sm">
                  <th scope="col" className="py-2 pr-4 font-bold">
                    内容
                  </th>
                  <th scope="col" className="py-2 pr-4 font-bold">
                    目安
                  </th>
                  <th scope="col" className="py-2 font-bold">
                    含むもの
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((price) => (
                  <tr key={price.item} className="border-b border-rule align-top">
                    <th scope="row" className="py-4 pr-4 font-bold">
                      {price.item}
                    </th>
                    <td className="whitespace-nowrap py-4 pr-4 font-display text-xl">{price.price}</td>
                    <td className="py-4 text-ink-soft">{price.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <div className="border-y border-rule bg-white">
          <Section id="flow" title="依頼の流れ">
            <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-1 text-ink-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        <Section id="skills" title="技術と進め方">
          {career.length > 0 && (
            <div className="mb-12 max-w-3xl space-y-3">
              {career.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.area}>
                <dt className="font-bold">{group.area}</dt>
                <dd className="mt-1 text-ink-soft">{group.items.join("、")}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-14 text-xl font-bold">大事にしていること</h3>
          <ul className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {practices.map((practice) => (
              <li key={practice.title} className="border-l-4 border-marker-deep pl-4">
                <p className="font-bold">{practice.title}</p>
                <p className="mt-1 text-ink-soft">{practice.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <div className="graph-paper border-t border-rule">
          <section aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl">
              まずは気軽にご相談ください
            </h2>
            <p className="mt-4 max-w-2xl">
              {contact.lead}
              {contact.reply}
            </p>
            <div className="mt-8">
              <ContactButton />
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-rule px-4 py-6 text-center text-sm text-ink-soft">© {site.name}</footer>
    </>
  );
}
