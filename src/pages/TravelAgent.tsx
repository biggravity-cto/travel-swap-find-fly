
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
    setInputValue,
    handleSendMessage,
    startPromptFlow
  } = useTravelAgentChat();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-[calc(100vh-140px)]">
            {/* Left Sidebar */}
            <Sidebar>
              <TravelAgentSidebar startPromptFlow={startPromptFlow} />
            </Sidebar>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4">
                <MessageList 
                  messages={messages}
                  loading={loading}
                  handleSendMessage={handleSendMessage}
                  setInputValue={setInputValue}
                />
              </div>
              
              {/* Input Area */}
              <div className="border-t bg-white p-4">
                <ChatInput 
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleSendMessage={handleSendMessage}
                  loading={loading}
                  showQuickSuggestions={!currentFlow && messages.length < 3}
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
