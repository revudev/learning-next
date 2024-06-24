import { inter } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con amor por Vercel
        </footer>
        </body>
    </html>
  );
}
