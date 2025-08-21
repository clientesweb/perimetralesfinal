import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "white",
          background: "#e11d48",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 60, fontWeight: "bold", marginBottom: 20 }}>Perimetrales las Flores</div>
          <div style={{ fontSize: 30, maxWidth: 800 }}>Líderes en Soluciones de Seguridad Perimetral</div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
