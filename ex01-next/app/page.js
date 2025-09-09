import Image from "next/image";
import styles from "./page.module.css";
import { Stardos_Stencil } from "next/font/google";
import MyButton from "@/components/MyButton";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <span className="colorText">Hello, World!</span>
      <br />
      <MyButton />
    </div>
  );
}
