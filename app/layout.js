import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'North Country Cybersecurity Conference',
  description:
    'North Country Cybersecurity Conference hosted by School of Business and Economics at State University of New York at Plattsburgh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased w-full mt-1 md:mt-4 md:max-w-screen-lg lg:mx-auto light' data-theme='light'>
        <ThemeProvider>
          <Header />
          <Navbar />
          <main className='min-h-96 mx-4'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
