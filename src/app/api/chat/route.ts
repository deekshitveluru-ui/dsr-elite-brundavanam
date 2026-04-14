import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = "You are the elite digital concierge for DSR Elite Brundavanam, a luxury mixed-use township in Anantapur (NH-44). You must answer questions politely, professionally, and concisely. Key facts: It is an AHUDA approved township. It features 100% Vastu-compliant open plots and luxury villa plots. It is 30 mins from KIA Motors, 1.5 hrs from Hindupur, and 3 hrs from Bengaluru Airport. Amenities include a clubhouse, infinity pool, wave pool, zipline, and a Goshala. 100 acres of preserved natural forest are nearby. Contact info is info.dsrelite@gmail.com or +91 9112230234. Do not invent information. If asked something outside this scope, direct them to contact the sales team.";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // TODO: REPLACE THIS BLOCK WITH ACTUAL LLM SDK CALL (OpenAI / Google Gemini)
    // Example: const completion = await openai.chat.completions.create({ messages: [{role: "system", content: SYSTEM_PROMPT}, ...messages] });
    
    // Simulate API Network Delay for UI loading state visibility
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock response algorithm based on simple keywords to simulate comprehension
    let mockResponse = "Welcome to DSR Elite Brundavanam. As your digital concierge, how may I assist you with our luxury plotting or amenities today? Should you require direct assistance, please contact info.dsrelite@gmail.com or +91 9112230234.";
    const query = lastUserMessage.toLowerCase();

    if (query.includes("kia") || query.includes("airport") || query.includes("hindupur")) {
      mockResponse = "DSR Elite Brundavanam is strategically located directly on the NH-44 Expressway. We are just 30 minutes from KIA Motors India, 1.5 hours from the Hindupur Industrial Zone, and approximately 3 hours from Kempegowda International Airport (BLR).";
    } else if (query.includes("amenities") || query.includes("pool") || query.includes("goshala")) {
      mockResponse = "Our township boasts world-class amenities including a premium clubhouse, infinity pool, an exciting wave pool and zipline for recreation, and a dedicated Goshala. Furthermore, we are situated near 100 acres of preserved natural forest.";
    } else if (query.includes("vastu") || query.includes("plots")) {
      mockResponse = "We offer 100% Vastu-compliant open plots and luxury villa plots within an official AHUDA-approved layout, ensuring the highest standards of planning and infrastructure.";
    }

    return NextResponse.json({ 
      role: 'assistant', 
      content: mockResponse 
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
