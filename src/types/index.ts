export type PageId =
  | "home"
  | "capabilities"
  | "industries"
  | "applications"
  | "infrastructure"
  | "quality"
  | "about"
  | "contact";

export interface CapabilityItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image?: string;
  keyPoints?: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  highlightPart: string;
  iconName: string;
  image?: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  image?: string;
  details?: string;
  keyDeliverables?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  timeline: string;
  message: string;
  uploadedFileName?: string;
}
