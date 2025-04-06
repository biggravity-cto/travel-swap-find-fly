
import React from 'react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  loading: boolean;
  showQuickSuggestions: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  loading,
  showQuickSuggestions
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Input
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          <Zap size={16} className="mr-1" /> Send
        </Button>
      </form>
      
      {/* Quick suggestions */}
      {showQuickSuggestions && (
        <div className="mt-3 flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            onClick={() => {
              setInputValue("What destinations are popular right now?");
              handleSendMessage(new Event('submit') as any);
            }}
          >
            Popular destinations
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs"
            onClick={() => {
              setInputValue("How can I sell my unused hotel booking?");
              handleSendMessage(new Event('submit') as any);
            }}
          >
            Sell unused booking
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs"
            onClick={() => {
              setInputValue("Find me a budget-friendly beach vacation");
              handleSendMessage(new Event('submit') as any);
            }}
          >
            Budget beach vacation
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
