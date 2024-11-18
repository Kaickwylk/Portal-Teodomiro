import styled from "styled-components";
import backgroundImg from "./assets/background.svg";

export const HeaderContainer = styled.header`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;  /* Isso faz com que a imagem de fundo cubra toda a área, mantendo a proporção */
  padding: 6.4rem 0 13.4rem;
  
  /* Garantir que o background se ajuste em diferentes tamanhos de tela */
  @media (max-width: 1200px) {
    background-size: cover;
  }

  @media (max-width: 768px) {
    background-size: cover; /* Em telas menores, a imagem continuará cobrindo toda a área */
    padding: 4rem 0 8rem;  /* Ajusta o espaçamento do header em telas menores */
  }

  @media (max-width: 480px) {
    background-size: cover;  /* A imagem continuará cobrindo, mas será ajustada conforme necessário */
    padding: 3rem 0 6rem;  /* Reduz o padding para dispositivos muito pequenos */
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;

  .logo:hover {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;
  }

  @keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }
`;
