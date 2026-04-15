import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    GET: async () => {
      const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://pickify.com/sitemap.xml`;

      return new Response(robots, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "public, max-age=86400",
        },
      });
    },
  },
});
