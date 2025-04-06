
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar';
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
      <Header />
      
      <main className="flex-grow bg-gray-50 flex flex-col">
        <SidebarProvider>
          <div className="flex flex-grow">
            {/* Left Sidebar */}
            <Sidebar>
              <TravelAgentSidebar startPromptFlow={startPromptFlow} />
            </Sidebar>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col max-h-[calc(100vh-140px)] overflow-hidden">
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
              </div>
            </div>
          </div>
        </SidebarProvider>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelAgent;
