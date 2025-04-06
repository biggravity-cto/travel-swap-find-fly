
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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
        <div className="text-sm text-tt-blue font-medium">
          {isSellMode ? 'Seller Mode' : 'Traveler Mode'}
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="mode-switch" className="text-xs text-muted-foreground">
            Traveler
          </Label>
          <Switch 
            id="mode-switch"
            checked={isSellMode}
            onCheckedChange={toggleMode}
          />
          <Label htmlFor="mode-switch" className={`text-xs ${isSellMode ? 'text-tt-blue font-medium' : 'text-muted-foreground'}`}>
            Seller
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
        <Button type="submit" disabled={loading} className="whitespace-nowrap">
          <Zap size={16} className="mr-1" /> Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
