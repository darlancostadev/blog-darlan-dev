import Header from "../components/Header";
import Main from "../components/Main";

import Prismic from 'prismic-javascript';

const Home = ({posts}) => {
  console.log(posts);
  return (
    <>
    <Header/>
    <Main posts={posts}/>
    </>
  )
}


export async function getServerSideProps({res}) {
  const client = Prismic.client('https://darlandev.cdn.prismic.io/api/v2')
  const posts = await client.query(Prismic.Predicates.at('document.type', 'blog'))
  return{
    props:{
      posts:posts.results
    }
  }
}

export default Home