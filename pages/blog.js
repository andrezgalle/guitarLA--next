import Layout from "@/components/layout"
import Post from "@/components/post"
import styles from '../styles/grid.module.css'

export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data:post} = await respuesta.json()
  console.log(post)
  return{
    props:{
      post
    }
  }
}

const Blog = ({post}) => {
  console.log(post)
  return (
    <Layout
        title={'Blog'}
        description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {post?.map(cadaPost=>(
            <Post
              key={cadaPost.id}
              cadaPost={cadaPost.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Blog