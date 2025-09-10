import Image from "next/image";
import "./App.css";

export default function Home() {
  return (
    <div className="divContainer">
      <div className="portifolioContainer">
        <div className="divImage">
          <Image className="portifolioImage" src="/assets/fotoPerfil.jpeg" alt="Foto de perfil" width={304} height={304} />
        </div>
        <div className="portifolioTitle">
          <h2 className="portifolioTitleID">Arthur Felipe Leite de Vasconcelos</h2>
        </div>
        <div className="portifolioDescTitle">
          <p>Estudante de Ciência da Computação</p>
        </div>
      </div>
    </div>
  );
}
