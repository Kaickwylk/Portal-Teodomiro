import { useState } from "react";
import { Card, Image, Content, Header, Footer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import logojornal from "../../../../assets/images/logojornal.jpeg"; // Importando o logojornal

interface PostProps {
  avatar: string;
  user: string;
  title: string;
  body: string;
  comments: number;
  images: string[];
}

export function PostCard({
  avatar,
  user,
  title,
  body,
  comments,
  images,
}: PostProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card>
      <Header>
        {/* Ocultando o avatar logojornal */}
        {/* <img src={avatar} alt={`${user} avatar`} /> */}
        <span>{user}</span>
      </Header>

      {/* Contêiner do carrossel de imagens */}
      <div style={{ position: "relative" }}>
        <Image
          src={images[currentImageIndex]}
          style={{ marginTop: "-50px" }}
          alt="Post image"
        />

        {/* Setas de navegação */}
        <button
          onClick={goToPreviousImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={goToNextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* Botão para download da imagem */}
        <a
          href={images[currentImageIndex]}
          download={`post-image-${title}.jpeg`}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "8px 10px",
            borderRadius: "20px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Baixar Imagem
        </a>
      </div>

      <Content>
        <h2>{title}</h2>
        <p>{body}</p>
      </Content>

      <Footer>
        <div>
          {/* Logo jornal no lugar do like com o mesmo estilo */}
          <img
            src={logojornal}
            alt="Logo Jornal"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginRight: "10px",
            }}
          />
          <span>Jornal Teodomiro</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </div>
      </Footer>
    </Card>
  );
}
