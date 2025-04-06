
import { useState, useEffect } from 'react';
import { Message, PromptSuggestion, StepByStepFlow } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Mock function to simulate AI response
const getAIResponse = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return `AI Response: You said "${message}"`;
};

export const useTravelAgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      content: "Hi! I'm your AI Travel Assistant. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
      isIntro: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<StepByStepFlow | null>(null);
  const [isSellMode, setIsSellMode] = useState(false);

  const toggleMode = () => {
    setIsSellMode(prev => !prev);
    // Update welcome message based on mode
    if (messages.length === 1 && messages[0].isIntro) {
      const newWelcomeMessage = !isSellMode 
        ? "Hi! I'm your AI Travel Assistant. I'll help you sell your unused travel bookings. What would you like to sell today?"
        : "Hi! I'm your AI Travel Assistant. How can I help you plan your next trip?";
      
      setMessages([{
        id: uuidv4(),
        content: newWelcomeMessage,
        role: 'assistant',
        timestamp: new Date(),
        isIntro: true
      }]);
    }
  };

  const startPromptFlow = (prompt: PromptSuggestion) => {
    const initialFlow: StepByStepFlow = {
      type: prompt.type,
      title: prompt.title,
      steps: [],
      userInput: {},
      currentStep: 0,
    };
    setCurrentFlow(initialFlow);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const aiResponseContent = await getAIResponse(inputValue);
      const aiResponse: Message = {
        id: uuidv4(),
        content: aiResponseContent,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-scroll when messages update
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  return {
    messages,
    inputValue,
    loading,
    currentFlow,
    isSellMode,
    setInputValue,
    handleSendMessage,
    startPromptFlow,
    toggleMode
  };
};
