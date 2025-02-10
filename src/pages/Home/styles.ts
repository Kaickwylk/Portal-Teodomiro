import styled from "styled-components";

// Estilo para a página inicial
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #blue;
  



  
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 2fr); /* Exibe dois itens por linha */
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* No mobile, exibe 1 item por linha */
  }
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  a {
    color: #1e90ff;
    text-decoration: none;
    font-size: clamp(1rem, 1.5vw, 1.4rem); /* Ajusta o tamanho da fonte dinamicamente */
  }

  a:hover {
    text-decoration: underline;
    font-size: clamp(1.2rem, 2vw, 1.6rem); /* Ajusta o tamanho ao passar o mouse */
  }
`;
