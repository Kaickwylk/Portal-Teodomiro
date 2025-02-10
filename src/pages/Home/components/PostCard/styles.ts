import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 480px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border: 2px solid   #800080;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 1.1);
  margin: 20px auto; /* Centraliza o card */
  overflow: hidden;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    border-radius: 50%;
    width: 10px;
    height: 40px;
    margin-right: 100px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }
`;


export const Image = styled.img`
  width: 100%;
  height: auto; /* Ajusta a altura proporcionalmente à largura */
  max-height: 500px; /* Limita a altura máxima */
  object-fit: cover; /* Faz com que a imagem preencha todo o contêiner sem distorção */
  border-radius: 0; /* Remove bordas arredondadas se não forem necessárias */
  display: block; /* Remove espaços indesejados */
`;


export const Content = styled.div`
  padding: 10px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: white;
  }

  p {
    font-size: 14px;
    color: #F8F8FF;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: #555;
  

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    
  }

  
`;
export const Video = styled.video`
  width: 100%;         /* Ocupa toda a largura do card */
  height: 100%;        /* Ocupa toda a altura do card */
  object-fit: cover;   /* Faz com que o vídeo preencha o contêiner sem distorção */
  border-radius: 1px 0 0 0; /* Ajuste nas bordas do vídeo para ficar consistente com a imagem */
`;
