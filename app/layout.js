import './globals.css';
import StoreProvider from '@/store/storeProvider';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './auth';


export const metadata = {
  title: 'Invoice Managment',
  description: 'Invoice managemet app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>
          <Auth children={children} />
        </StoreProvider>
      </body>
    </html>
  );
}
