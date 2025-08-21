import Image from "next/image";
import styles from "./page.module.css";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <h1> Mini Bio </h1>

      <>
        <hr />

        <Image src="/assets/fotoPerfil.jpeg" alt="Foto de perfil" width={304} height={304} />
        <p> <b>Nome:</b> Arthur F. L. de Vasconcelos</p>

        <b>Bio:</b>
        <p>-- Curso Ciência da Computação na Universidade Católica de Pernambuco.</p>
        <p>-- Hoje estou focando meus estudos às áreas de Inteligência Artificial<br />
           &ensp;&ensp;e Ciência de Dados, as quais procuro uma oportunidade de estágio.
        </p>

        <hr />

        <h3>Minhas páginas:</h3>
        <a href="https://www.linkedin.com/in/arthur-felipe-leite-de-vasconcelos-4aa118228" target="_blank" > <Linkedin /> Linkedin </a>
        <br />
        <a href="https://github.com/ArthurFunicap" target="_blank" > <Github /> GitHub </a>
      </>
    </div>
  );
}
