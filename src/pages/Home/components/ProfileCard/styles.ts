import styled from "styled-components";

export const ProfileCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap; /* Permite que o conteúdo se ajuste em telas menores */
  justify-content: center;
  width: 90%; /* Tamanho do card ajustado com base na largura da tela */
  max-width: 86.4rem; /* Limita o tamanho máximo para telas grandes */
  margin: 0 auto;
  margin-top: -8.8rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -6rem;
  }
`;

export const Card = styled.div`
  position: relative;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 3.2rem 4rem;
  width: 100%;
  max-width: 86.4rem;
  box-sizing: border-box;

  header {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  h1 {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme["base-title"]};
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: -16.2rem;
  left: 35.2rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 6rem;
  }
`;

export const BioText = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme["base-text"]};
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
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
  }

  @media (max-width: 768px) {
    top: 2rem;
    right: 2rem;
    font-size: 1rem;
  }
`;
