
import { PostCard, Categories, PostWidget, Socials}  from '../components';
import { getPosts } from '../services';
import Head from 'next/head'
import { FeaturedPosts } from '../sections';
// import Image from 'next/image'

// const posts = [
//   { title: 'React Testing', excerpt: 'Learn react testing' },
//   { title: 'React with Tailwind', excerpt: 'Learn react with Tailwind' },
// ];

export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>SheGang Fansite</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <FeaturedPosts />
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => 
        <PostCard post={post.node} key={post.title} /> )}
        </div>
        
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Socials />
            <PostWidget  />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}