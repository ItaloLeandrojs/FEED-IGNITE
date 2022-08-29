import { Header } from './components/Header';
import { Post} from './components/Post';
import { AsideBar } from './components/asideBar';

import styles from './app.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/maykbrito.png',
      name:'Italo Leandro',
      role:'Aluno Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'} ,
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, adipisci doloremque. Quo error nulla mollitia aperiam quia repellat, id dolores eveniet eligendi fugit earum inventore perspiciatis distinctio? Doloribus, iusto accusantium'},
      {type: 'link', content:'Jane.designe/doctorcare'},
    ],
    publishedAt: new Date('2022-08-21 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/italoleandrojs.png',
      name:'Joyce Batista',
      role:'Aluna Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'} ,
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, adipisci doloremque. Quo error nulla mollitia aperiam quia repellat, id dolores eveniet eligendi fugit earum inventore perspiciatis distinctio? Doloribus, iusto accusantium'},
      {type: 'link', content:'Jane.designe/doctorcare'},
    ],
    publishedAt: new Date('2022-08-19 17:00:00')
  },
];



export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <AsideBar />
        <main>
          {posts.map(post=>{
            return (
              <Post 
                key={post.id}
                author={post.author}
                content ={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
    
  )
}


