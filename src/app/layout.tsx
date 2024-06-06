import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MenubarUI } from '@/components/common/MenuBarUI';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iTIL',
  description: 'SNS for software engineers to share their TIL knowledge among same experience levels',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='w-1/2 margin-auto'> 
        {children}
        </div>
      </body>
    </html>
  );
}
