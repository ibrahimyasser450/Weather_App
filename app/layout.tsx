import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Weather App",
  description: "Weather App for seven days",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/weather2.ico" type="image/x-icon" />{" "}
        {/* public/weather.ico */}
      </head>
      <body>{children}</body>
    </html>
  );
}
