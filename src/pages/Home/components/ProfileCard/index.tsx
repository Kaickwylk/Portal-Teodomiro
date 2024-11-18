import { ProfileCardContainer, Card, Link, BioText, Avatar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logojornal from "../../../../assets/images/logojornal.jpeg"; // Importando a imagem

interface ProfileProps {
  avatarURL: string;
  bio: string;
  htmlURL: string;
  followers: number;
  login: string;
  name: string;
  instagramUrl: string;
}

export function ProfileCard() {
  // Dados do perfil configuráveis manualmente
  const profile: ProfileProps = {
    avatarURL: logojornal, // Usando a imagem importada como avatar
    bio: "Projetos, Eventos, Notícias | Bem-vindo a nossa página...",
    htmlURL: "https://github.com/seu_usuario",
    followers: 250,
    login: "jornal_teodomiro",
    name: "Jornal Teodomiro",
    instagramUrl: "https://instagram.com/jornal_teodomiro2024", // Adicionando o Instagram
  };

  return (
    <ProfileCardContainer>
      <Card>
        {/* Logo acima do conteúdo */}
        <Avatar src={profile.avatarURL} alt="Logo do jornal" />
        <header>
          <h1>{profile.name}</h1>
          <Link href={profile.instagramUrl} target="_blank">
            Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>
        {/* Bio abaixo do logo */}
        <BioText>{profile.bio}</BioText>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} seguidores
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Praça da Matriz, 114 - Centro, Aricanduva - MG, 39678-000
          </li>
        </ul>
      </Card>
    </ProfileCardContainer>
  );
}
