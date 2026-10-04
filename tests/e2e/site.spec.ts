import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has no WCAG A/AA violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations.map((violation) => [violation.id, violation.nodes.map((node) => node.target.join(" "))])).toEqual([]);
});

for (const width of [320, 390, 1280]) {
  test(`fits a ${width}px wide screen`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("page links jump to their sections and the form opens in a new tab", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "ページ内" }).getByRole("link", { name: "料金" }).click();
  await expect(page).toHaveURL(/#prices$/);
  await expect(page.getByRole("heading", { level: 2, name: "料金の目安" })).toBeInViewport();

  const contact = page.getByRole("link", { name: /相談する/ }).first();
  await expect(contact).toHaveAttribute("target", "_blank");
  await expect(contact).toHaveAttribute("href", /^https:\/\//);
});
