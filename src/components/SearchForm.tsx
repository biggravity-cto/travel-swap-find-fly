
import React, { useState } from 'react';
import { Search, Plane, Hotel, Package, CalendarIcon, Users, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const SearchForm = () => {
  const [searchType, setSearchType] = useState('flights');
  const [includeResale, setIncludeResale] = useState(true);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="flights" className="w-full" onValueChange={setSearchType}>
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="flights" className="flex items-center gap-1.5">
              <Plane size={16} />
              <span className="hidden md:inline">Flights</span>
            </TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center gap-1.5">
              <Hotel size={16} />
              <span className="hidden md:inline">Hotels</span>
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex items-center gap-1.5">
              <Package size={16} />
              <span className="hidden md:inline">Packages</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center ml-auto mt-4 md:mt-0">
            <span className="text-sm mr-2 text-tt-gray-dark">Include Resale Listings</span>
            <Switch checked={includeResale} onCheckedChange={setIncludeResale} />
          </div>
        </Tabs>
      </div>
      
      <TabsContent value="flights" className="mt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="From where?"
                className="search-input"
              />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="To where?"
                className="search-input"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Departure date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Return date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="search-input">
                <option>1 passenger</option>
                <option>2 passengers</option>
                <option>3 passengers</option>
                <option>4+ passengers</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <Button size="lg" className="w-full md:w-auto bg-tt-blue hover:bg-tt-blue-dark">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="hotels" className="mt-0">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="search-input"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Check-in date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Check-out date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="search-input">
                <option>1 room, 2 guests</option>
                <option>1 room, 1 guest</option>
                <option>2 rooms, 3 guests</option>
                <option>2 rooms, 4 guests</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <Button size="lg" className="w-full md:w-auto bg-tt-blue hover:bg-tt-blue-dark">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="packages" className="mt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Flying from?"
                className="search-input"
              />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Going to?"
                className="search-input"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Departure date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Return date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" size={18} />
              <select className="search-input">
                <option>2 adults</option>
                <option>1 adult</option>
                <option>2 adults, 1 child</option>
                <option>2 adults, 2 children</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2">
            <Button size="lg" className="w-full md:w-auto bg-tt-blue hover:bg-tt-blue-dark">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </div>
        </div>
      </TabsContent>
    </div>
  );
};

export default SearchForm;
