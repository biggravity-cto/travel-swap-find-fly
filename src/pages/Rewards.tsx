
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Rewards = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tt-blue to-tt-blue-dark pt-16 pb-24 md:pt-24 md:pb-32 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop')" }} />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mb-12">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
                TransferTravel Rewards
              </h1>
              <p className="text-white/85 text-lg md:text-xl mb-8">
                Earn points with every booking and unlock exclusive perks, discounts, and experiences at your favorite destinations.
              </p>
              <Button size="lg" className="bg-white text-tt-blue hover:bg-gray-100">
                Join Rewards Program
              </Button>
            </div>
          </div>
        </section>
        
        {/* Membership Status */}
        <section className="py-16">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-semibold">Your Membership</h2>
                  <div className="flex items-center space-x-3">
                    <div className="bg-tt-gold rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6">
                        <path d="M12 1v4M18.6 4l-2.3 3.5M22.5 11h-4M18.6 18l-2.3-3.5M12 22v-4M5.3 18l2.3-3.5M1.5 11h4M5.3 4l2.3 3.5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-tt-gold font-semibold">Gold Member</div>
                      <div className="text-sm text-tt-gray-dark">Member since Apr 2023</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-medium">Available Points</h3>
                    <span className="text-2xl font-bold text-tt-blue">17,450</span>
                  </div>
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-medium">Next Tier</h3>
                    <span className="text-sm font-medium text-tt-gray-dark">2,550 points to Platinum</span>
                  </div>
                  <Progress value={87} className="h-2 bg-gray-200" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <Button className="w-full md:w-auto bg-tt-teal hover:bg-tt-teal-dark mb-3">
                    Redeem Points
                  </Button>
                  <Button variant="outline" className="w-full md:w-auto">
                    View Transaction History
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rewards Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="redeem">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="redeem">Redeem</TabsTrigger>
                  <TabsTrigger value="earn">Ways to Earn</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="redeem" className="space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Featured Rewards</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Reward Card 1 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1559599746-c57a3d924a14?q=80&w=2069&auto=format&fit=crop" alt="Hotel Upgrade" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-tt-blue hover:bg-tt-blue">10,000 points</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">Room Upgrade</h3>
                        <p className="text-tt-gray-dark text-sm mb-4">Upgrade to a premium room at select hotel partners worldwide.</p>
                        <div className="flex items-center text-tt-gray-dark text-sm mb-4">
                          <MapPin size={14} className="mr-1" />
                          <span>Multiple Locations</span>
                        </div>
                        <Button variant="outline" className="w-full">Redeem Now</Button>
                      </div>
                    </div>
                    
                    {/* Reward Card 2 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=2070&auto=format&fit=crop" alt="Airline Lounge" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-tt-blue hover:bg-tt-blue">8,500 points</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">Lounge Access</h3>
                        <p className="text-tt-gray-dark text-sm mb-4">One-time access to premium airline lounges at major airports.</p>
                        <div className="flex items-center text-tt-gray-dark text-sm mb-4">
                          <MapPin size={14} className="mr-1" />
                          <span>International Airports</span>
                        </div>
                        <Button variant="outline" className="w-full">Redeem Now</Button>
                      </div>
                    </div>
                    
                    {/* Reward Card 3 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1579443921748-461fe5567a84?q=80&w=2373&auto=format&fit=crop" alt="Reward Card 3" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-tt-blue hover:bg-tt-blue">15,000 points</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">Dining Credit</h3>
                        <p className="text-tt-gray-dark text-sm mb-4">$100 dining credit at select restaurants worldwide.</p>
                        <div className="flex items-center text-tt-gray-dark text-sm mb-4">
                          <MapPin size={14} className="mr-1" />
                          <span>Partner Restaurants</span>
                        </div>
                        <Button variant="outline" className="w-full">Redeem Now</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button variant="link" className="text-tt-blue">
                      View All Rewards
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="earn" className="space-y-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Ways to Earn Points</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-tt-teal/10 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal w-6 h-6">
                            <path d="m2 9 3-3 3 3M13 18l3-3 3 3" />
                            <path d="M8 12h12M4 6h16M2 15h16" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Book Travel</h3>
                          <p className="text-tt-gray-dark">Earn 10 points per $1 spent on all TransferTravel bookings and 5 points per $1 on partner bookings.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-tt-teal/10 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal w-6 h-6">
                            <path d="M12 1v22" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Sell Travel</h3>
                          <p className="text-tt-gray-dark">Earn 1,000 bonus points for each successful listing sold through TransferTravel.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-tt-teal/10 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal w-6 h-6">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Refer Friends</h3>
                          <p className="text-tt-gray-dark">Earn 2,500 points for each friend who signs up and completes their first booking.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-tt-teal/10 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal w-6 h-6">
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Leave Reviews</h3>
                          <p className="text-tt-gray-dark">Earn 500 points for each verified review you leave after completing your travel.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-semibold mb-6 text-center">Membership Benefits</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tier 1 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="bg-gradient-to-r from-gray-500 to-gray-600 py-4 px-6 text-white">
                        <h3 className="font-semibold text-xl">Silver</h3>
                        <p className="text-sm text-white/80">0 - 10,000 points</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Earn 5 points per $1 spent</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Member-only sale access</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Newsletter with exclusive offers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Tier 2 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden border-2 border-tt-gold transform scale-105">
                      <div className="bg-gradient-to-r from-tt-gold to-yellow-600 py-4 px-6 text-white relative">
                        <div className="absolute top-0 right-0 bg-tt-blue text-white text-xs font-bold px-2 py-1 translate-y-1/2 transform translate-x-1">
                          Current
                        </div>
                        <h3 className="font-semibold text-xl">Gold</h3>
                        <p className="text-sm text-white/80">10,000 - 20,000 points</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Earn 10 points per $1 spent</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Free booking fee cancellations</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Priority customer service</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>All Silver benefits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Tier 3 */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-4 px-6 text-white">
                        <h3 className="font-semibold text-xl">Platinum</h3>
                        <p className="text-sm text-white/80">20,000+ points</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Earn 15 points per $1 spent</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Free room upgrades when available</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Dedicated travel concierge</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tt-teal mr-2 h-5 w-5 flex-shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>All Gold benefits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
