import { NextRequest, NextResponse } from "next/server";

const TAGMANGO_API = "https://api-prod-new.tagmango.com/api/v1/external/migrate-user";
const API_TOKEN = "tmk_6a232201e322c1bda9a352bb.3fbaca635a43bac2216f849aea90498b53a6cbf0543f439afd4a037dd88f3b77";
const MANGO_ID = "6a20167b01c704662ee23579";
const WHITELABEL_HOST = "project.aksharyogaonline.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, dialCode, country } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const res = await fetch(TAGMANGO_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        "x-whitelabel-host": WHITELABEL_HOST,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        dialCode: dialCode || "+91",
        country: country || "IN",
        mangoId: MANGO_ID,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "TagMango API error" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Register API error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: String(err) },
      { status: 500 }
    );
  }
}
