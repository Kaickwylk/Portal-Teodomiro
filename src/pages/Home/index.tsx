import { useState, useEffect, useCallback } from 'react'
import { ProfileCard } from './components/ProfileCard'
import { PostCard } from './components/PostCard'
import { HomeContainer, PostList, Footer } from './styles'
import { SearchInput } from './components/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' // Importando o ícone do Instagram
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




import logojornal from '../../assets/images/logojornal.jpeg';
import fundoVideo from '../../assets/images/fundo.mp4';

export interface Post {
  id: string
  user: string
  avatar: string
  title: string
  body: string
  images: string[]
  videos?: string[]; // Nova propriedade opcional para vídeosv
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      user: '',
      avatar: logojornal,
      title: 'Desfile Sete de Setembro 2024',
      body: ' 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐧𝐝𝐨 𝐚 𝐢𝐧𝐝𝐞𝐩𝐞𝐧𝐝𝐞̂𝐧𝐜𝐢𝐚 𝐞 𝐚 𝐟𝐨𝐫𝐜̧𝐚 𝐝𝐚 𝐧𝐨𝐬𝐬𝐚 𝐧𝐚𝐜̧𝐚̃𝐨 𝐧𝐨 𝐝𝐞𝐬𝐟𝐢𝐥𝐞 𝐝𝐞 𝟕 𝐝𝐞 𝐬𝐞𝐭𝐞𝐦𝐛𝐫𝐨. 𝐐𝐮𝐞 𝐨 𝐞𝐬𝐩𝐢́𝐫𝐢𝐭𝐨 𝐝𝐞 𝐮𝐧𝐢𝐚̃𝐨 𝐞 𝐞𝐬𝐩𝐞𝐫𝐚𝐧𝐜̧𝐚 𝐧𝐨𝐬 𝐠𝐮𝐢𝐞 𝐬𝐞𝐦𝐩𝐫𝐞. 𝐕𝐢𝐯𝐚 𝐨 𝐁𝐫𝐚𝐬𝐢𝐥! ',
      
      images: [post1Image1, post1Image2, post1Image3, post1Image5, post1Image6, post1Image7, post1Image8, post1Image9, post1Image10, post1Image11, post1Image12, post1Image13, post1Image14, post1Image15, post1Image16, post1Image17, post1Image18, post1Image19, post1Image20, post1Image21, post1Image22, post1Image23, post1Image25, post1Image26, post1Image27, post1Image28, post1Image29, post1Image30, post1Image31],
    },
    {
      id: '2',
      user: '',
      avatar: logojornal,
      title: 'Ganhador do Bingo Sete Setembro 2024',
      body: '𝐏𝐚𝐫𝐚𝐛𝐞́𝐧𝐬 𝐚𝐨 𝐠𝐫𝐚𝐧𝐝𝐞 𝐯𝐞𝐧𝐜𝐞𝐝𝐨𝐫 𝐝𝐨 𝐁𝐢𝐧𝐠𝐨 𝐒𝐞𝐭𝐞 𝐝𝐞 𝐒𝐞𝐭𝐞𝐦𝐛𝐫𝐨 𝟐𝟎𝟐𝟒! 🎉 𝐎𝐛𝐫𝐢𝐠𝐚𝐝𝐨 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐪𝐮𝐞 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐫𝐚𝐦 𝐞 𝐟𝐢𝐳𝐞𝐫𝐚𝐦 𝐝𝐞𝐬𝐭𝐞 𝐞𝐯𝐞𝐧𝐭𝐨 𝐮𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨!ㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
      
      images: [post2Image1,post2Image2,post2Image3,post2Image4,post2Image5,post2Image6,post2Image7,post2Image8,post2Image9,                     ],
    },
    {
      id: '3',
      user: '',
      avatar: logojornal,
      title: 'Fanfarra 2024',
      body: '𝐍𝐨𝐬𝐬𝐚 𝐟𝐚𝐧𝐟𝐚𝐫𝐫𝐚 𝐭𝐫𝐨𝐮𝐱𝐞 𝐮𝐦 𝐞𝐬𝐩𝐞𝐭𝐚́𝐜𝐮𝐥𝐨, 𝐬𝐞𝐧𝐝𝐨 𝐮𝐦 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐝𝐞 𝐨𝐫𝐠𝐮𝐥𝐡𝐨, 𝐮𝐧𝐢𝐚̃𝐨 𝐞 𝐫𝐞𝐬𝐩𝐞𝐢𝐭𝐨 𝐩𝐞𝐥𝐚 𝐧𝐨𝐬𝐬𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚, 𝐨𝐧𝐝𝐞 𝐣𝐨𝐯𝐞𝐧𝐬, 𝐯𝐞𝐭𝐞𝐫𝐚𝐧𝐨𝐬 𝐞 𝐞𝐝𝐮𝐜𝐚𝐝𝐨𝐫𝐞𝐬 𝐬𝐞 𝐮𝐧𝐢𝐫𝐚𝐦 𝐩𝐚𝐫𝐚 𝐜𝐞𝐥𝐞𝐛𝐫𝐚𝐫 𝐨 𝐁𝐫𝐚𝐬𝐢𝐥!', 
      images: [post3Image1,post3Image2,post3Image3,post3Image4,post3Image5,post3Image6,post3Image7,post3Image8,post3Image9,post3Image10, post3Image11,post3Image12,post3Image13,                    ],
    },
    {
      id: '4',
      user: '',
      avatar: logojornal,
      title: 'Entrega de posse de líderes de turma 2024',
      body: '𝐑𝐞𝐚𝐥𝐢𝐳𝐚𝐦𝐨𝐬 𝐚 𝐞𝐧𝐭𝐫𝐞𝐠𝐚 𝐝𝐞 𝐩𝐨𝐬𝐬𝐞 𝐝𝐨𝐬 𝐧𝐨𝐯𝐨𝐬 𝐥𝐢́𝐝𝐞𝐫𝐞𝐬 𝐝𝐞 𝐭𝐮𝐫𝐦𝐚, 𝐜𝐨𝐦 𝐚 𝐩𝐫𝐞𝐬𝐞𝐧𝐜̧𝐚 𝐢𝐥𝐮𝐬𝐭𝐫𝐞 𝐝𝐚 𝐞𝐱-𝐩𝐫𝐞𝐟𝐞𝐢𝐭𝐚 𝐀𝐫𝐥𝐞𝐭𝐞 𝐞 𝐝𝐨 𝐚𝐭𝐮𝐚𝐥 𝐩𝐫𝐞𝐟𝐞𝐢𝐭𝐨 𝐕𝐚𝐥𝐝𝐞𝐢𝐫 𝐂𝐨𝐢𝐦𝐛𝐫𝐚. 𝐏𝐚𝐫𝐚𝐛𝐞́𝐧𝐬 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐨𝐬 𝐥𝐢́𝐝𝐞𝐫𝐞𝐬!',
      
      images: [post4Image1,post4Image2,post4Image3,post4Image4, post4Image5,post4Image6, post4Image7,post4Image8, post4Image9, post4Image10, post4Image11,post4Image12,post4Image13,post4Image14, post4Image15],
    },

    {
      id: '5',
      user: '',
      avatar: logojornal,
      title: 'Teatro Casamento na Roça',
      body: '𝐎 𝐭𝐞𝐫𝐜𝐞𝐢𝐫𝐚̃𝐨 realizou a 𝐚𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐚𝐜̧𝐚̃𝐨 𝐝o "𝐂𝐚𝐬𝐚𝐦𝐞𝐧𝐭𝐨 𝐧𝐚 𝐑𝐨𝐜̧𝐚". 𝐂𝐨𝐦 𝐦𝐮𝐢𝐭𝐨 𝐭𝐚𝐥𝐞𝐧𝐭𝐨 𝐞 𝐝𝐢𝐯𝐞𝐫𝐬𝐚̃𝐨, 𝐧𝐨𝐬𝐬𝐨𝐬 𝐚𝐥𝐮𝐧𝐨𝐬 𝐭𝐫𝐨𝐮𝐱𝐞𝐫𝐚𝐦 𝐚̀ 𝐜𝐞𝐧𝐚 𝐚𝐬 𝐬𝐢𝐭𝐮𝐚𝐜̧𝐨̃𝐞𝐬 𝐞𝐧𝐠𝐫𝐚𝐜̧𝐚𝐝𝐚𝐬 𝐞 𝐞𝐦𝐨𝐜𝐢𝐨𝐧𝐚𝐧𝐭𝐞𝐬 𝐝𝐞 𝐮𝐦𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐝𝐞 𝐚𝐦𝐨𝐫 𝐧𝐨 𝐜𝐚𝐦𝐩𝐨.',
      
      images: [post5Image1,post5Image2,post5Image3,post5Image4, post5Image5,post5Image6, post5Image7,post5Image8, post5Image9, post5Image10, post5Image11,post5Image13,post5Image14, post5Image15, post5Image16, post5Image17,]
    },

    {
      id: '6',
      user: '',
      avatar: logojornal,
      title: 'Arraiá Teodomiro 2024',
      body: '𝐍𝐨𝐬𝐬𝐨 𝐀𝐫𝐫𝐚𝐢𝐚́ 𝐟𝐨𝐢 𝐮𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨! 𝐓𝐞𝐯𝐞 𝐪𝐮𝐚𝐝𝐫𝐢𝐥𝐡𝐚, 𝐜𝐨𝐦𝐢𝐝𝐚𝐬 𝐭𝐢́𝐩𝐢𝐜𝐚𝐬, 𝐦𝐮́𝐬𝐢𝐜𝐚 𝐚𝐧𝐢𝐦𝐚𝐝𝐚 𝐞 𝐦𝐮𝐢𝐭𝐚 𝐚𝐥𝐞𝐠𝐫𝐢𝐚 𝐧𝐨 𝐀𝐫𝐫𝐚𝐢𝐚́. 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐞𝐦𝐨𝐬 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐨𝐬 𝐪𝐮𝐞 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐫𝐚𝐦 𝐞 𝐚𝐣𝐮𝐝𝐚𝐫𝐚𝐦 𝐚 𝐭𝐨𝐫𝐧𝐚𝐫 𝐞𝐬𝐬𝐚 𝐟𝐞𝐬𝐭𝐚 𝐢𝐧𝐞𝐬𝐪𝐮𝐞𝐜𝐢́𝐯𝐞𝐥!',
      
      images: [post6Image1,post6Image2,post6Image3,post6Image4, post6Image5,post6Image6, post6Image7,post6Image8, post6Image9, post6Image10, post6Image11,post6Image13,post6Image14, post6Image15, post6Image16, post6Image17, post6Image18, post6Image19, post6Image20, post6Image21, post6Image22, post6Image23, post6Image24,post6Image25,]
    },
    
  ])

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const postsLength = filteredPosts.length

  const fetchPosts = useCallback((query?: string) => {
    if (query) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(posts)
    }
  }, [posts])

  let numberOfPostsText: string
  if (postsLength > 1) {
    numberOfPostsText = 'publicações'
  } else {
    numberOfPostsText = 'publicação'
  }

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <HomeContainer>
    

      <ProfileCard />
      <SearchInput
        postsLength={postsLength}
        fetchPosts={fetchPosts}
        numberOfPostsText={numberOfPostsText}
      />
      
      <PostList>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostList>

      {/* Footer com nome e link do Instagram */}
      <Footer>
        2024 |  Desenvolvido por Kaick Wylkyner   {' '} 
        <a href="https://www.instagram.com/kaickxwy" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '8px' }}  /> 
        </a>
      </Footer>
    </HomeContainer>
  )
}
