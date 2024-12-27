import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'North Country Cybersecurity Conference',
  description:
    'North Country Cybersecurity Conference hosted by School of Business and Economics at State University of New York at Plattsburgh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`container mx-auto px-4 py-4`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
