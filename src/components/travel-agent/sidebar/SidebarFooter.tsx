
import React from 'react';
import { SidebarFooter as Footer } from '@/components/ui/sidebar';

const SidebarFooter: React.FC = () => {
  return (
    <Footer>
      <div className="px-4 py-2 text-xs text-muted-foreground">
        <p>© 2025 TransferTravel</p>
      </div>
    </Footer>
  );
};

export default SidebarFooter;
