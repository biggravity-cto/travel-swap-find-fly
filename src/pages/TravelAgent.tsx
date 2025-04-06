
import React from 'react';
import Header from '@/components/Header';
import { useTravelAgentChat } from '@/components/travel-agent/hooks/useTravelAgentChat';
import TravelAgentSidebar from '@/components/travel-agent/TravelAgentSidebar';
import MessageList from '@/components/travel-agent/MessageList';
import ChatInput from '@/components/travel-agent/ChatInput';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1 pt-[72px]">
        <SidebarProvider>
          <Sidebar className="h-[calc(100vh-72px)] border-r">
            <TravelAgentSidebar 
              startPromptFlow={startPromptFlow}
              isSellMode={isSellMode}
            />
          </Sidebar>
          
          <div className="flex-1 overflow-y-auto h-[calc(100vh-72px)] p-6">
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
              
              <div className="py-4 sticky bottom-0 bg-background">
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
      </div>
    </div>
  );
};

export default TravelAgent;
