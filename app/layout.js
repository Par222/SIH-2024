import './globals.css'
import { Inter } from 'next/font/google'
import 'regenerator-runtime/runtime'
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from "@/components/common/NavBar";
import GoogleTranslate from "@/components/common/GoogleTranslate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <NavBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
