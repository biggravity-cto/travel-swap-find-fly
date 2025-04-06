
// Common types used across travel agent components
export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isIntro?: boolean;
  flow?: StepByStepFlow;
  currentStep?: number;
}

export interface PromptSuggestion {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'vacation' | 'business' | 'deal-hunter' | 'reseller' | 'affiliate' | 'provider';
  category: 'traveler' | 'seller';
}

export interface Step {
  question: string;
  options?: string[];
  type: 'text' | 'options' | 'date' | 'location' | 'budget';
  fieldName: string;
}

export interface StepByStepFlow {
  type: 'vacation' | 'business' | 'deal-hunter' | 'reseller' | 'affiliate' | 'provider';
  title: string;
  steps: Step[];
  userInput: Record<string, string>;
  currentStep: number;
}
