import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    GET: async () => {
      const baseUrl = "https://pickify.com";
      const routes = [
        { path: "/", priority: "1.0", changefreq: "daily" },
        { path: "/deals", priority: "0.9", changefreq: "daily" },
        { path: "/categories", priority: "0.8", changefreq: "weekly" },
        { path: "/about", priority: "0.5", changefreq: "monthly" },
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

      return new Response(sitemap, {
        status: 200,
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
      });
    },
  },
});
