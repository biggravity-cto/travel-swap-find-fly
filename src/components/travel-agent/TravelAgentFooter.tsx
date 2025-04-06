
import React from 'react';
import { ExternalLink } from 'lucide-react';

const TravelAgentFooter: React.FC = () => {
  return (
    <div className="mt-3 text-xs text-muted-foreground flex items-center justify-between">
      <span>© 2025 TransferTravel</span>
      <a 
        href="https://transfertravel.com/terms" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:text-tt-blue transition-colors"
      >
        Terms of Service <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </div>
  );
};

export default TravelAgentFooter;
