// Developed by: Hoàng Xuân Đức - Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội (KHTN ĐHQGHN)
'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
