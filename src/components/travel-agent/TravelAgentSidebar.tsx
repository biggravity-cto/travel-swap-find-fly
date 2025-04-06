
import React from 'react';
import { MessageSquare, History, User, LogIn, Github, Mail, Phone, BookmarkCheck, Tag } from 'lucide-react';
import { 
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter 
} from '@/components/ui/sidebar';
import { PromptSuggestion } from './types';

interface TravelAgentSidebarProps {
  startPromptFlow: (prompt: PromptSuggestion) => void;
  isSellMode: boolean;
}

const TravelAgentSidebar: React.FC<TravelAgentSidebarProps> = ({ startPromptFlow, isSellMode }) => {
  // Demo chat history items for travelers
  const travelerHistoryItems = [
    { id: 'chat-1', title: 'Paris Trip Planning', date: '2 days ago' },
    { id: 'chat-2', title: 'Tokyo Business Trip', date: '1 week ago' },
    { id: 'chat-3', title: 'Bali Family Vacation', date: '2 weeks ago' },
  ];

  // Demo saved items for travelers
  const travelerSavedItems = [
    { id: 'saved-1', title: 'Hawaii Trip', date: '3 days ago' },
    { id: 'saved-2', title: 'Europe Summer Tour', date: '1 week ago' },
  ];

  // Demo alerts for travelers
  const travelerAlertItems = [
    { id: 'alert-1', title: 'Price Drop: NYC Flight', date: '1 day ago' },
    { id: 'alert-2', title: 'Hotel Deal in Barcelona', date: '3 days ago' },
  ];

  // Demo seller items
  const sellerListingItems = [
    { id: 'listing-1', title: 'London-Paris Flight', date: '3 days ago' },
    { id: 'listing-2', title: 'Cancun Resort Stay', date: '5 days ago' },
    { id: 'listing-3', title: 'Amsterdam City Break', date: '1 week ago' },
  ];

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center px-2 py-1">
          <MessageSquare className="mr-2 h-5 w-5 text-tt-blue" />
          <h2 className="text-lg font-semibold text-tt-blue">
            {isSellMode ? 'AI Resell Agent' : 'AI Travel Agent'}
          </h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageSquare className="h-4 w-4" />
                  <span>New Chat</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {isSellMode ? (
                // Seller history items
                sellerListingItems.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton tooltip={chat.date}>
                      <History className="h-4 w-4" />
                      <span>{chat.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                // Traveler history items
                travelerHistoryItems.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton tooltip={chat.date}>
                      <History className="h-4 w-4" />
                      <span>{chat.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        {/* Conditional section based on user mode */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {isSellMode ? 'Saved Listings' : 'Saved Trips & Alerts'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isSellMode ? (
                // Seller saved listings
                sellerListingItems.map((item) => (
                  <SidebarMenuItem key={`saved-${item.id}`}>
                    <SidebarMenuButton tooltip={item.date}>
                      <Tag className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                // Traveler saved trips and alerts
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BookmarkCheck className="h-4 w-4" />
                      <span className="font-medium">Saved Trips</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {travelerSavedItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton tooltip={item.date} className="pl-6">
                        <BookmarkCheck className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  
                  <SidebarMenuItem className="mt-2">
                    <SidebarMenuButton>
                      <BookmarkCheck className="h-4 w-4" />
                      <span className="font-medium">Price Alerts</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {travelerAlertItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton tooltip={item.date} className="pl-6">
                        <BookmarkCheck className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User className="h-4 w-4" />
                  <span>My Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Sign Up With</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Phone className="h-4 w-4" />
                  <span>Phone</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span>Google</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                  </svg>
                  <span>Facebook</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="#FEE500" />
                    <path d="M13.5 12c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" fill="#3B1E1E" />
                  </svg>
                  <span>Kakao</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-4 py-2 text-xs text-muted-foreground">
          <p>© 2025 TransferTravel</p>
        </div>
      </SidebarFooter>
    </>
  );
};

export default TravelAgentSidebar;
