import { useState } from "react";
import { ProfileCardContainer, Card, Link, BioText, Avatar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Importando o ícone do Instagram
import logojornal from "../../../../assets/images/logojornal.jpeg"; // Importando a imagem

interface ProfileProps {
  avatarURL: string;
  bio: string;
  followers: number;
  titulo: string;
  name: string;
  instagramUrl: string;
  onAboutClick: () => void; // Callback para o botão "Sobre"
  onPostClick: () => void; // Callback para o botão "Post"
  onGraduationClick: () => void; // Callback para o botão "Formatura"
  onDirectionClick: () => void; // Callback para o botão "Direção"
}

export function ProfileCard({
  onAboutClick,
  onPostClick,
  onGraduationClick,
  onDirectionClick
}: ProfileProps) {
  const profile: ProfileProps = {
    avatarURL: logojornal,
    bio: "Educação | Cultura | Eventos \nBem-vindo a nossa página...",
    followers: 250,
    titulo: "ㅤjornal_teodomiro",
    name: "Jornal Teodomiro",
    instagramUrl: "https://instagram.com/jornalteodomiro",
    onAboutClick,
    onPostClick,
    onGraduationClick,
    onDirectionClick
  };

  // Estado para controlar a visibilidade dos filtros
  const [activeSection, setActiveSection] = useState<string>("Sobre");

  const handleAboutClick = () => {
    setActiveSection("Sobre");
    onAboutClick();
  };

  const handlePostClick = () => {
    setActiveSection("Posts");
    onPostClick();
  };

  const handleGraduationClick = () => {
    setActiveSection("Formatura");
    onGraduationClick();
  };

  const handleDirectionClick = () => {
    setActiveSection("Direção");
    onDirectionClick();
  };

  return (
    <ProfileCardContainer>
      <Card>
        <Avatar src={profile.avatarURL} alt="Logo do jornal" />
        <header>
          <h1>{profile.name}</h1>
          <Link href={profile.instagramUrl} target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </Link>
        </header>
        <BioText>{profile.bio}</BioText>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            ㅤ Escola Estadual Teodomiro Caldeira Leão
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            ㅤ Praça da Matriz, 114 - Centro, Aricanduva - MG
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} />
            ㅤAtualizações constantes - 04/02/2025
          </li>
        </ul>
        
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", marginTop: "15px" }}>
        <button
            onClick={handleDirectionClick}
            style={{
              padding: '8px 10px',
              backgroundColor: activeSection === "Direção" ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: '1px solid #000080',
              borderRadius: '80px',
              cursor: 'pointer',
              fontSize: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            Direção
          </button>
       
       
          <button
            onClick={handleAboutClick}
            style={{
              padding: '8px 10px',
              backgroundColor: activeSection === "Sobre" ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: '1px solid #000080',
              borderRadius: '80px',
              cursor: 'pointer',
              fontSize: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            Sobre
          </button>
          <button
            onClick={handlePostClick}
            style={{
              padding: '8px 10px',
              backgroundColor: activeSection === "Posts" ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: '1px solid #000080',
              borderRadius: '80px',
              cursor: 'pointer',
              fontSize: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            Posts
          </button>
          <button
            onClick={handleGraduationClick}
            style={{
              padding: '8px 10px',
              backgroundColor: activeSection === "Formatura" ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              border: '1px solid #000080',
              borderRadius: '80px',
              cursor: 'pointer',
              fontSize: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            Formatura
          </button>
         
        </div>
      </Card>
    </ProfileCardContainer>
  );
}