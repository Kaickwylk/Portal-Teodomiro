import { useState } from "react";
import { Card, Image, Content, Header, Footer, Video } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faChevronLeft, faChevronRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import logojornal from "../../../../assets/images/logojornal.jpeg";
import { ReactNode } from "react"; // Importar ReactNode


interface PostProps {
  avatar: string;
  user: string;
  title: string;
  body: ReactNode; // Alterar de string para ReactNode
  images?: string[];
  videos?: string[];
  date?: string;
}

export function PostCard({
  avatar,
  user,
  title,
  body,
  images,
  videos,
  date
}: PostProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const goToPreviousImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }
  };

  const goToPreviousVideo = () => {
    if (videos && videos.length > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex === 0 ? videos.length - 1 : prevIndex - 1);
    }
  };

  const goToNextVideo = () => {
    if (videos && videos.length > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex === videos.length - 1 ? 0 : prevIndex + 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      goToNextImage();
    } else if (touchEndX - touchStartX > 50) {
      goToPreviousImage();
    }
  };

  return (
    <Card>
      {/* Vídeos */}
      {videos && videos.length > 0 && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "480px",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Video controls src={videos[currentVideoIndex]} />
          <a
            href={videos[currentVideoIndex]}
            download
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <button
            onClick={goToPreviousVideo}
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
            onClick={goToNextVideo}
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
        </div>
      )}

      {/* Imagens */}
      {images && images.length > 0 && (
        <div
          style={{ position: "relative" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image src={images[currentImageIndex]} />
          <a
            href={images[currentImageIndex]}
            download
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
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
        </div>
      )}

      <Content>
        <h2>{title}</h2>
        <p>{body}</p>
      </Content>

      <Footer>
        <div>
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
          <span>{date}</span>
        </div>
      </Footer>
    </Card>
  );
}
