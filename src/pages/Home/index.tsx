import { useState, useEffect, useCallback } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { PostCard } from "./components/PostCard";
import { HomeContainer, PostList, Footer } from "./styles";
import { SearchInput } from "./components/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


import post1Image1 from '../../assets/images/post1_1.jpeg';
import post1Image2 from '../../assets/images/post1_2.jpeg';
import post1Image3 from '../../assets/images/post1_3.jpeg';
import post1Image4 from '../../assets/images/post1_4.jpg';
import post1Image5 from '../../assets/images/post1_5.jpg';
import post1Image6 from '../../assets/images/post1_6.jpg';
import post1Image7 from '../../assets/images/post1_7.jpg';
import post1Image8 from '../../assets/images/post1_8.jpg';
import post1Image9 from '../../assets/images/post1_9.jpg';
import post1Image10 from '../../assets/images/post1_10.jpg';
import post1Image11 from '../../assets/images/post1_11.jpg';
import post1Image12 from '../../assets/images/post1_12.jpg';
import post1Image13 from '../../assets/images/post1_13.jpg';
import post1Image14 from '../../assets/images/post1_14.jpg';
import post1Image15 from '../../assets/images/post1_15.jpg';
import post1Image16 from '../../assets/images/post1_16.jpg';
import post1Image17 from '../../assets/images/post1_17.jpg';
import post1Image18 from '../../assets/images/post1_18.jpg';
import post1Image19 from '../../assets/images/post1_19.jpg';
import post1Image20 from '../../assets/images/post1_20.jpg';
import post1Image21 from '../../assets/images/post1_21.jpg';
import post1Image22 from '../../assets/images/post1_22.jpg';
import post1Image23 from '../../assets/images/post1_23.jpg';

import post1Image25 from '../../assets/images/post1_25.jpg';
import post1Image26 from '../../assets/images/post1_26.jpg';
import post1Image27 from '../../assets/images/post1_27.jpg';
import post1Image28 from '../../assets/images/post1_28.jpg';
import post1Image29 from '../../assets/images/post1_29.jpg';
import post1Image30 from '../../assets/images/post1_30.jpg';
import post1Image31  from '../../assets/images/post1_31.jpg';









import post2Image1 from '../../assets/images/post2_1.jpg';
import post2Image2 from '../../assets/images/post2_2.jpg';
import post2Image3 from '../../assets/images/post2_3.jpg';
import post2Image4 from '../../assets/images/post2_4.jpg';
import post2Image5 from '../../assets/images/post2_5.jpg';
import post2Image6 from '../../assets/images/post2_6.jpg';
import post2Image7 from '../../assets/images/post2_7.jpg';
import post2Image8 from '../../assets/images/post2_8.jpg';
import post2Image9 from '../../assets/images/post2_9.jpg';

import post3Image1 from '../../assets/images/post3_1.jpg';
import post3Image2 from '../../assets/images/post3_2.jpg';
import post3Image3 from '../../assets/images/post3_3.jpg';
import post3Image4 from '../../assets/images/post3_4.jpg';
import post3Image5 from '../../assets/images/post3_5.jpg';
import post3Image6 from '../../assets/images/post3_6.jpg';
import post3Image7 from '../../assets/images/post3_7.jpg';
import post3Image8 from '../../assets/images/post3_8.jpg';
import post3Image9 from '../../assets/images/post3_9.jpg';
import post3Image10 from '../../assets/images/post3_10.jpg';
import post3Image11 from '../../assets/images/post3_11.jpg';
import post3Image12 from '../../assets/images/post3_12.jpg';
import post3Image13 from '../../assets/images/post3_13.jpeg';


import post4Image1 from '../../assets/images/post4_1.jpeg';
import post4Image2 from '../../assets/images/post4_2.jpeg';
import post4Image3 from '../../assets/images/post4_3.jpeg';
import post4Image4 from '../../assets/images/post4_4.jpeg';
import post4Image5 from '../../assets/images/post4_5.jpeg';
import post4Image6 from '../../assets/images/post4_6.jpeg';
import post4Image7 from '../../assets/images/post4_7.jpeg';
import post4Image8 from '../../assets/images/post4_8.jpeg';
import post4Image9 from '../../assets/images/post4_9.jpeg';
import post4Image10 from '../../assets/images/post4_10.jpeg';
import post4Image11 from '../../assets/images/post4_11.jpeg';
import post4Image12 from '../../assets/images/post4_12.jpeg';
import post4Image13 from '../../assets/images/post4_13.jpeg';
import post4Image14 from '../../assets/images/post4_14.jpeg';
import post4Image15 from '../../assets/images/post4_15.jpeg';

import post5Image1 from '../../assets/images/post5_1.jpg';
import post5Image2 from '../../assets/images/post5_2.jpg';
import post5Image3 from '../../assets/images/post5_3.jpg';
import post5Image4 from '../../assets/images/post5_4.jpg';
import post5Image5 from '../../assets/images/post5_5.jpg';
import post5Image6 from '../../assets/images/post5_6.jpg';
import post5Image7 from '../../assets/images/post5_7.jpg';
import post5Image8 from '../../assets/images/post5_8.jpg';
import post5Image9 from '../../assets/images/post5_9.jpg';
import post5Image10 from '../../assets/images/post5_10.jpg';
import post5Image11 from '../../assets/images/post5_11.jpg';
import post5Image13 from '../../assets/images/post5_13.jpg';
import post5Image14 from '../../assets/images/post5_14.jpg';
import post5Image15 from '../../assets/images/post5_15.jpg';
import post5Image16 from '../../assets/images/post5_16.jpg';
import post5Image17 from '../../assets/images/post5_17.jpg';



import post6Image1 from '../../assets/images/post6_1.jpg';
import post6Image2 from '../../assets/images/post6_2.jpg';
import post6Image3 from '../../assets/images/post6_3.jpg';
import post6Image4 from '../../assets/images/post6_4.jpg';
import post6Image5 from '../../assets/images/post6_5.jpg';
import post6Image6 from '../../assets/images/post6_6.jpg';
import post6Image7 from '../../assets/images/post6_7.jpg';
import post6Image8 from '../../assets/images/post6_8.jpg';
import post6Image9 from '../../assets/images/post6_9.jpg';
import post6Image10 from '../../assets/images/post6_10.jpg';
import post6Image11 from '../../assets/images/post6_11.jpg';
import post6Image12 from '../../assets/images/post6_12.jpg';
import post6Image13 from '../../assets/images/post6_13.jpg';
import post6Image14 from '../../assets/images/post6_14.jpg';
import post6Image15 from '../../assets/images/post6_15.jpg';
import post6Image16 from '../../assets/images/post6_16.jpg';
import post6Image17 from '../../assets/images/post6_17.jpg';
import post6Image18 from '../../assets/images/post6_18.jpg';
import post6Image19 from '../../assets/images/post6_19.jpg';
import post6Image20 from '../../assets/images/post6_20.jpg';
import post6Image21 from '../../assets/images/post6_21.jpg';
import post6Image22 from '../../assets/images/post6_22.jpg';
import post6Image23 from '../../assets/images/post6_23.jpg';
import post6Image24 from '../../assets/images/post6_24.jpg';
import post6Image25 from '../../assets/images/post6_25.jpg';


import post7Image1 from '../../assets/images/post7_1.jpg';
import post7Image2 from '../../assets/images/post7_2.jpg';
import post7Image3 from '../../assets/images/post7_3.jpg';
import post7Image4 from '../../assets/images/post7_4.jpg';
import post7Image5 from '../../assets/images/post7_5.jpg';
import post7Image6 from '../../assets/images/post7_6.jpg';




import post8Image1 from '../../assets/images/post8_1.jpg';
import post8Image2 from '../../assets/images/post8_2.jpg';
import post8Image3 from '../../assets/images/post8_3.jpg';
import post8Image4 from '../../assets/images/post8_4.jpg';
import post8Image5 from '../../assets/images/post8_5.jpg';
import post8Image6 from '../../assets/images/post8_6.jpg';
import post8Image7 from '../../assets/images/post8_7.jpg';
import post8Image8 from '../../assets/images/post8_8.jpg';
import post8Image9 from '../../assets/images/post8_9.jpg';
import post8Image10 from '../../assets/images/post8_10.jpg';
import post8Image11 from '../../assets/images/post8_11.jpg';
import post8Image12 from '../../assets/images/post8_12.jpg';
import post8Image13 from '../../assets/images/post8_13.jpg';
import post8Image14 from '../../assets/images/post8_14.jpg';
import post8Image15 from '../../assets/images/post8_15.jpg';
import post8Image16 from '../../assets/images/post8_16.jpg';

import post8Image18 from '../../assets/images/post8_18.jpg';
import post8Image19 from '../../assets/images/post8_19.jpg';
import post8Image20 from '../../assets/images/post8_20.jpg';
import post8Image21 from '../../assets/images/post8_21.jpg';
import post8Image22 from '../../assets/images/post8_22.jpg';
import post8Image23 from '../../assets/images/post8_23.jpg';
import post8Image25 from '../../assets/images/post8_25.jpg';
import post8Image26 from '../../assets/images/post8_26.jpg';
import post8Image27 from '../../assets/images/post8_27.jpg';
import post8Image28 from '../../assets/images/post8_28.jpg';
import post8Image29 from '../../assets/images/post8_29.jpg';
import post8Image30 from '../../assets/images/post8_30.jpg';
import post8Image31 from '../../assets/images/post8_31.jpg';
import post8Image32 from '../../assets/images/post8_32.jpg';
import post8Image33 from '../../assets/images/post8_33.jpg';
import post8Image34 from '../../assets/images/post8_34.jpg';
import post8Image35 from '../../assets/images/post8_35.jpg';
import post8Image36 from '../../assets/images/post8_36.jpg';
import post8Image37 from '../../assets/images/post8_37.jpg';
import post8Image38 from '../../assets/images/post8_38.jpg';
import post8Image39 from '../../assets/images/post8_39.jpg';
import post8Image41 from '../../assets/images/post8_41.jpg';
import post8Image42 from '../../assets/images/post8_42.jpg';
import post8Image43 from '../../assets/images/post8_43.jpg';
import post8Image44 from '../../assets/images/post8_44.jpg';

import post9Image1 from '../../assets/images/post9_1.jpg';
import post9Image2 from '../../assets/images/post9_2.jpg';
import post9Image3 from '../../assets/images/post9_3.jpg';
import post9Image4 from '../../assets/images/post9_4.jpg';
import post9Image5 from '../../assets/images/post9_5.jpg';
import post9Image6 from '../../assets/images/post9_6.jpg';
import post9Image7 from '../../assets/images/post9_7.jpg';
import post9Image8 from '../../assets/images/post9_8.jpg';
import post9Image9 from '../../assets/images/post9_9.jpg';
import post9Image10 from '../../assets/images/post9_10.jpg';
import post9Image11 from '../../assets/images/post9_11.jpg';
import post9Image12 from '../../assets/images/post9_12.jpg';
import post9Image13 from '../../assets/images/post9_13.jpg';
import post9Image14 from '../../assets/images/post9_14.jpg';
import post9Image15 from '../../assets/images/post9_15.jpg';
import post9Image16 from '../../assets/images/post9_16.jpg';
import post9Image17 from '../../assets/images/post9_17.jpg';
import post9Image18 from '../../assets/images/post9_18.jpg';
import post9Image19 from '../../assets/images/post9_19.jpg';
import post9Image20 from '../../assets/images/post9_20.jpg';
import post9Image21 from '../../assets/images/post9_21.jpg';
import post9Image22 from '../../assets/images/post9_22.jpg';
import post9Image23 from '../../assets/images/post9_23.jpg';
import post9Image24 from '../../assets/images/post9_24.jpg';
import post9Image25 from '../../assets/images/post9_25.jpg';
import post9Image26 from '../../assets/images/post9_26.jpg';
import post9Image27 from '../../assets/images/post9_27.jpg';
import post9Image28 from '../../assets/images/post9_28.jpg';
import post9Image29 from '../../assets/images/post9_29.jpg';
import post9Image30 from '../../assets/images/post9_30.jpg';
import post9Image31 from '../../assets/images/post9_31.jpg';
import post9Image32 from '../../assets/images/post9_32.jpg';
import post9Image33 from '../../assets/images/post9_33.jpg';
import post9Image34 from '../../assets/images/post9_34.jpg';
import post9Image35 from '../../assets/images/post9_35.jpg';
import post9Image36 from '../../assets/images/post9_36.jpg';
import post9Image37 from '../../assets/images/post9_37.jpg';

import post10Image1 from '../../assets/images/post10_1.jpg';
import post10Image2 from '../../assets/images/post10_2.jpg';
import post10Image3 from '../../assets/images/post10_3.jpg';
import post10Image4 from '../../assets/images/post10_4.jpg';
import post10Image5 from '../../assets/images/post10_5.jpg';
import post10Image6 from '../../assets/images/post10_6.jpg';
import post10Image7 from '../../assets/images/post10_7.jpg';
import post10Image8 from '../../assets/images/post10_8.jpg';
import post10Image9 from '../../assets/images/post10_9.jpg';
import post10Image11 from '../../assets/images/post10_11.jpg';
import post10Image12 from '../../assets/images/post10_12.jpg';
import post10Image13 from '../../assets/images/post10_13.jpg';
import post10Image14 from '../../assets/images/post10_14.jpg';
import post10Image15 from '../../assets/images/post10_15.jpg';
import post10Image16 from '../../assets/images/post10_16.jpg';
import post10Image17 from '../../assets/images/post10_17.jpg';
import post10Image18 from '../../assets/images/post10_18.jpg';
import post10Image19 from '../../assets/images/post10_19.jpg';
import post10Image20 from '../../assets/images/post10_20.jpg';
import post10Image21 from '../../assets/images/post10_21.jpg';
import post10Image22 from '../../assets/images/post10_22.jpg';
import post10Image23 from '../../assets/images/post10_23.jpg';
import post10Image24 from '../../assets/images/post10_24.jpg';
import post10Image25 from '../../assets/images/post10_25.jpg';
import post10Image26 from '../../assets/images/post10_26.jpg';
import post10Image27 from '../../assets/images/post10_27.jpg';
import post10Image28 from '../../assets/images/post10_28.jpg';
import post10Image29 from '../../assets/images/post10_29.jpg';
import post10Image30 from '../../assets/images/post10_30.jpg';
import post10Image31 from '../../assets/images/post10_31.jpg';
import post10Image32 from '../../assets/images/post10_32.jpg';
import post10Image33 from '../../assets/images/post10_33.jpg';
import post10Image34 from '../../assets/images/post10_34.jpg';
import post10Image35 from '../../assets/images/post10_35.jpg';
import post10Image36 from '../../assets/images/post10_36.jpg';
import post10Image37 from '../../assets/images/post10_37.jpg';
import post10Image38 from '../../assets/images/post10_38.jpg';
import post10Image39 from '../../assets/images/post10_39.jpg';
import post10Image40 from '../../assets/images/post10_40.jpg';
import post10Image41 from '../../assets/images/post10_41.jpg';
import post10Image42 from '../../assets/images/post10_42.jpg';
import post10Image43 from '../../assets/images/post10_43.jpg';
import post10Image44 from '../../assets/images/post10_44.jpg';
import post10Image45 from '../../assets/images/post10_45.jpg';
import post10Image46 from '../../assets/images/post10_46.jpg';
import post10Image47 from '../../assets/images/post10_47.jpg';
import post10Image48 from '../../assets/images/post10_48.jpg';
import post10Image49 from '../../assets/images/post10_49.jpg';
import post10Image50 from '../../assets/images/post10_50.jpg';
import post10Image51 from '../../assets/images/post10_51.jpg';

import post15Image1 from '../../assets/images/post15_1.jpeg';
import post15Image2 from '../../assets/images/post15_2.jpeg';
import post15Image3 from '../../assets/images/post15_3.jpeg';
import post15Image4 from '../../assets/images/post15_4.jpeg';
import post15Image5 from '../../assets/images/post15_5.jpeg';
import post15Image6 from '../../assets/images/post15_6.jpeg';
import post15Image7 from '../../assets/images/post15_7.jpeg';
import post15Image8 from '../../assets/images/post15_8.jpeg';
import post15Image9 from '../../assets/images/post15_9.jpeg';
import post15Image10 from '../../assets/images/post15_10.jpeg';
import post15Image11 from '../../assets/images/post15_11.jpeg';
import post15Image12 from '../../assets/images/post15_12.jpeg';
import post15Image13 from '../../assets/images/post15_13.jpeg';
import post15Image14 from '../../assets/images/post15_14.jpeg';
import post15Image15 from '../../assets/images/post15_15.jpeg';
import post15Image16 from '../../assets/images/post15_16.jpeg';
import post15Image17 from '../../assets/images/post15_17.jpeg';
import post15Image18 from '../../assets/images/post15_18.jpeg';
import post15Image19 from '../../assets/images/post15_19.jpeg';
import post15Image20 from '../../assets/images/post15_20.jpeg';
import post15Image21 from '../../assets/images/post15_21.jpeg';
import post15Image22 from '../../assets/images/post15_22.jpeg';
import post15Image23 from '../../assets/images/post15_23.jpeg';
import post15Image24 from '../../assets/images/post15_24.jpeg';


import post16Image1 from '../../assets/images/post16_1.jpeg';
import post16Image2 from '../../assets/images/post16_2.jpeg';
import post16Image3 from '../../assets/images/post16_3.jpeg';
import post16Image4 from '../../assets/images/post16_4.jpeg';
import post16Image5 from '../../assets/images/post16_5.jpeg';
import post16Image6 from '../../assets/images/post16_6.jpeg';
import post16Image7 from '../../assets/images/post16_7.jpeg';
import post16Image8 from '../../assets/images/post16_8.jpeg';
import post16Image9 from '../../assets/images/post16_9.jpeg';
import post16Image10 from '../../assets/images/post16_10.jpeg';
import post16Image11 from '../../assets/images/post16_11.jpeg';
import post16Image12 from '../../assets/images/post16_12.jpeg';
import post16Image13 from '../../assets/images/post16_13.jpeg';
import post16Image14 from '../../assets/images/post16_14.jpeg';
import post16Image15 from '../../assets/images/post16_15.jpeg';
import post16Image17 from '../../assets/images/post16_17.jpeg';
import post16Image18 from '../../assets/images/post16_18.jpeg';

import post17Image1 from '../../assets/images/post17_1.jpeg';
import post17Image2 from '../../assets/images/post17_2.jpeg';
import post17Image3 from '../../assets/images/post17_3.jpeg';
import post17Image4 from '../../assets/images/post17_4.jpeg';
import post17Image5 from '../../assets/images/post17_5.jpeg';
import post17Image6 from '../../assets/images/post17_6.jpeg';
import post17Image7 from '../../assets/images/post17_7.jpeg';
import post17Image8 from '../../assets/images/post17_8.jpeg';
import post17Image9 from '../../assets/images/post17_9.jpeg';
import post17Image10 from '../../assets/images/post17_10.jpeg';
import post17Image11 from '../../assets/images/post17_11.jpeg';
import post17Image12 from '../../assets/images/post17_12.jpeg';
import post17Image13 from '../../assets/images/post17_13.jpeg';
import post17Image14 from '../../assets/images/post17_14.jpeg';
import post17Image15 from '../../assets/images/post17_15.jpeg';
import post17Image16 from '../../assets/images/post17_16.jpeg';
import post17Image17 from '../../assets/images/post17_17.jpeg';

import post18Image1 from '../../assets/images/post18_1.jpeg';
import post18Image2 from '../../assets/images/post18_2.jpeg';
import post18Image3 from '../../assets/images/post18_3.jpeg';
import post18Image4 from '../../assets/images/post18_4.jpeg';
import post18Image5 from '../../assets/images/post18_5.jpeg';
import post18Image6 from '../../assets/images/post18_6.jpeg';
import post18Image7 from '../../assets/images/post18_7.jpeg';
import post18Image8 from '../../assets/images/post18_8.jpeg';
import post18Image9 from '../../assets/images/post18_9.jpeg';
import post18Image10 from '../../assets/images/post18_10.jpeg';

import post19Image1 from '../../assets/images/post19_1.jpeg';
import post19Image2 from '../../assets/images/post19_2.jpeg';
import post19Image3 from '../../assets/images/post19_3.jpeg';
import post19Image4 from '../../assets/images/post19_4.jpeg';
import post19Image5 from '../../assets/images/post19_5.jpeg';
import post19Image6 from '../../assets/images/post19_6.jpeg';
import post19Image7 from '../../assets/images/post19_7.jpeg';
import post19Image8 from '../../assets/images/post19_8.jpeg';
import post19Image9 from '../../assets/images/post19_9.jpeg';
import post19Image10 from '../../assets/images/post19_10.jpeg';
import post19Image11 from '../../assets/images/post19_11.jpeg';
import post19Image12 from '../../assets/images/post19_12.jpeg';
import post19Image13 from '../../assets/images/post19_13.jpeg';
import post19Image14 from '../../assets/images/post19_14.jpeg';
import post19Image15 from '../../assets/images/post19_15.jpeg';
import post19Image17 from '../../assets/images/post19_17.jpeg';
import post19Image18 from '../../assets/images/post19_18.jpeg';
import post19Image19 from '../../assets/images/post19_19.jpeg';




import bateriaVideo1 from '../../assets/videos/bateria1.mp4';
import bateriaVideo2 from '../../assets/videos/bateria2.mp4';
import bateriaVideo3 from '../../assets/videos/bateria3.mp4';
import bateriaVideo4 from '../../assets/videos/bateria4.mp4';


import form from '../../assets/videos/form.mp4';
import form1 from '../../assets/images/form.jpeg';
import m from '../../assets/images/m.jpeg';
import h from '../../assets/images/h.jpeg';



import forro1 from '../../assets/videos/arraia1.mp4';
import forro2 from '../../assets/videos/arraia2.mp4';
import forro3 from '../../assets/videos/arraia3.mp4';

import apresentação from '/public/apresentação.mp4';


import s from '../../assets/images/sit.jpg';
import nos from '../../assets/images/nos.jpeg';
import tran2 from '../../assets/images/tran2.jpeg';


import chaa1 from '/public/cha1.mp4';
import chaa2 from '/public/cha2.mp4';
import chaa3 from '/public/cha3.mp4';
import chaa4 from '/public/cha4.mp4';
import chaa5 from '/public/cha5.mp4';

import marujada from '/public/Marujada.mp4'


import logojornal from '../../assets/images/logojornal.jpeg';
import fundoVideo from '../../assets/images/fundo.mp4';
import { ReactNode } from "react"; // Importar ReactNode


export interface Post {
  id: string;
  user: string;
  avatar: string;
  title: string;
  body: ReactNode; // Alterar de string para ReactNode
  images: string[];
  videos?: string[];
  category?: string;
  date?: string; // Nova propriedade para a data
}


export function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      user: '',
      avatar: logojornal,
      title: 'Desfile Sete de Setembro 2024',
      body: 'Celebrando a independência e a força da nossa nação no desfile de 7 de setembro. Que o espírito de união e esperança nos guie sempre. Viva o Brasil!',
      date: '07/09/2024', // Adicione a data aqui

      images: [post1Image1, post1Image2, post1Image3, post1Image5, post1Image6, post1Image7, post1Image8, post1Image9, post1Image10, post1Image11, post1Image12, post1Image13, post1Image14, post1Image15, post1Image16, post1Image17, post1Image18, post1Image19, post1Image20, post1Image21, post1Image22, post1Image23, post1Image25, post1Image26, post1Image27, post1Image28, post1Image29, post1Image30, post1Image31],
    },

    
    {
      id: '2',
      user: '',
      avatar: logojornal,
      title: 'Ganhador do Bingo Sete Setembro 2024',
      body: ' Parabéns aos grande vencedor do Bingo Sete de Setembro 2024! Obrigado a todos que participaram e fizeram deste evento um sucesso!',
      date: '07/09/2024', // Adicione a data aqui

      images: [post2Image1,post2Image2,post2Image3,post2Image4,post2Image5,post2Image6,post2Image7,post2Image8,post2Image9,                     ],
    },
    {
      id: '3',
      user: '',
      avatar: logojornal,
      title: 'Fanfarra 2024',
      body: 'Nossa fanfarra trouxe um espetáculo, sendo um momento de orgulho, união e respeito pela nossa história, onde jovens, veteranos e educadores se uniram para celebrar o Brasil!',  
      date: '2024', // Adicione a data aqui

      images: [post3Image1,post3Image2,post3Image3,post3Image4,post3Image5,post3Image6,post3Image7,post3Image8,post3Image9,post3Image10, post3Image11,post3Image12,post3Image13,                    ],
    },

    
    {
      id: '7',
      user: '',
      avatar: logojornal,
      title: 'Respeito as diferenças e Valorização da vida',
      body: '',
      date: '2024',
      images: [post7Image1,post7Image2,post7Image3,post7Image4,post7Image5,post7Image6,]},



    {
      id: '4',
      user: '',
      avatar: logojornal,
      title: 'Entrega de posse de líderes de turma',
      date: '2024',
      body: 'Realizamos a entrega de posse dos novos líderes de turma, com a presença ilustre da ex-prefeita Arlete e do atual prefeito Valdeir Coimbra. Parabéns a todos os líderes!',
   
      images: [post4Image1,post4Image2,post4Image3,post4Image4, post4Image5,post4Image6, post4Image7,post4Image8, post4Image9, post4Image10, post4Image11,post4Image12,post4Image13,post4Image14, post4Image15],
    },

    {
      id: '5',
      user: '',
      avatar: logojornal,
      title: 'Teatro: Casamento na Roça - Arraiá Teodomiro',
      date: '2024',
      body: 'O terceirão realizou a apresentação do "Casamento na Roça". Com muito talento e diversão, nossos alunos trouxeram à cena as situações engraçadas e emocionantes de uma história de amor no campo.',
      images: [post5Image1,post5Image2,post5Image3,post5Image4, post5Image5,post5Image6, post5Image7,post5Image8, post5Image9, post5Image10, post5Image11,post5Image13,post5Image14, post5Image15, post5Image16, post5Image17,]
    },

    {
      id: '6',
      user: '',
      avatar: logojornal,
      title: 'Arraiá Teodomiro',
      date: '2024',
      body: 'Nosso Arraiá foi um sucesso! Teve quadrilha, comidas típicas, música animada e muita alegria no Arraiá. Agradecemos a todos os que participaram e ajudaram a tornar essa festa inesquecível!',
      images: [post6Image1,post6Image2,post6Image3,post6Image4, post6Image5,post6Image6, post6Image7,post6Image8, post6Image9, post6Image10, post6Image11,post6Image13,post6Image14, post6Image15, post6Image16, post6Image17, post6Image18, post6Image19, post6Image20, post6Image21, post6Image22, post6Image23, post6Image24,post6Image25,]
    },


    {
      id: '11',
      user: '',
      avatar: logojornal,
      title: 'Fanfarra em Sete de Setembro',
      date: '2024',
      body: '',
      images: [],
      videos: [bateriaVideo1,bateriaVideo2, bateriaVideo3, bateriaVideo4,] // Aqui você adiciona o vídeo

    
    },



    {
      id: '8',
      user: '',
      avatar: logojornal,
      title: 'Projeto: Olhar e ser Visto ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
      date: '2024',
      body: 'Tivemos a honra de presenciar diversas apresentações que trouxeram à vida as raízes e tradições da nossa querida Minas Gerais. ',
      images: [post8Image1,post8Image2,post8Image3,post8Image4,post8Image5,post8Image6,post8Image7,post8Image8,post8Image9,post8Image10,post8Image11,post8Image12,post8Image13,post8Image14,post8Image15,post8Image16,post8Image18,post8Image19,post8Image20,post8Image21,post8Image22,post8Image23,post8Image25,post8Image26,post8Image27,post8Image28,post8Image29,post8Image30,post8Image31,post8Image32,post8Image33,post8Image34,post8Image35,post8Image36,post8Image37,post8Image38,post8Image39,post8Image41,post8Image42,post8Image43,post8Image44,]
    },
    

    
    {
      id: '9',
      user: '',
      avatar: logojornal,
      title: 'Ilustre presença do grupo Marujada de Itamarandiba MG no Projeto - Olhar e ser Visto',
      date: '2024',
      body: 'Grande a alegria de receber o grupo Marujada de Itamarandiba, que trouxe um show inesquecível de tradição e cultura. Obrigado por este momento.',
      images: [post9Image1,post9Image2,post9Image3,post9Image4,post9Image5,post9Image6,post9Image7,post9Image8,post9Image9,post9Image10,post9Image11,post9Image12,post9Image13,post9Image14,post9Image15,post9Image16,post9Image17,post9Image18,post9Image19,post9Image20,post9Image21,post9Image22,post9Image23,post9Image24,post9Image25,post9Image26,post9Image27,post9Image28,post9Image29,post9Image30,post9Image31,post9Image32,post9Image33,post9Image34,post9Image35,post9Image36,post9Image37, ]   
     },


     
    {
      id: '10',
      user: '',
      avatar: logojornal,
      date: '2024',
      title: 'Momentos durante o projeto Olhar e Ser Visto ',
      body: '',
      images: [post10Image1,post10Image2, post10Image3, post10Image4, post10Image5, post10Image6, post10Image7, post10Image8, post10Image9, post10Image11, post10Image12, post10Image13, post10Image14, post10Image15, post10Image16, post10Image18, post10Image19, post10Image20, post10Image21, post10Image22, post10Image23, post10Image24, post10Image25, post10Image26, post10Image27,  post10Image29, post10Image30, post10Image31, post10Image32, post10Image33, post10Image34, post10Image35, post10Image36, post10Image37, post10Image38, post10Image39, post10Image40, post10Image41, post10Image42, post10Image43, post10Image44, post10Image45, post10Image46, post10Image47, post10Image48, post10Image49, post10Image50, post10Image51,]   
     },





     
    {
      id: '13',
      user: '',
      avatar: logojornal,
      title: 'Arraiá Teodomiro',
      date: '2024',
      body: '',
      images: [],
      videos: [forro1, forro2, forro3, ] // Aqui você adiciona o vídeo
    
    },

    {
      id: '14',
      user: '',
      avatar: logojornal,
      title: 'Apresentação em Sete de Setembro ',
      date: '2024',
      body: '',
      images: [],
      videos: [apresentação ] // Aqui você adiciona o vídeo
    
    },





    {
      id: '15',
      user: '',
      avatar: logojornal,
      title: 'Chá Literário Teodomiro',
      date: '2024',
      body: 'Uma manhã unindo palavras, interpretações, reflexões e emoções em um espetáculo inesquecível. Entre olhares atentos e aplausos, celebramos o poder transformador da arte.',
      images: [post15Image1, post15Image2,post15Image3, post15Image4, post15Image5, post15Image6, post15Image7, post15Image8, post15Image9, post15Image10, post15Image11, post15Image12, post15Image13, post15Image14, post15Image15, post15Image16, post15Image17, post15Image18, post15Image19, post15Image20, post15Image21, post15Image22, post15Image23,  post15Image24]
     },


     

    {
      id: '16',
      user: '',
      avatar: logojornal,
      title: 'Teatro: Brás Cuba - Chá Literário',
      date: '2024',
      body: '',
      images:[post16Image1,  post16Image2,post16Image3,post16Image4,post16Image5,post16Image6,post16Image7,post16Image8,post16Image9,post16Image10,post16Image11,post16Image12,post16Image13,post16Image14,post16Image15,post16Image17,  ]  },


      {
        id: '17',
        user: '',
        avatar: logojornal,
        title: 'Teatro: A Grande Família - Chá Literário',
        date: '2024',
        body: '',
        images:[post17Image1, post17Image2,post17Image3,post17Image4,post17Image5,post17Image6,post17Image7,post17Image8,post17Image9,post17Image10,post17Image11,post17Image12,post17Image13,post17Image14,post17Image15,post17Image16,post17Image17,] },

        
      {
        id: '18',
        user: '',
        avatar: logojornal,
        title: 'Teatro: A Cartomante - Chá Literário',
        date: '2024',
        body: '',
        images:[post18Image1, post18Image2,post18Image3,post18Image4,post18Image5,post18Image6,post18Image7,post18Image8,post18Image9,post18Image10,] },

          
      {
        id: '19',
        user: '',
        avatar: logojornal,
        title: 'Teatros do Chá literário',
        date: '2024',
        body: '',
        images:[post19Image1, post19Image2,post19Image3,post19Image4,post19Image5,post19Image6,post19Image7,post19Image8,post19Image9,post19Image10,post19Image11,post19Image12,post19Image13,post19Image14,post19Image15,post19Image17,post19Image18,post19Image19,] },

        {
          id: '20',
          user: '',
          avatar: logojornal,
          title: 'Apresentações em Chá Literário',
          date: '2024',
          body: '',
          images: [],
          videos: [chaa1,chaa2,chaa3, chaa4, chaa5, ] // Aqui você adiciona o vídeo
        
        },


        {
          id: '21',
          user: '',
          avatar: logojornal,
          title: 'Grupo Marujada de Itamarandiba - Projeto: Olhar e Ser Visto',
          date: '2024',
          body: '',
          images: [],
          videos: [marujada ] // Aqui você adiciona o vídeo
        
        },

        
        {
          id: '23',
          user: '',
          avatar: logojornal,
          title: 'Apresentamos o Jornal Teodomiro! 📰✨ ',
          date: '2024',
          body: (
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '0', margin: '0' }}>
              <p style={{ margin: '0', padding: '0' }}>
                
                 Criado com muito empenho pelos alunos do terceiro ano de 2024 — Isac, Kaick, Matheus Gomes, Victor Hugo, Gilder, Eduardo, Pedro Ednaldo, Wadre Mateus e Elano — este projeto surgiu da vontade de deixar uma marca duradoura na nossa escola. O Jornal Teodomiro nasceu da necessidade de registrar e compartilhar as histórias, conquistas e desafios que moldam nossa trajetória acadêmica, servindo como uma cápsula do tempo para as futuras gerações.
               <br />
               <br />
                A ideia veio do desejo de dar voz aos estudantes, criando um espaço de expressão e informação que fosse, ao mesmo tempo, dinâmico e envolvente. Queremos que este jornal seja mais do que um simples registro de eventos; ele deve ser um reflexo da identidade e do espírito de nossa comunidade escolar. Ao longo do tempo, buscamos aprimorar e expandir nosso projeto, incorporando novas ideias, formatos e conteúdos para torná-lo cada vez mais relevante. 
                <br />
                <br />
                Acreditamos que o Jornal Teodomiro é de todos nós, e, por isso, cada contribuição, sugestão e participação são fundamentais para que ele continue crescendo e evoluindo.          Nosso objetivo é que esse legado inspire futuras turmas a continuar escrevendo essa história, mantendo viva a tradição de informar, entreter e fortalecer os laços que unem nossa escola. A cada novo terceiro ano que chega, fica o convite para abraçar este projeto, inovar e levar adiante esse compromisso com a memória e a voz dos estudantes. Que esse sonho nunca deixe de existir e siga sendo um pedaço vivo de tudo o que fomos, somos e sempre seremos!
              </p>
               </div>
          ),
          images: [logojornal,nos],
          videos: [], // Aqui você adiciona o vídeo
          category: 'sobre', // Categoria do post
        },

        {
          id: '27',
          user: '',
          avatar: logojornal,
          title: 'O Portal Teodomiro',
          date: '2024',
          body: (
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '0', margin: '0' }}>
              <p style={{ margin: '0', padding: '0' }}>
                Algumas histórias precisam ser guardadas, e foi com esse pensamento que eu, Kaick Wylkyner do 3º A, criei o Portal Teodomiro. Se você já acompanhou nossos posts, sabe que cada palavra escrita aqui carrega um pedaço do que somos. Mas e quando o tempo passa? Onde ficam todas essas lembranças? Foi pensando nisso que decidi transformar essa ideia em algo ainda maior, criando um site onde nossas histórias não apenas acontecem, mas permanecem vivas.<br />
                <br />
                O Portal Teodomiro vai além dos posts que compartilhamos no Instagram. Enquanto lá mostramos os acontecimentos do dia a dia, o site foi feito para ser um arquivo digital mais duradouro, onde cada registro, texto e lembrança tem espaço para existir e ser lembrado ao longo dos anos. É um lugar onde podemos reviver tudo o que faz parte da nossa história escolar, com um toque mais pessoal e conectado com o que realmente vivemos.
                <br />
                <br />
                E você, que está lendo isso agora, também faz parte dessa história. Porque o que realmente dá sentido a esse projeto não são apenas as palavras escritas, mas as pessoas que se reconhecem nelas. Então, sinta-se à vontade para explorar, lembrar e, quem sabe, um dia continuar escrevendo novas páginas dessa jornada.     </p>
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <a href="https://www.instagram.com/kaickxwy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: "8px" }} />
                </a>
              </div>
            </div>
          ),
          images: [s],
          videos: [], // Aqui você adiciona o vídeo
          category: 'sobre', // Categoria do post
        },

         
        {
          id: '24',
          user: '',
          avatar: logojornal,
          title: 'Transferência de Direção ',
          date: '01 de Janeiro 2025',
          body: (
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '0', margin: '0' }}>
              <p style={{ margin: '0', padding: '0' }}>
              Anunciamos uma nova fase no Jornal Teodomiro.  Com grande entusiasmo, damos as boas-vindas ao novo diretor que assume a direção do nosso jornal escolar. João Pedro chega com a missão de dar continuidade ao trabalho que vem sendo realizado com tanto carinho e dedicação, sempre mantendo o compromisso com a qualidade da informação e a voz dos estudantes.       
              <br />
              <br />
                 Agradecemos imensamente ao Isac, Matheus Gomes e Kaick, que, à frente da direção, liderou o jornal com excelência, trazendo inovação, engajamento e, acima de tudo, dedicação à nossa comunidade escolar. O legado será sempre lembrado com gratidão.   
                 <br />
                 <br />
                        Desejamos a João Pedro muito sucesso nessa nova jornada! Estamos certos de que o jornal continuará e a refletir as vozes de todos os alunos, com criatividade, ética e muito espírito de equipe. O futuro do nosso jornal está em boas mãos.
              </p>
               </div>
          ),
          
          images: [tran2],
          videos: [], // Aqui você adiciona o vídeo
          category: 'direção', // Categoria do post
        },

        {
          id: '25',
          user: '',
          avatar: logojornal,
          title: ' Formandos 2024 ',
          date: '20 de Dezembro 2024',
          body: (
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '0', margin: '0' }}>
              <p style={{ margin: '0', padding: '0' }}>
                
              Hoje, celebramos não apenas a conclusão de uma jornada acadêmica, mas também a realização de sonhos, o esforço e a dedicação que cada um de vocês colocou ao longo desses anos. Cada desafio enfrentado, cada noite de estudo e cada momento de superação os trouxe até aqui, e hoje é o dia de colher os frutos de todo esse trabalho árduo.   <br />
              <br />Vocês são a prova de que a determinação e a paixão podem transformar sonhos em realidade. Ao olharem para o futuro, lembrem-se de que este é apenas o começo de uma nova e emocionante fase de suas vidas. O mundo está cheio de oportunidades esperando por vocês, e tenho certeza de que cada um de vocês deixará sua marca. Juntos, vocês construíram memórias que durarão para sempre. Que a coragem, a sabedoria e a amizade que cultivaram aqui os acompanhem em cada passo que derem.  <br />
              <br /> Estamos ansiosos para ver todas as conquistas que vocês alcançarão! Parabéns, Formandos de 2024! O futuro é de vocês!

              </p>
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <a href="https://www.instagram.com/terceiraoteodomiro_2024" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: "8px" }} />
                </a>
              </div>

               </div>
          ),
          
          
          images: [form1,m,h],
          videos: [], // Aqui você adiciona o vídeo
          category: 'formatura', // Categoria do post
        },

        {
          id: '26',
          user: '',
          avatar: logojornal,
          title: 'Solenidade de Entrega de Certificados ',
          date: '20 de Dezembro 2024',
          body: 'Hoje, celebramos a dedicação, o esforço e a superação de cada um dos formandos de 2024.',
          images: [],
          videos: [form], // Aqui você adiciona o vídeo
          category: 'formatura', // Categoria do post
        },



        

  ])


  
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [filterType, setFilterType] = useState<"all" | "images" | "videos" | "about" | "posts" | "graduation" | "photos" | "clips" | "direcao">("posts");
  const [showFilters, setShowFilters] = useState(true);
  const [previousFilterType, setPreviousFilterType] = useState<"all" | "images" | "videos" | "about" | "posts" | "graduation" | "photos" | "clips" | "direcao">("posts");
  const [showBackButton, setShowBackButton] = useState(false); // Estado para mostrar o botão "Voltar"

  const fetchPosts = useCallback((query?: string) => {
    let filtered = posts;

    // Filtros
    if (filterType === "images") {
      filtered = posts.filter((post) => post.category === "formatura" && post.images && post.images.length > 0);
    } else if (filterType === "videos") {
      filtered = posts.filter((post) => post.category === "formatura" && post.videos && post.videos.length > 0);
    } else if (filterType === "about") {
      filtered = posts.filter((post) => post.category === "sobre");
    } else if (filterType === "posts") {
      filtered = posts.filter((post) => !post.category && post.images && post.images.length > 0);
    } else if (filterType === "graduation") {
      filtered = posts.filter((post) => post.category === "formatura");
    } else if (filterType === "photos") {
      filtered = posts.filter((post) => !post.category && post.images && post.images.length > 0);
    } else if (filterType === "clips") {
      filtered = posts.filter((post) => !post.category && post.videos && post.videos.length > 0);
    } else if (filterType === "direcao") {
      filtered = posts.filter((post) => post.category === "direção"); // Filtra posts com a categoria "Direção"
    }

    // Filtra por query
    if (query) {
      filtered = filtered.filter((post) => {
        const titleMatches = post.title.toLowerCase().includes(query.toLowerCase());
        const videoMatches = post.videos && post.videos.some(video => video.toLowerCase().includes(query.toLowerCase()));
        return titleMatches || (filterType === "videos" && videoMatches);
      });
    }

    setFilteredPosts(filtered);
  }, [posts, filterType]);

  const handleFilterChange = (type: "all" | "images" | "videos" | "about" | "posts" | "graduation" | "photos" | "clips" | "direcao") => {
    setPreviousFilterType(filterType); // Armazena o filtro anterior
    setFilterType(type);
    
    // Apenas mostra os filtros para "posts" ou "graduation", e esconde para os outros
    if (type === "posts" || type === "graduation") {
      setShowFilters(true);
      setShowBackButton(false); // Esconde o botão "Voltar"
    } else {
      setShowFilters(true); // Mantém os filtros visíveis
      setShowBackButton(true); // Mostra o botão "Voltar"
    }

    fetchPosts(); // Aplica o filtro
  };

  const handleBackClick = () => {
    setFilterType(previousFilterType); // Retorna ao filtro anterior
    fetchPosts(); // Aplica o filtro anterior
    setShowBackButton(false); // Esconde o botão "Voltar" após voltar
  };

  const handleAboutClick = () => handleFilterChange("about");
  const handlePostClick = () => handleFilterChange("posts");
  const handleGraduationClick = () => handleFilterChange("graduation");

  useEffect(() => {
    fetchPosts(); // Inicializa a lista de posts ao carregar o componente
  }, [fetchPosts, filterType]);

  const numberOfPostsText = filteredPosts.length > 1 ? "publicações" : "publicação";

  return (
    <HomeContainer>
      <ProfileCard 
        avatarURL={logojornal} // Passando a URL do avatar
        bio="Educação | Cultura | Eventos \nBem-vindo a nossa página..." // Passando a bio
        followers={250} // Passando o número de seguidores
        titulo="jornal_teodomiro" // Passando o login
        name="Jornal Teodomiro" // Passando o nome
        instagramUrl="https://instagram.com/jornal_teodomiro" // Passando a URL do Instagram
        onAboutClick={handleAboutClick} 
        onPostClick={handlePostClick} 
        onGraduationClick={handleGraduationClick} 
        onDirectionClick={() => handleFilterChange("direcao")} // Passando a função para o botão Direção
      /> 

      <SearchInput
        postsLength={filteredPosts.length}
        fetchPosts={fetchPosts}
        numberOfPostsText={numberOfPostsText}
        filterType={filterType} 
      />

      {/* Filtros visíveis quando for 'posts' ou 'graduation' */}
      {showFilters && (
        <div style={{ marginBottom: "0px", display: "flex", justifyContent: "center", gap: "8px" }}>
          {/* Botão de voltar */}
          {showBackButton && (
            <button onClick={handleBackClick} 
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                border: '1px solid #800080',
                borderRadius: '80px',
                cursor: 'pointer',
                fontSize: '10px',
                transition: 'all 0.3s ease',
              }}
            >  
              Voltar
            </button>
          )}

          {/* Filtros para 'graduation' */}
          {filterType === "graduation" && (
            <>
              <button onClick={() => handleFilterChange("images")} 
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: '1px solid #800080',
                  borderRadius: '80px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  transition: 'all 0.3s ease',
                }}
              >  
                Imagens
              </button>
              <button onClick={() => handleFilterChange("videos")} 
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: '1px solid #800080',
                  borderRadius: '80px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  transition: 'all 0.3s ease',
                }}
              > 
                Vídeos
              </button>
            </>
          )}

          {/* Filtros para 'posts' */}
          {filterType === "posts" && (
            <>
              <button onClick={() => handleFilterChange("photos")} 
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: '1px solid #800080',
                  borderRadius: '80px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  transition: 'all 0.3s ease',
                }}
              >  
                Fotos
              </button>
              <button onClick={() => handleFilterChange("clips")} 
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  border: '1px solid #800080',
                  borderRadius: '80px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  transition: 'all 0.3s ease',
                }}
              > 
                Clips
              </button>
            </>
          )}

         
        </div>
      )}

      <PostList>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostList>

      <Footer>
        「©️ 2025 」
      </Footer>
    </HomeContainer>
  );
}
