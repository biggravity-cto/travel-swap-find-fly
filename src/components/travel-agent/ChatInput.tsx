
import React from 'react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  loading: boolean;
  isSellMode: boolean;
  toggleMode: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  loading,
  isSellMode,
  toggleMode
}) => {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-end mb-3">
        <div className="flex items-center space-x-2">
          <Label htmlFor="mode-switch" className="text-sm text-muted-foreground">
            Plan & Book
          </Label>
          <Switch 
            id="mode-switch"
            checked={isSellMode}
            onCheckedChange={toggleMode}
          />
          <Label htmlFor="mode-switch" className={`text-sm ${isSellMode ? 'text-tt-blue font-medium' : 'text-muted-foreground'}`}>
            Sell My Travel
          </Label>
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Input
          placeholder={isSellMode ? "Describe the travel you want to sell..." : "Type your travel query here..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          <Zap size={16} className="mr-1" /> Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
