
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Message } from './types';
import { travelerPrompts, sellerPrompts } from './PromptSuggestions';

interface MessageListProps {
  messages: Message[];
  loading: boolean;
  handleSendMessage: (e: React.FormEvent) => void;
  setInputValue: (value: string) => void;
  showPromptSuggestions?: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  loading, 
  handleSendMessage, 
  setInputValue,
  showPromptSuggestions = false
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-3xl mx-auto mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-6 ${
            message.role === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-4 rounded-lg max-w-[85%] ${
              message.role === 'user'
                ? 'bg-tt-blue text-white'
                : 'bg-white border border-gray-200 shadow-sm text-gray-800'
            }`}
          >
            <div className="prose prose-sm">{message.content}</div>
            
            {/* Render options if this is a step with options */}
            {message.flow?.steps[message.currentStep! - 1]?.options && (
              <div className="mt-3 flex flex-wrap gap-2">
                {message.flow.steps[message.currentStep! - 1].options!.map((option) => (
                  <Button 
                    key={option} 
                    variant="outline" 
                    size="sm"
                    className={message.role === 'user' ? 'bg-white text-tt-blue hover:bg-white/90' : ''}
                    onClick={() => {
                      setInputValue(option);
                      handleSendMessage(new Event('submit') as any);
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-1 mx-2">
            {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      ))}
      
      {/* Loading indicator */}
      {loading && (
        <div className="flex items-center space-x-2 text-left mb-6">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
            style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
            style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" 
            style={{ animationDelay: '300ms' }}></div>
        </div>
      )}
      
      {/* Prompt suggestions in the chat area */}
      {showPromptSuggestions && messages.length > 0 && (
        <div className="mt-4 mb-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-700 mb-3">Suggested prompts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {travelerPrompts.slice(0, 2).map((prompt) => (
              <Button 
                key={prompt.id}
                variant="outline"
                className="justify-start text-left h-auto py-3"
                onClick={() => startPromptFlow(prompt)}
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-gray-100 p-2 rounded-lg">
                    {prompt.icon}
                  </div>
                  <div>
                    <div className="font-medium">{prompt.title}</div>
                    <div className="text-xs text-gray-500">{prompt.description}</div>
                  </div>
                </div>
              </Button>
            ))}
            {sellerPrompts.slice(0, 1).map((prompt) => (
              <Button 
                key={prompt.id}
                variant="outline"
                className="justify-start text-left h-auto py-3"
                onClick={() => startPromptFlow(prompt)}
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-gray-100 p-2 rounded-lg">
                    {prompt.icon}
                  </div>
                  <div>
                    <div className="font-medium">{prompt.title}</div>
                    <div className="text-xs text-gray-500">{prompt.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
