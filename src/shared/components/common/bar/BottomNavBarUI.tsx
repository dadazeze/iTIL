'use client';

import { cn } from '@/shared/lib/style/utils';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function BottomNavBarUI({ children, className }: IProps) {
  return (
    <div className={cn('fixed bottom-0 w-full max-w-[672px]', className)}>
      {children}
    </div>
  );
}
