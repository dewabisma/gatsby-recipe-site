import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/Meta"

const Error = () => {
  return (
    <Layout>
      <Meta title="404 Not Found" />

      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
