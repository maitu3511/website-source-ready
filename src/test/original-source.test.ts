import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { mediaUrl, originalMediaDestination } from "../lib/original-media";

describe("Uploaded source preservation", () => {
  it("retains the uploaded index.html without changing or removing it", () => {
    const bytes = readFileSync("index.html");
    expect(createHash("sha256").update(bytes).digest("hex")).toBe(
      "d100d0b426f32a3ce26c47d6d1c7d51a776383356d8adac0b8a453bf36ebe1b4",
    );
  });

  it("maps only explicitly restored media paths", () => {
    expect(originalMediaDestination("/media/page-images/hero_home_moulding_new.jpg")).toMatch(
      /^\/__l5e\/assets-v1\/.+\/hero_home_moulding_new\.jpg$/,
    );
    expect(originalMediaDestination("/media/unknown.jpg")).toBeUndefined();
    expect(originalMediaDestination("/constructor")).toBeUndefined();
  });

  it("keeps logo URLs independent of Netlify and Hostinger origins", () => {
    const logo = mediaUrl("/media/branding/advay-engineers-symbol.png");
    expect(new URL(logo, "https://example.netlify.app").href).toBe(logo);
    expect(new URL(logo, "https://example-hostinger.com").href).toBe(logo);
    expect(logo).toMatch(/^https:\/\/.+\.lovable\.app\/__l5e\/assets-v1\//);
    expect(() => mediaUrl("/media/missing.jpg")).toThrow("Missing original website asset");
  });
});
