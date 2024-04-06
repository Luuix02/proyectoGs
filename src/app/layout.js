import "./globals.css";
import { Roboto } from "next/font/google";
import "../styles/AndiPage/main.css";
import "./index.css";


const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children, backgroundImage}) {

  const backgroundStyle = backgroundImage
  ? {
    backgroundImage: `url("/image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  : {}

  return (
    <>
      <html lang="en">
       
        <body
          className={roboto.className}
          style={
            backgroundStyle
          }
        >
          {children}
        </body>
      </html>
    </>
  );
}
