
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Calendar, ArrowRight, Upload, Briefcase, Lock, PlaneTakeoff, Building, MapPin, Info } from 'lucide-react';

const SellTravel = () => {
  const [step, setStep] = useState(1);
  const [travelType, setTravelType] = useState('');
  
  const handleContinue = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">Sell Your Travel Plans</h1>
              <p className="text-tt-gray-dark max-w-2xl mx-auto">
                Need to cancel non-refundable travel? List it on TransferTravel and recover up to 75% of your costs.
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="relative mb-12">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center relative z-10">
                    <div 
                      className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${step >= i ? 'bg-tt-blue text-white' : 'bg-gray-200 text-gray-500'}`}
                    >
                      {step > i ? <Check size={18} /> : i}
                    </div>
                    <span className={`text-sm ${step >= i ? 'text-tt-blue-dark font-medium' : 'text-gray-500'}`}>
                      {i === 1 && "Details"}
                      {i === 2 && "Pricing"}
                      {i === 3 && "Photos"}
                      {i === 4 && "Review"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-0">
                <div 
                  className="h-full bg-tt-blue transition-all duration-300"
                  style={{ width: `${(step - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>
            
            {/* Step 1: Travel Details */}
            {step === 1 && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Travel Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="mb-2 block">What type of travel are you selling?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'flight', label: 'Flight', icon: PlaneTakeoff },
                          { id: 'hotel', label: 'Hotel', icon: Building },
                          { id: 'package', label: 'Package', icon: Briefcase },
                        ].map((type) => {
                          const Icon = type.icon;
                          return (
                            <div
                              key={type.id}
                              className={`border p-4 rounded-md cursor-pointer transition-all ${
                                travelType === type.id
                                  ? 'border-tt-blue bg-tt-blue/5'
                                  : 'hover:border-gray-300'
                              }`}
                              onClick={() => setTravelType(type.id)}
                            >
                              <div className="flex items-center">
                                <div className={`p-2 rounded-full mr-3 ${
                                  travelType === type.id 
                                    ? 'bg-tt-blue/10' 
                                    : 'bg-gray-100'
                                }`}>
                                  <Icon size={20} className={travelType === type.id ? 'text-tt-blue' : 'text-gray-500'} />
                                </div>
                                <span className={travelType === type.id ? 'font-medium' : ''}>
                                  {type.label}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Listing Title</Label>
                        <Input 
                          id="title"
                          placeholder="e.g., 'Round-trip Flight to Barcelona'" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          <Input 
                            id="location"
                            placeholder="e.g., 'London to Barcelona'" 
                            className="pl-9"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="departureDate">Departure Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          <Input 
                            id="departureDate"
                            type="date"
                            className="pl-9"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Select>
                          <SelectTrigger id="duration">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-night">1 Night</SelectItem>
                            <SelectItem value="2-nights">2 Nights</SelectItem>
                            <SelectItem value="3-nights">3 Nights</SelectItem>
                            <SelectItem value="4-nights">4 Nights</SelectItem>
                            <SelectItem value="5-nights">5 Nights</SelectItem>
                            <SelectItem value="6-nights">6 Nights</SelectItem>
                            <SelectItem value="7-nights">7 Nights</SelectItem>
                            <SelectItem value="8-nights-plus">8+ Nights</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Select>
                          <SelectTrigger id="passengers">
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Person</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3">3 People</SelectItem>
                            <SelectItem value="4">4 People</SelectItem>
                            <SelectItem value="5-plus">5+ People</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description"
                        placeholder="Add details about your travel listing here..."
                        rows={5}
                      />
                      <p className="text-sm text-gray-500">Include important details like flight times, hotel amenities, or any restrictions.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button onClick={handleContinue} className="bg-tt-blue">
                      Continue to Pricing
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 2: Pricing */}
            {step === 2 && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Pricing Details</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="originalPrice">Original Price (what you paid)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                          <Input
                            id="originalPrice"
                            type="number"
                            placeholder="e.g., 450"
                            className="pl-7"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="askingPrice">Your Asking Price</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                          <Input
                            id="askingPrice"
                            type="number"
                            placeholder="e.g., 350"
                            className="pl-7"
                          />
                        </div>
                        <p className="text-sm text-gray-500">We recommend pricing 25-40% below original cost for faster sales.</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-md flex">
                      <Info size={20} className="text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-amber-800">
                          TransferTravel charges a 10% service fee only when your listing sells. This fee helps us maintain the platform, provide secure transactions, and protect both buyers and sellers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-gray-50 rounded-md">
                      <h3 className="font-medium mb-3">Price Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Your asking price</span>
                          <span>£350.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Service fee (10%)</span>
                          <span>-£35.00</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-medium">
                          <span>You'll receive</span>
                          <span>£315.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-tt-green">
                          <span>Saving for the buyer</span>
                          <span>22% off original price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button onClick={handleContinue} className="bg-tt-blue">
                      Continue to Photos
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 3: Photos */}
            {step === 3 && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Add Photos</h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Listings with photos sell up to 3x faster. Upload images of your booking confirmation, the hotel, or any relevant travel documents.
                    </p>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
                      <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                      <h3 className="font-medium mb-2">Drag and drop your photos here</h3>
                      <p className="text-sm text-gray-500 mb-4">or click to browse your files</p>
                      <Button variant="outline" size="sm">
                        Upload Photos
                      </Button>
                      <p className="text-xs text-gray-500 mt-3">
                        Supports JPG, PNG (max 5MB each)
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md flex">
                      <Lock size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-blue-800">
                          Make sure to blur or hide any personal information, booking references, or payment details before uploading images of your tickets or confirmation emails.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button onClick={handleContinue} className="bg-tt-blue">
                      Continue to Review
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Review Your Listing</h2>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Listing Title</h3>
                        <p>Round-trip Flight to Barcelona</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                        <p>London to Barcelona</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Travel Type</h3>
                        <p>Flight</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Passengers</h3>
                        <p>2 People</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Departure Date</h3>
                        <p>July 15, 2025</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Duration</h3>
                        <p>5 nights</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Original Price</h3>
                        <p>£450</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Asking Price</h3>
                        <p>£350 (22% discount)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                      <p className="text-gray-700">
                        Return flight from London Heathrow to Barcelona El Prat with British Airways. Outbound on July 15, 2025 at 10:00 AM, return on July 20, 2025 at 8:00 PM. Includes 23kg checked baggage per person. Seats not reserved yet.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Photo placeholder</p>
                      </div>
                      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Photo placeholder</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <h3 className="font-medium text-green-800 mb-2">What happens next?</h3>
                      <ol className="text-sm text-green-800 space-y-2 ml-5 list-decimal">
                        <li>We'll review your listing for accuracy (usually within 24 hours)</li>
                        <li>Once approved, your listing will be live and visible to potential buyers</li>
                        <li>When someone purchases your listing, we'll notify you immediately</li>
                        <li>You'll need to transfer the booking to the buyer within 24 hours</li>
                        <li>Once the transfer is confirmed, your payment will be processed</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back to Edit
                    </Button>
                    <Button className="bg-tt-blue">
                      Submit Listing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellTravel;
