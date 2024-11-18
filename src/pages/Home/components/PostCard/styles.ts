import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #C0C0C0;
  border-radius: 30px;
  border: 2px solid #800080;
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
  height: 400px;
  object-fit: cover;
  border-radius: 20px 0 0 0; /* Ajuste na borda da imagem */
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
    color: black;
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
