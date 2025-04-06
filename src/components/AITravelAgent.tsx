
import React, { useState } from 'react';
import { MessageSquare, Search, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const AITravelAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI Travel Assistant. I can help you find deals, plan trips, or discover rewards. How can I help you today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response (would connect to actual AI in production)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I found several options that might interest you. Based on your preferences, I recommend checking out our special Barcelona package that includes discounted tickets to Sagrada Familia. Would you like more details?",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center text-tt-blue">
          <MessageSquare className="mr-2" size={20} />
          AI Travel Agent
        </CardTitle>
        <CardDescription>
          Get personalized travel recommendations, find deals, and earn rewards
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="chat">
        <TabsList className="grid grid-cols-3 mb-2">
          <TabsTrigger value="chat" className="flex items-center">
            <MessageSquare className="mr-1" size={16} /> Chat
          </TabsTrigger>
          <TabsTrigger value="deals" className="flex items-center">
            <Search className="mr-1" size={16} /> Find Deals
          </TabsTrigger>
          <TabsTrigger value="rewards" className="flex items-center">
            <Gift className="mr-1" size={16} /> Rewards
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="chat">
          <CardContent className="h-80 overflow-y-auto mb-4 border rounded-md p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-tt-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
          </CardContent>
          
          <CardFooter>
            <form onSubmit={handleSendMessage} className="w-full flex gap-2">
              <Input
                placeholder="Ask about travel deals, destinations, or rewards..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">
                <Zap size={16} className="mr-1" /> Ask
              </Button>
            </form>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="deals">
          <CardContent>
            <div className="text-center py-8">
              <Zap size={48} className="mx-auto mb-4 text-tt-teal" />
              <h3 className="text-lg font-medium mb-2">Deal Finder</h3>
              <p className="text-gray-600 mb-4">
                I'll actively search for deals matching your preferences and notify you when I find something special!
              </p>
              <Button className="bg-tt-teal">Set Up Deal Alerts</Button>
            </div>
          </CardContent>
        </TabsContent>
        
        <TabsContent value="rewards">
          <CardContent>
            <div className="text-center py-8">
              <Gift size={48} className="mx-auto mb-4 text-tt-yellow" />
              <h3 className="text-lg font-medium mb-2">TransferTravel Rewards</h3>
              <p className="text-gray-600 mb-4">
                Earn points on bookings and unlock special offers from our local business partners!
              </p>
              <Button className="bg-tt-yellow text-tt-black hover:bg-tt-yellow/90">Explore Rewards</Button>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default AITravelAgent;
