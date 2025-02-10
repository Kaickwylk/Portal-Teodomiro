import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 100%; /* Ajusta a largura do form */
  max-width: 86.4rem; /* Limita a largura em telas grandes */
  margin-top: 7.2rem;
  padding: 0 2rem; /* Adiciona um padding lateral para telas pequenas */
  
  @media (max-width: 900px) {
    width: 90%; /* Ajusta a largura para 90% em telas menores */
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa 100% da largura da tela */
    margin-top: 5rem; /* Reduz a margem superior para dispositivos móveis */
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem; /* Ajusta o espaçamento inferior */

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-right: 1rem;
  }

  span {
    font-size: 1.4rem;
  }

  @media (max-width: 900px) {
    h3 {
      font-size: 1.6rem; /* Ajusta o tamanho do título em telas menores */
    }
    span {
      font-size: 1.2rem; /* Ajusta o tamanho do texto do número de posts */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Coloca o título e o número de posts em coluna */
    align-items: flex-start; /* Alinha o conteúdo à esquerda */
  }
`;

export const StyledInput = styled.input`
  margin-top: 1.2rem;
  margin-bottom: 4.8rem;
  width: 100%; /* Campo de input ocupa 100% da largura */
  border-radius: 30px;
  
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 1.1);
  
  outline: 1px solid ${(props) => props.theme["base-border"]};
  border: none;
  border-radius: 2.6rem;

  padding: 1.4rem 1.6rem;

  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-input"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    padding: 1.2rem 1.4rem; /* Ajusta o padding em telas menores */
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem; /* Ajusta ainda mais o padding em telas muito pequenas */
    font-size: 1.4rem; /* Ajusta o tamanho da fonte para dispositivos móveis */
  }
`;
