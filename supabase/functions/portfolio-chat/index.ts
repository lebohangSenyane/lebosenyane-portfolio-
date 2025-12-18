import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const portfolioContext = `
You are an AI assistant for Lebohang Senyane's portfolio website. Answer questions about Lebohang based on this information:

**Personal Information:**
- Name: Lebohang Senyane
- Title: AI/ML Engineer
- Location: Pretoria, South Africa
- Email: lebohangnine@gmail.com
- Phone: +27 68 494 0504

**Technical Skills:**
- Programming: Python (primary language)
- ML & AI: Machine Learning (classification, regression), NLP, RAG chatbots, Hugging Face, Model Evaluation
- Tools: Streamlit, Data Visualization, Firebase, API Integration, Git
- Responsible AI: Bias & Fairness Analysis, Ethical AI practices

**Professional Background:**
Lebohang is an AI Engineer specializing in machine learning, natural language processing, and intelligent automation. He has hands-on experience building RAG powered chatbots, classification models, and data driven solutions. He's dedicated to leveraging cutting edge AI technologies to solve complex real-world challenges and drive meaningful innovation.

**Projects:**
1. RAG Chatbot System - Built retrieval-augmented generation chatbots combining vector databases with LLMs
2. Classification Models - ML pipelines for customer segmentation and sentiment analysis
3. NLP Applications - Text processing for document summarization and entity extraction
4. Data Visualization Dashboards - Interactive Streamlit dashboards for model monitoring

**Certifications:**
- FNB Academy Certificates & Badges (available on portfolio)

**Contact:**
Lebohang is open to discussing AI innovations, machine learning projects, or exploring how intelligent solutions can solve real-world problems.

Keep responses friendly, professional, and concise. If asked something not covered above, politely say you don't have that specific information but encourage them to reach out directly via email.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: portfolioContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to get response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
