import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import Home from "@/app/page";
import { ContactButton } from "@/components/contact-button";
import { prices } from "@/lib/content";

it("has a heading for every section in page order", () => {
  render(<Home />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("小さな業務のシステム、ひとりで作ります。");
  expect(screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent)).toEqual([
    "できること",
    "料金の目安",
    "依頼の流れ",
    "技術と進め方",
    "まずは気軽にご相談ください",
  ]);
});

it("lists every price and the steps in order", () => {
  render(<Home />);

  const rows = within(screen.getByRole("table", { name: "料金の目安" })).getAllByRole("row").slice(1);
  expect(rows).toHaveLength(prices.length);
  expect(rows[0]).toHaveTextContent(prices[0].item);
  expect(within(screen.getByRole("region", { name: "依頼の流れ" })).getAllByRole("listitem")[0]).toHaveTextContent("相談");
});

it("opens the Google Form in a new tab, or says the form is not ready", () => {
  const { unmount } = render(<ContactButton formUrl="https://forms.gle/example" />);
  const link = screen.getByRole("link", { name: "相談する（Googleフォームが新しいタブで開きます）" });
  expect(link).toHaveAttribute("href", "https://forms.gle/example");
  expect(link).toHaveAttribute("target", "_blank");
  unmount();

  render(<ContactButton formUrl="" />);
  expect(screen.getByText("相談フォームは準備中です")).toBeInTheDocument();
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
});
