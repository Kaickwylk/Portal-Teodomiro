import styled from "styled-components";
export const ProfileCardContainer = styled.section`
  text-align: left; /* Alinha todo o texto à esquerda */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 86.4rem;
  margin: 0 auto;
  margin-top: -8.8rem;
  box-shadow: 0px 8px 100px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -6rem;
  }
`;

export const Card = styled.div`
  position: relative;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 50px;
  padding: 3.2rem 4rem;
  width: 100%;
  max-width: 86.4rem;
  box-sizing: border-box;
   border-radius: 30px;
  border: 2px solid #000080;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 1.1);
   h1 {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme["base-title"]};
    text-align: center; /* Centraliza o texto */
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      font-size: clamp(1.0rem, 2.5vw, 1.4rem); /* Ajusta o tamanho do texto */
      color: ${(props) => props.theme["base-text"]};
      white-space: nowrap; /* Impede que o texto quebre em mais de uma linha */
      overflow: hidden; /* Esconde o texto que ultrapassa o contêiner */
      text-overflow: ellipsis; /* Adiciona  caso o texto seja cortado */
      margin-bottom: 0.8rem; /* Espaço entre os itens */
      


      svg {
        margin-right: 0rem; /* Espaço entre o ícone e o texto */
        flex-shrink: 0; /* Garante que o ícone não encolha */
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      text-align: center; /* Centraliza o texto para telas menores */
    }
  }
`;


export const Avatar = styled.img`
  position: absolute;
  top: -1.2rem;
  
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 1.1);
 



  
  @media (max-width: 8000px) {
    top: 3rem;
    left: 50%;
    left:12rem;
    transform: translateX(-50%);
    width: 9rem;
    height: 9rem;
}
  @media (max-width: 768px) {
    top: 4rem;
    left: 50%;
    left:6rem;
    transform: translateX(-50%);
    width: 6rem;
    height: 6rem;
  }

  
  @media (max-width: 429px) {
    top: 4rem;
    left: 50%;
    left:6rem;
    transform: translateX(-50%);
    width: 5rem;
    height: 5rem;
  }

  

  @media (max-width: 410px) {
    top: -6rem;
    left: 50%;
   
    transform: translateX(-50%);
    width: 6rem;
    height: 6rem;
  }
`;

export const BioText = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  color: ${(props) => props.theme["base-text"]};
  margin-top: 0.5rem;
  white-space: pre-line; /* Faz com que '\n' seja interpretado como quebra de linha */
  text-align: center;
`;



export const Link = styled.a`
  position: absolute;
  top: 4rem;
  right: 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};

  svg {
    color: ${(props) => props.theme.blue};
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    top: 2rem;
    right: 2rem;
  }
`;
