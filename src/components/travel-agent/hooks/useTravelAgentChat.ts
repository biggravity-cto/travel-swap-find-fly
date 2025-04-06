
import { useState } from 'react';
import { Message, PromptSuggestion, StepByStepFlow } from '../types';
import { stepByStepFlows, generateFlowSummary } from '../StepByStepFlows';

export const useTravelAgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your AI Travel Assistant. How can I help with your travel plans today?",
      role: 'assistant',
      timestamp: new Date(),
      isIntro: true
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<StepByStepFlow | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && !currentFlow) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue || "I'd like assistance with this.",
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let aiResponse: Message;
      
      if (currentFlow) {
        const lastMessage = messages[messages.length - 1];
        const currentStep = lastMessage.flow?.currentStep || 0;
        
        // Store user input in the flow
        if (lastMessage.role === 'assistant' && lastMessage.flow) {
          const updatedFlow = { ...currentFlow };
          const field = updatedFlow.steps[currentStep - 1]?.fieldName;
          
          if (field) {
            updatedFlow.userInput[field] = inputValue;
          }
          
          setCurrentFlow(updatedFlow);
        }
        
        // Move to next step or finish flow
        if (currentStep < currentFlow.steps.length) {
          const nextStep = currentStep + 1;
          aiResponse = {
            id: Date.now().toString(),
            content: currentFlow.steps[nextStep - 1].question,
            role: 'assistant',
            timestamp: new Date(),
            flow: currentFlow,
            currentStep: nextStep
          };
        } else {
          // Flow complete - generate summary
          const summaryContent = generateFlowSummary(currentFlow);
          aiResponse = {
            id: Date.now().toString(),
            content: summaryContent,
            role: 'assistant',
            timestamp: new Date()
          };
          setCurrentFlow(null);
        }
      } else {
        // Regular response
        aiResponse = {
          id: Date.now().toString(),
          content: "I can help with that! Would you like some specific travel recommendations, or do you want to try one of our guided experiences from the sidebar?",
          role: 'assistant',
          timestamp: new Date(),
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  const startPromptFlow = (prompt: PromptSuggestion) => {
    const flow = stepByStepFlows[prompt.type];
    if (!flow) return;
    
    // Reset flow state with fresh userInput
    const freshFlow = {
      ...flow,
      userInput: {}
    };
    
    setCurrentFlow(freshFlow);
    
    // Add intro message and first question
    const introMessage: Message = {
      id: Date.now().toString(),
      content: `Let's ${prompt.title.toLowerCase()}! I'll ask you a few questions to better understand your needs.`,
      role: 'assistant',
      timestamp: new Date(),
      flow: freshFlow,
      currentStep: 0
    };
    
    const firstQuestion: Message = {
      id: (Date.now() + 1).toString(),
      content: freshFlow.steps[0].question,
      role: 'assistant',
      timestamp: new Date(),
      flow: freshFlow,
      currentStep: 1
    };
    
    setMessages(prev => [...prev, introMessage, firstQuestion]);
  };

  return {
    messages,
    inputValue,
    loading,
    currentFlow,
    setInputValue,
    handleSendMessage,
    startPromptFlow
  };
};
