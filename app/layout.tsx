import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Kitchenlab',
    description: 'by Chef Bobby Hatumesen',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}
