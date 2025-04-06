
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Gift, CreditCard, Tag, Coffee, Utensils, Bike, Hotel, Plane, CameraIcon, Key, Car } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Rewards = () => {
  // Placeholder reward data
  const localDeals = [
    { 
      id: 1,
      title: '15% Off at Caffè Nero',
      location: 'Multiple Locations',
      description: 'Get 15% off your coffee and pastries at any Caffè Nero location.',
      points: 500,
      category: 'Dining',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=2076&auto=format&fit=crop'
    },
    { 
      id: 2,
      title: '2 for 1 Museum Entry',
      location: 'Various Cities',
      description: 'Buy one ticket, get one free at partner museums around the world.',
      points: 750,
      category: 'Activities',
      icon: CameraIcon,
      image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 3,
      title: '20% Off Bike Rentals',
      location: 'Multiple Locations',
      description: 'Explore your destination on two wheels with discounted bike rentals.',
      points: 400,
      category: 'Transportation',
      icon: Bike,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 4,
      title: 'Free Airport Lounge Access',
      location: 'Worldwide',
      description: 'Enjoy complimentary airport lounge access with your booking.',
      points: 1200,
      category: 'Travel',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 5,
      title: '10% Off Restaurant Bill',
      location: 'Select Partners',
      description: 'Enjoy a discount at our partner restaurants globally.',
      points: 600,
      category: 'Dining',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      id: 6,
      title: 'One Day Car Rental Discount',
      location: 'Multiple Countries',
      description: 'Save 25% on a one-day car rental with our partners.',
      points: 900,
      category: 'Transportation',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1564836950275-9eebf8f0d0fd?q=80&w=2070&auto=format&fit=crop'
    },
  ];
  
  // Placeholder transaction history
  const recentTransactions = [
    { date: '2025-03-15', description: 'Booking: Flight to Barcelona', points: 250, type: 'earned' },
    { date: '2025-03-10', description: '15% Off at Caffè Nero', points: 500, type: 'spent' },
    { date: '2025-02-28', description: 'Booking: Hotel in Paris', points: 350, type: 'earned' },
    { date: '2025-02-15', description: 'Referral Bonus', points: 500, type: 'earned' },
    { date: '2025-02-01', description: 'Free Airport Lounge Access', points: 1200, type: 'spent' },
  ];

  // Current rewards points
  const currentPoints = 2400;
  const nextTierPoints = 5000;
  const progress = (currentPoints / nextTierPoints) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">TransferTravel Rewards</h1>
            <p className="text-tt-gray-dark max-w-2xl mx-auto">
              Earn points on every booking and unlock exclusive benefits from our partners around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Points Card */}
            <Card className="md:col-span-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-tt-blue">
                  <Award className="mr-2" />
                  Your Rewards Dashboard
                </CardTitle>
                <CardDescription>Track your points and membership status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-tt-teal to-tt-blue rounded-lg text-white w-full md:w-auto">
                    <h3 className="text-lg font-medium mb-2">Available Points</h3>
                    <p className="text-4xl font-bold mb-2">{currentPoints}</p>
                    <p className="text-xs opacity-80 mb-3">Silver Member</p>
                    <Button size="sm" variant="outline" className="bg-white text-tt-blue hover:bg-gray-100">
                      <Gift className="mr-1" size={14} />
                      Redeem Points
                    </Button>
                  </div>
                  
                  <div className="w-full">
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Silver</span>
                        <span className="text-sm">Gold</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">{currentPoints} points</span>
                        <span className="text-xs text-gray-500">{nextTierPoints} points</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      You need <strong>{nextTierPoints - currentPoints} more points</strong> to reach Gold status and unlock premium benefits!
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 border rounded-md bg-white">
                        <h4 className="text-sm font-medium mb-1">Total Earned</h4>
                        <p className="text-lg font-semibold text-tt-blue">4,850</p>
                      </div>
                      <div className="p-3 border rounded-md bg-white">
                        <h4 className="text-sm font-medium mb-1">Used</h4>
                        <p className="text-lg font-semibold text-tt-blue">2,450</p>
                      </div>
                      <div className="p-3 border rounded-md bg-white">
                        <h4 className="text-sm font-medium mb-1">Bookings</h4>
                        <p className="text-lg font-semibold text-tt-blue">8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* How to Earn */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-tt-blue">
                  <CreditCard className="mr-2" />
                  How to Earn Points
                </CardTitle>
                <CardDescription>Ways to boost your rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-tt-teal/10 p-2 rounded-full mr-3">
                      <Plane size={16} className="text-tt-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Book Flights</h4>
                      <p className="text-sm text-gray-600">Earn 5 points per £1 spent</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-tt-teal/10 p-2 rounded-full mr-3">
                      <Hotel size={16} className="text-tt-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Book Hotels</h4>
                      <p className="text-sm text-gray-600">Earn 10 points per £1 spent</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-tt-teal/10 p-2 rounded-full mr-3">
                      <Tag size={16} className="text-tt-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">List Your Travel</h4>
                      <p className="text-sm text-gray-600">Earn 15 points per £1 sold</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-tt-teal/10 p-2 rounded-full mr-3">
                      <Key size={16} className="text-tt-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Refer Friends</h4>
                      <p className="text-sm text-gray-600">Get 500 points per referral</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Local Rewards Section */}
          <div className="mb-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-1">Local Partner Rewards</h2>
                <p className="text-tt-gray-dark">Exclusive deals from our partners to enhance your travel experience</p>
              </div>
              <Button variant="ghost" className="text-tt-blue">View All Partners</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localDeals.map((deal) => {
                const Icon = deal.icon;
                return (
                  <Card key={deal.id} className="overflow-hidden group">
                    <div className="h-40 relative overflow-hidden">
                      <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <Badge className="absolute top-3 left-3 bg-tt-yellow text-tt-black">
                        {deal.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-lg">{deal.title}</h3>
                        <div className="bg-tt-teal/10 p-2 rounded-full">
                          <Icon size={16} className="text-tt-teal" />
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <MapPin size={14} className="mr-1" />
                        {deal.location}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{deal.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-tt-blue font-semibold">{deal.points} points</span>
                        <Button size="sm" variant="outline" className="text-tt-blue">
                          Redeem
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Transaction History */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-8">Your Points History</h2>
            
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction, i) => (
                      <TableRow key={i}>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.points}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.type === 'earned' ? 'default' : 'outline'} className={
                            transaction.type === 'earned' 
                              ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                              : 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                          }>
                            {transaction.type === 'earned' ? '+ Earned' : '- Redeemed'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
