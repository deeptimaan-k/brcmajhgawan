import { ReactNode } from 'react';

interface DashboardContentProps {
  children: ReactNode;
}

export function DashboardContent({ children }: DashboardContentProps) {
  return (
    <main className="flex-1 p-4 md:p-6 overflow-x-hidden lg:ml-[280px]">
      {children}
    </main>
  );
}