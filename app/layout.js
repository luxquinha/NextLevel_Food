import './globals.css';
import MainHeader from '@/components/MainHeader/MainHeader';

export const metadata = {
  title: 'Foodie\'s Paradise',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="./output.css" rel="stylesheet"/>
      </head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
