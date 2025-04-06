
import React from 'react';
import Header from '@/components/Header';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import TravelAgentSidebar from '@/components/travel-agent/TravelAgentSidebar';
import MessageList from '@/components/travel-agent/MessageList';
import ChatInput from '@/components/travel-agent/ChatInput';
import { useTravelAgentChat } from '@/components/travel-agent/hooks/useTravelAgentChat';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelAgent = () => {
  const {
    messages,
    inputValue,
    loading,
    currentFlow,
    isSellMode,
    setInputValue,
    handleSendMessage,
    startPromptFlow,
    toggleMode
  } = useTravelAgentChat();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="flex-grow overflow-hidden flex flex-col">
        <div className="container-custom">
          <Link to="/">
            <Button variant="ghost" className="mt-4 mb-2 text-tt-blue hover:text-tt-blue-dark">
              <ChevronLeft size={16} className="mr-1" /> Back to homepage
            </Button>
          </Link>
        </div>
        
        <SidebarProvider>
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar className="overflow-y-auto">
              <TravelAgentSidebar startPromptFlow={startPromptFlow} />
            </Sidebar>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col max-h-full overflow-hidden">
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4">
                <MessageList 
                  messages={messages}
                  loading={loading}
                  handleSendMessage={handleSendMessage}
                  setInputValue={setInputValue}
                  showPromptSuggestions={!currentFlow && messages.length < 3}
                  startPromptFlow={startPromptFlow}
                  isSellMode={isSellMode}
                />
              </div>
              
              {/* Input Area - Positioned at the bottom */}
              <div className="border-t bg-white p-4 w-full">
                <ChatInput 
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleSendMessage={handleSendMessage}
                  loading={loading}
                  isSellMode={isSellMode}
                  toggleMode={toggleMode}
                />
                
                {/* Minimal Footer */}
                <div className="max-w-3xl mx-auto mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
                  <span>© 2025 TransferTravel.com</span>
                  <div className="space-x-4">
                    <a href="#" className="hover:text-gray-600">Privacy</a>
                    <a href="#" className="hover:text-gray-600">Terms</a>
                    <a href="#" className="hover:text-gray-600">Help</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default TravelAgent;
