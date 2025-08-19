import Image from "next/image";
import styles from "./page.module.css";
import { Stardos_Stencil } from "next/font/google";

export default function Home() {
  return (
    <div>
      <h1> Linguagem C </h1>

      <h2> Funções: </h2>

      <pre>
        <code>
          #include &lt;stdio.h&gt;
          <br />
          <br />
          int main()&#x0007B;
            <br />
            &#9;&#9; int num1, num2, soma;
            <br />

          &#x0007D;
        </code>
      </pre>
    </div>
  );
}
