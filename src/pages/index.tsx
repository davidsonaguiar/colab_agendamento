import type {ReactNode} from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './index.module.css'

export default function Home(): ReactNode {
  return (
    <Layout
      title="Início"
      description="Documentação dos projetos de agendamento de espaços do COLAB/IFAL."
    >
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>IFAL · Campus Maceió</p>
            <Heading as="h1">Agendamento de espaços do COLAB</Heading>
            <p className={styles.lead}>
              Documentação do sistema que organiza solicitações de uso e reservas
              dos espaços do laboratório.
            </p>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Abrir documentação
            </Link>
          </div>
        </header>
        <section className={`container ${styles.projects}`} aria-label="Projetos">
          <article className={styles.card}>
            <Heading as="h2">Para usuários</Heading>
            <p>
              Entenda como navegar pelos laboratórios, acessar sua conta e
              acompanhar solicitações.
            </p>
            <Link to="/docs/guia-do-usuario/fluxo-de-agendamento">
              Consultar o guia do usuário →
            </Link>
          </article>
          <article className={styles.card}>
            <Heading as="h2">Para desenvolvimento</Heading>
            <p>
              Consulte a arquitetura, a configuração local, as rotas da API e o
              estado das integrações.
            </p>
            <Link to="/docs/desenvolvimento/arquitetura-integracao">
              Consultar a documentação técnica →
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  )
}
