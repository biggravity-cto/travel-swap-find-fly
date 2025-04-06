
import React from 'react';
import { X, Minimize2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import AITravelAgent from '@/components/AITravelAgent';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface AITravelAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

const AITravelAgentModal = ({ isOpen, onClose, onMinimize }: AITravelAgentModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="p-4 max-h-[90%]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">AI Travel Assistant</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={onMinimize}>
                <Minimize2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <AITravelAgent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">AI Travel Assistant</h2>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={onMinimize}>
              <Minimize2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <AITravelAgent />
      </DialogContent>
    </Dialog>
  );
};

export default AITravelAgentModal;
