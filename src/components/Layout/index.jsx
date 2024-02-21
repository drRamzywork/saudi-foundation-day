import localFont from 'next/font/local'
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

const hrair = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/harir.otf",
      style: "bold",
      weight: '800',
    },
    {
      path: "../../../public/assets/fonts/harir.otf",
      style: "normal",
      weight: '400',
    },



  ],
});
const majalla = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/majalla.ttf",
      style: "bold",
      weight: '800',
    },
    {
      path: "../../../public/assets/fonts/majalla.ttf",
      style: "normal",
      weight: '400',
    },



  ],
});


export default function Layout({ children }) {
  const router = useRouter();
  const combinedStyles = {
    ...hrair.style,
    ...majalla.style
  };


  return (
    <>

      <main style={combinedStyles}>
        {children}
      </main >

    </>
  )
}