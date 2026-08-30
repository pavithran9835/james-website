import { ImageResponse } from "next/og";
import { site } from "@/lib/seo";

// Branded 1200×630 (1.91:1) social-share card, generated at build time and
// served at /og-image.png. Referenced as the default og:image/twitter:image
// via site.ogImage — product pages override it with their product photos.
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbf9f4",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 34,
              color: "#061b0e",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#9b4149",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              color: "#061b0e",
              fontWeight: 700,
            }}
          >
            Organic Beetroot
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              color: "#9b4149",
              fontStyle: "italic",
            }}
          >
            Powder, Perfected.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#434843" }}>
            ~250mg dietary nitrate per scoop · Cold-milled · Lab tested
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#061b0e",
              color: "#fbf9f4",
              fontSize: 26,
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "20px 40px",
            }}
          >
            Shop Beetroot Powder
          </div>
          <div style={{ fontSize: 26, color: "#434843" }}>
            {new URL(site.baseUrl).host.replace(/^www\./, "")}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
