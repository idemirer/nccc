import Footer from '@/components/footer';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'North Country Cybersecurity Conference',
<<<<<<< HEAD
  description:
    'North Country Cybersecurity Conference hosted by School of Business and Economics at State University of New York at Plattsburgh.',
=======
  description: 'North Country Cybersecurity Conference',
>>>>>>> c4cffab90e226a9f13996200d61ed9fc9b87da5f
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`container mx-auto px-4 py-4`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
