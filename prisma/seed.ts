import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const platforms = [
  {
    name: "Cassidy",
    description: "AI assistant for business workflows and customer support automation.",
    websiteUrl: "https://cassidy.ai",
    pricingUrl: "https://cassidy.ai/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Customer Support", "Automation", "Business Workflows"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "n8n",
    description: "Open-source workflow automation tool for technical teams.",
    websiteUrl: "https://n8n.io",
    pricingUrl: "https://n8n.io/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["Automation", "Workflows", "Integration"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 25,
      "Client Access Needed": 25,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Make",
    description: "Visual automation platform connecting apps and services.",
    websiteUrl: "https://make.com",
    pricingUrl: "https://make.com/en/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Automation", "Integration", "Visual Builder"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Flowgent",
    description: "AI-powered workflow automation with natural language processing.",
    websiteUrl: "https://flowgent.ai",
    pricingUrl: "https://flowgent.ai/pricing",
    pricingModel: "Credit-based",
    categoryTags: JSON.stringify(["AI Automation", "NLP", "Workflows"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 50,
      "Real-time Processing": 50,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Gumloop",
    description: "No-code AI automation platform for business processes.",
    websiteUrl: "https://gumloop.com",
    pricingUrl: "https://gumloop.com/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["No-code", "AI Automation", "Business Process"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 50,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Lindy",
    description: "AI assistant for personal and business task automation.",
    websiteUrl: "https://lindy.ai",
    pricingUrl: "https://lindy.ai/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["AI Assistant", "Task Automation", "Personal Productivity"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 50,
      "Real-time Processing": 75,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "MindStudio",
    description: "AI app builder with visual interface for creating custom AI applications.",
    websiteUrl: "https://mindstudio.ai",
    pricingUrl: "https://mindstudio.ai/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["AI Apps", "Visual Builder", "Custom AI"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Dify",
    description: "Open-source LLMOps platform for building AI applications.",
    websiteUrl: "https://dify.ai",
    pricingUrl: "https://dify.ai/pricing",
    pricingModel: "Open Source",
    categoryTags: JSON.stringify(["LLMOps", "Open Source", "AI Development"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 100,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 100,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Langflow",
    description: "Visual framework for building multi-agent and RAG applications.",
    websiteUrl: "https://langflow.org",
    pricingUrl: "https://langflow.org/pricing",
    pricingModel: "Open Source",
    categoryTags: JSON.stringify(["RAG", "Multi-agent", "Visual Development"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Flowise",
    description: "Drag & drop UI to build customized LLM flows.",
    websiteUrl: "https://flowiseai.com",
    pricingUrl: "https://flowiseai.com/pricing",
    pricingModel: "Open Source",
    categoryTags: JSON.stringify(["LLM", "Drag & Drop", "Open Source"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Chatbase",
    description: "Build and embed chatbots trained on your data.",
    websiteUrl: "https://chatbase.co",
    pricingUrl: "https://chatbase.co/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Chatbots", "Customer Support", "Data Training"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 75,
      "High Volume/Scalability": 75,
      "Real-time Processing": 100,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Vapi",
    description: "Voice AI platform for building conversational applications.",
    websiteUrl: "https://vapi.ai",
    pricingUrl: "https://vapi.ai/pricing",
    pricingModel: "API usage",
    categoryTags: JSON.stringify(["Voice AI", "Conversational AI", "API"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 25,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 100,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 100
    }),
    status: "active"
  },
  {
    name: "ElevenLabs",
    description: "AI voice generation and cloning platform.",
    websiteUrl: "https://elevenlabs.io",
    pricingUrl: "https://elevenlabs.io/pricing",
    pricingModel: "Credit-based",
    categoryTags: JSON.stringify(["Voice Generation", "Voice Cloning", "Audio AI"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 100,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Plumb",
    description: "AI workflow automation platform for complex business processes.",
    websiteUrl: "https://plumb.ai",
    pricingUrl: "https://plumb.ai/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Workflow Automation", "Business Process", "AI Automation"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Autohive",
    description: "AI-powered automation platform for customer service and support.",
    websiteUrl: "https://autohive.ai",
    pricingUrl: "https://autohive.ai/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Customer Service", "AI Automation", "Support"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 100,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Relevance",
    description: "AI platform for building and deploying custom AI agents and workflows.",
    websiteUrl: "https://relevanceai.com",
    pricingUrl: "https://relevanceai.com/pricing",
    pricingModel: "Credit-based",
    categoryTags: JSON.stringify(["AI Agents", "Custom AI", "Workflows"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 100,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Text.cortex",
    description: "AI content generation and optimization platform for marketing teams.",
    websiteUrl: "https://textcortex.com",
    pricingUrl: "https://textcortex.com/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Content Generation", "Marketing", "Text AI"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 100,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Relay.app",
    description: "Visual workflow automation platform with AI capabilities.",
    websiteUrl: "https://relay.app",
    pricingUrl: "https://relay.app/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["Workflow Automation", "Visual Builder", "Integration"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Supervity",
    description: "Enterprise-only AI automation and workflow management platform.",
    websiteUrl: "https://supervity.com",
    pricingUrl: "https://supervity.com/contact",
    pricingModel: "Enterprise Pricing",
    categoryTags: JSON.stringify(["Enterprise", "AI Automation", "Workflow Management"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 25,
      "Enterprise Security/Compliance": 100,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 75,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "PySpur",
    description: "Python-based AI development platform for building intelligent applications.",
    websiteUrl: "https://pyspur.dev",
    pricingUrl: "https://pyspur.dev/pricing",
    pricingModel: "Open Source",
    categoryTags: JSON.stringify(["Python", "AI Development", "Open Source"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 25,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 100,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Databutton",
    description: "AI-powered data app builder with Python and SQL support.",
    websiteUrl: "https://databutton.io",
    pricingUrl: "https://databutton.io/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["Data Apps", "Python", "Analytics"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 75,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "String",
    description: "Workflow automation platform by Pipedream for developers.",
    websiteUrl: "https://pipedream.com",
    pricingUrl: "https://pipedream.com/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["Developer Tools", "Workflow Automation", "API Integration"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 25,
      "Client Access Needed": 25,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 75,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 25
    }),
    status: "active"
  },
  {
    name: "Hostinger Horizons",
    description: "AI website builder and hosting platform with automation features.",
    websiteUrl: "https://hostinger.com/horizons",
    pricingUrl: "https://hostinger.com/horizons/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Website Builder", "AI Automation", "Hosting"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 50,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 75,
      "High Volume/Scalability": 75,
      "Real-time Processing": 50,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "QuintaDB",
    description: "Database and workflow automation platform with AI capabilities.",
    websiteUrl: "https://quintadb.com",
    pricingUrl: "https://quintadb.com/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Database", "Workflow Automation", "Data Management"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 50,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Mootion",
    description: "AI-powered motion graphics and animation platform.",
    websiteUrl: "https://mootion.com",
    pricingUrl: "https://mootion.com/pricing",
    pricingModel: "Credit-based",
    categoryTags: JSON.stringify(["Motion Graphics", "Animation", "Video AI"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 50,
      "Built-in Knowledge Base/RAG": 25,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 50,
      "Real-time Processing": 75,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Soshie",
    description: "AI-powered social media and content creation platform by Sintra AI.",
    websiteUrl: "https://sintra.ai/soshie",
    pricingUrl: "https://sintra.ai/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Social Media", "Content Creation", "Marketing AI"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 50,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 100
    }),
    status: "active"
  },
  {
    name: "Taskade",
    description: "AI-powered project management and collaboration platform.",
    websiteUrl: "https://taskade.com",
    pricingUrl: "https://taskade.com/pricing",
    pricingModel: "Freemium",
    categoryTags: JSON.stringify(["Project Management", "Collaboration", "AI Productivity"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 100,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 25,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 100
    }),
    status: "active"
  },
  {
    name: "JustCall AI",
    description: "AI voice agent platform for sales and customer service calls.",
    websiteUrl: "https://justcall.io/ai",
    pricingUrl: "https://justcall.io/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Voice AI", "Sales", "Customer Service"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 100,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 75,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 75
    }),
    status: "active"
  },
  {
    name: "Runner H",
    description: "AI automation platform by H Company for business workflows.",
    websiteUrl: "https://runner-h.com",
    pricingUrl: "https://runner-h.com/pricing",
    pricingModel: "Subscription",
    categoryTags: JSON.stringify(["Business Automation", "Workflows", "AI Runner"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 75,
      "Client Access Needed": 50,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 75,
      "Built-in Knowledge Base/RAG": 50,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 50,
      "High Volume/Scalability": 75,
      "Real-time Processing": 75,
      "Mobile App Support": 50
    }),
    status: "active"
  },
  {
    name: "Lutra",
    description: "AI-powered data analysis and workflow automation platform.",
    websiteUrl: "https://lutra.ai",
    pricingUrl: "https://lutra.ai/pricing",
    pricingModel: "Credit-based",
    categoryTags: JSON.stringify(["Data Analysis", "Workflow Automation", "AI Analytics"]),
    criteriaScores: JSON.stringify({
      "Low Technical Expertise Required": 50,
      "Client Access Needed": 75,
      "Enterprise Security/Compliance": 75,
      "API Integration Required": 100,
      "Built-in Knowledge Base/RAG": 75,
      "Multi-language Support": 50,
      "White-labeling/Custom Branding": 75,
      "High Volume/Scalability": 100,
      "Real-time Processing": 100,
      "Mobile App Support": 50
    }),
    status: "active"
  }
]

async function main() {
  console.log('Start seeding...')
  
  for (const platform of platforms) {
    const result = await prisma.platform.create({
      data: platform,
    })
    console.log(`Created platform: ${result.name}`)
  }
  
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })