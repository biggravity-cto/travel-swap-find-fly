
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTravelAgentChat } from '@/components/travel-agent/hooks/useTravelAgentChat';
import TravelAgentSidebar from '@/components/travel-agent/TravelAgentSidebar';
import MessageList from '@/components/travel-agent/MessageList';
import ChatInput from '@/components/travel-agent/ChatInput';
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import TravelAgentFooter from '@/components/travel-agent/TravelAgentFooter';

const TravelAgent = () => {
  const {
    messages,
    inputValue,
    loading,
    isSellMode,
    setInputValue,
    handleSendMessage,
    startPromptFlow,
    toggleMode
  } = useTravelAgentChat();
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Simple header with back button */}
      <header className="h-14 px-4 flex items-center border-b fixed top-0 left-0 right-0 z-50 bg-background">
        <Link to="/" className="flex items-center text-tt-blue hover:text-tt-blue-dark transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      
      <div className="flex flex-1 pt-14">
        <SidebarProvider defaultOpen={!window.matchMedia('(max-width: 768px)').matches}>
          <Sidebar 
            className="h-[calc(100vh-3.5rem)] border-r"
            collapsible="offcanvas"
          >
            <TravelAgentSidebar 
              startPromptFlow={startPromptFlow}
              isSellMode={isSellMode}
            />
          </Sidebar>
          
          <div className="flex-1 overflow-hidden h-[calc(100vh-3.5rem)]">
            <div className="relative h-full flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-4xl mx-auto">
                  <MessageList 
                    messages={messages}
                    loading={loading}
                    handleSendMessage={handleSendMessage}
                    setInputValue={setInputValue}
                    showPromptSuggestions={messages.length === 1}
                    startPromptFlow={startPromptFlow}
                    isSellMode={isSellMode}
                  />
                </div>
              </div>
              
              <div className="border-t bg-background py-4 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <SidebarTrigger className="md:hidden mb-3" />
                  <ChatInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleSendMessage={handleSendMessage}
                    loading={loading}
                    isSellMode={isSellMode}
                    toggleMode={toggleMode}
                  />
                  <TravelAgentFooter />
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
