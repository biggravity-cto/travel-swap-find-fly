
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
import Header from '@/components/Header';
import TravelAgentSidebar from '@/components/travel-agent/TravelAgentSidebar';
import MessageList from '@/components/travel-agent/MessageList';
import ChatInput from '@/components/travel-agent/ChatInput';
import { useTravelAgentChat } from '@/components/travel-agent/hooks/useTravelAgentChat';

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
    <div className="flex flex-col min-h-screen">
      {/* Header is rendered outside the main content area */}
      <Header />
      
      {/* Main content wrapper with proper spacing from header */}
      <div className="flex flex-col flex-grow mt-[72px]">
        {/* Back button */}
        <div className="container-custom mb-4">
          <Link to="/">
            <Button variant="ghost" className="text-tt-blue hover:text-tt-blue-dark">
              <ChevronLeft size={16} className="mr-1" /> Back to homepage
            </Button>
          </Link>
        </div>
        
        {/* Sidebar and chat area */}
        <SidebarProvider>
          <div className="flex flex-grow overflow-hidden h-[calc(100vh-132px)]">
            {/* Left Sidebar */}
            <Sidebar className="h-full overflow-y-auto">
              <TravelAgentSidebar 
                startPromptFlow={startPromptFlow} 
                isSellMode={isSellMode}
              />
            </Sidebar>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col overflow-hidden h-full">
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
              
              {/* Input Area */}
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
