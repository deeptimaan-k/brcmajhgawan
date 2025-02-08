import { ReactNode } from 'react';

interface DashboardContainerProps {
  children: ReactNode;
}

export function DashboardContainer({ children }: DashboardContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {children}
    </div>
  );
}