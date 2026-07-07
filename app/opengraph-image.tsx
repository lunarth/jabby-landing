import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "jabby — Infrastructure de recouvrement amiable pour le Maroc";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #0F2C5C 0%, #1B4B9B 100%)",
          padding: 80,
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>
          <span style={{ color: "#FFFFFF" }}>jabb</span>
          <span style={{ color: "#E8651A" }}>y</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 1.1,
              maxWidth: 900
            }}
          >
            Confiez vos créances. Récupérez votre trésorerie.
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: 860
            }}
          >
            Le recouvrement amiable, opéré de bout en bout pour les entreprises
            marocaines. Tracé à chaque action, rémunéré au résultat.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Au succès", "Traçabilité", "Conformité"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: 999,
                color: "#FFFFFF",
                fontSize: 24,
                padding: "10px 26px"
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
