
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Message } from './types';

interface MessageListProps {
  messages: Message[];
  loading: boolean;
  handleSendMessage: (e: React.FormEvent) => void;
  setInputValue: (value: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  loading, 
  handleSendMessage, 
  setInputValue 
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
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
