import Layout from "@/components/layout"
import Link from "next/link"
const Pagina404 = () => {
  return (
    <Layout
        title="Pagina no Encontrada"
    >
        <p className="error">Página no Encontrada</p>
        <Link className="error-enlace" href={'/'}>Ir a Inicio</Link>
    </Layout>
  )
}

export default Pagina404