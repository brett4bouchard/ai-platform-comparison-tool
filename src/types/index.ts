export interface Platform {
  id: string
  name: string
  description: string
  websiteUrl: string
  pricingUrl: string
  pricingModel: string
  categoryTags: string[]
  criteriaScores: Record<string, number>
  lastUpdated: Date
  status: "active" | "deprecated" | "pivoted"
}

export interface UserRequirements {
  projectType: string
  criteria: Record<string, boolean>
  budget: string
  additionalDetails?: string
}

export interface ComparisonResult {
  platform: Platform
  matchScore: number
  strengths: string[]
  tradeoffs: string[]
}

export interface SearchRequest {
  projectType: string
  criteria: Record<string, boolean>
  budget: string
  additionalDetails?: string
}

export interface SearchResponse {
  results: ComparisonResult[]
  total: number
  query: SearchRequest
}

export const PROJECT_TYPES = [
  "Customer Support Automation",
  "Content Generation & Marketing", 
  "Data Analysis & Reporting",
  "Lead Generation & Sales",
  "Internal Process Automation",
  "E-commerce & Shopping",
  "Voice & Audio Processing",
  "Document Processing",
  "Custom/Other"
] as const

export const CRITERIA_OPTIONS = [
  "Low Technical Expertise Required",
  "Client Access Needed", 
  "Enterprise Security/Compliance",
  "API Integration Required",
  "Built-in Knowledge Base/RAG",
  "Multi-language Support",
  "White-labeling/Custom Branding",
  "High Volume/Scalability",
  "Real-time Processing",
  "Mobile App Support"
] as const

export const BUDGET_RANGES = [
  "Free/Freemium Only",
  "Under $50/month",
  "$50-200/month", 
  "$200-500/month",
  "$500+/month",
  "Enterprise Pricing"
] as const

export type ProjectType = typeof PROJECT_TYPES[number]
export type CriteriaOption = typeof CRITERIA_OPTIONS[number]
export type BudgetRange = typeof BUDGET_RANGES[number]