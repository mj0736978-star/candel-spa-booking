import './globals.css';

export const metadata = {
  title: 'Candel Spa Booking',
  description: 'Spa booking and appointment system for Candel Spa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
