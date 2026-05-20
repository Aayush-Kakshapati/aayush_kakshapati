import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("API ROUTE HIT");

    console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);
    console.log("CONTACT EMAIL:", process.env.CONTACT_EMAIL);

    const body = await req.json();

    console.log("BODY:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const response = await resend.emails.send({
      from: "Portfolio Contact <https://aayushkakshapati.vercel.app/>",

      to: process.env.CONTACT_EMAIL!,

      subject: `New Portfolio Message from ${name}`,

      replyTo: email,

      html: `
        <div>
          <h2>Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p>${message}</p>
        </div>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return NextResponse.json(
      {
        success: true,
        response,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 },
    );
  }
}