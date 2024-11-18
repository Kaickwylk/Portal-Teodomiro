import styled from "styled-components";

export const PostCardSkeletonContainer = styled.div`
  width: 41.6rem;

  background-color: ${(props) => props.theme["base-post"]};

  padding: 3.2rem;

  border-radius: 1rem;
  @media (max-width: 900px) {
  /* Ajustes específicos para dispositivos com largura de tela abaixo de 900px */
}

@media (max-width: 768px) {
  /* Ajustes para dispositivos menores como celulares intermediários */
}

`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;
  line-height: 3.2rem;
  @media (max-width: 900px) {
  /* Ajustes específicos para dispositivos com largura de tela abaixo de 900px */
}

@media (max-width: 768px) {
  /* Ajustes para dispositivos menores como celulares intermediários */
}

`;

export const Description = styled.div`
  line-height: 2.7rem;
  @media (max-width: 900px) {
  /* Ajustes específicos para dispositivos com largura de tela abaixo de 900px */
}

@media (max-width: 768px) {
  /* Ajustes para dispositivos menores como celulares intermediários */
}

`;
