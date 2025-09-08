import { Manrope } from "next/font/google";
import 'leaflet/dist/leaflet.css';
import '../styles/globals.css';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-sans",
});

export const metadata = {
  title: 'GarrApp',
  description: 'Bienvenidos a GarrApp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
