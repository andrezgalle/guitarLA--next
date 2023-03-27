import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLA tienda de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
         <Image src="/img/nosotros.jpg" width={1000} height={800} alt="imagen sobre nosotros"/>
          <div>
            <p>
              tincidunt felis quis, malesuada est. Aenean mattis ante quis odio malesuada maximus. Quisque vel volutpat nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sem nisi, gravida vel finibus ac, tincidunt non risus. Nam finibus id nisl congue eleifend. Maecenas sit amet metus eget nunc iaculis maximus nec et massa. Ut tincidunt sollicitudin volutpat. Aenean viverra, sapien vitae hendrerit vulputate.
            </p>
            <p>
               justo eget gravida auctor, augue turpis fermentum ex, commodo lobortis diam orci eu turpis. Donec mattis sapien sed ex bibendum dapibus. Nulla tempor mollis tortor ac ornare. Aliquam ac nibh ante.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros