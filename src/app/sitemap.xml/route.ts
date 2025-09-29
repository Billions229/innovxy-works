import { NextResponse } from "next/server";

export async function GET() {
  const urls = [
    { loc: "https://innovyxworks.com", changefreq: "weekly", priority: "1.0" },
    { loc: "https://innovyxworks.com/privacy", changefreq: "monthly", priority: "0.5" },
    { loc: "https://innovyxworks.com/terms", changefreq: "monthly", priority: "0.5" },
    { loc: "https://innovyxworks.com/cookies", changefreq: "monthly", priority: "0.5" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
        <url>
          <loc>${u.loc}</loc>
          <changefreq>${u.changefreq}</changefreq>
          <priority>${u.priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
