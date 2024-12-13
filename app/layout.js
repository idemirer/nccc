import './globals.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'North Country Cybersecurity Conference',
  description:
    'North Country Cybersecurity Conference hosted by School of Business and Economics at State University of New York at Plattsburgh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div class='container mx-auto'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
