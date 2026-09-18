import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];

  return routes.map((route) => ({
    url: `https://brentoncodes.dev${route}`,
    lastModified: new Date(),
  }));
}