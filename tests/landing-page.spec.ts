import { test, expect } from "@playwright/test";

test.describe("Gazella Vision Landing Page", () => {
  test("should load the homepage successfully", async ({ page }) => {
    await page.goto("/");

    // Check if the main heading is visible
    await expect(
      page.getByRole("heading", { name: /Fullstack en 8 semanas/i })
    ).toBeVisible();

    // Check if the navigation is working
    await expect(page.getByText("Gazella Vision")).toBeVisible();
  });

  test("should have responsive design on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check mobile menu button is visible
    await expect(page.getByRole("button").first()).toBeVisible();

    // Check content is properly laid out on mobile
    await expect(
      page.getByRole("heading", { name: /Fullstack en 8 semanas/i })
    ).toBeVisible();
  });

  test("should handle glassmorphism header correctly", async ({ page }) => {
    await page.goto("/");

    // Check header is sticky
    const header = page.locator("header");
    await expect(header).toHaveCSS("position", "fixed");

    // Check backdrop blur is applied
    await expect(header).toHaveClass(/backdrop-blur/);
  });

  test("should navigate to different sections", async ({ page }) => {
    await page.goto("/");

    // Test navigation to programa section
    await page.click('a[href="#programa"]');
    await expect(page.locator("#programa")).toBeInViewport();

    // Test navigation to precios section
    await page.click('a[href="#precios"]');
    await expect(page.locator("#precios")).toBeInViewport();
  });

  test("should have working CTA buttons", async ({ page }) => {
    await page.goto("/");

    // Check main CTA buttons are clickable
    const ctaButtons = page.getByRole("button", {
      name: /postula ahora|reserva tu cupo/i,
    });
    await expect(ctaButtons.first()).toBeVisible();
    await expect(ctaButtons.first()).toBeEnabled();
  });

  test("should display testimonials correctly", async ({ page }) => {
    await page.goto("/");

    // Scroll to testimonials section
    await page.locator("#testimonios").scrollIntoViewIfNeeded();

    // Check testimonials are visible
    await expect(page.getByText("Fiorella R.")).toBeVisible();
    await expect(page.getByText("Jorge M.")).toBeVisible();
    await expect(page.getByText("Carla T.")).toBeVisible();
  });

  test("should have proper pricing cards layout", async ({ page }) => {
    await page.goto("/");

    // Scroll to pricing section
    await page.locator("#precios").scrollIntoViewIfNeeded();

    // Check all pricing plans are visible
    await expect(page.getByText("Starter")).toBeVisible();
    await expect(page.getByText("Lanzamiento")).toBeVisible();
    await expect(page.getByText("Premium")).toBeVisible();

    // Check recommended badge
    await expect(page.getByText("Recomendado")).toBeVisible();
  });

  test("should handle mobile menu correctly", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Click mobile menu button
    const menuButton = page.getByRole("button").first();
    await menuButton.click();

    // Check mobile menu items are visible
    await expect(page.getByText("Programa")).toBeVisible();
    await expect(page.getByText("Características")).toBeVisible();
  });

  test("should have smooth scrolling animations", async ({ page }) => {
    await page.goto("/");

    // Test scroll behavior
    await page.evaluate(() => {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    });

    // Check if framer motion animations are working
    const motionElements = page.locator('[style*="transform"]');
    await expect(motionElements.first()).toBeVisible();
  });

  test("should be accessible", async ({ page }) => {
    await page.goto("/");

    // Check basic accessibility
    await expect(page).toHaveTitle(/Gazella Vision/i);

    // Check for proper heading hierarchy
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2 })).toBeVisible();

    // Check alt texts for images
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toHaveAttribute("alt");
    }
  });
});
