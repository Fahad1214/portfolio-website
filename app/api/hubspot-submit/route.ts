import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const portalId = "46181246";
    const formId = "81647545-919e-4347-8bf5-31ceeec760dc";

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: body.fields,
      context: body.context,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot API error:", errorData);
      return NextResponse.json(
        { error: "Form submission failed", details: errorData },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting to HubSpot:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

