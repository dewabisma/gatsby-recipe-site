import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quos debitis nemo exercitationem inventore quo laudantium, alias
              repellendus illo numquam?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia, voluptatum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
              saepe, labore est accusamus itaque.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button className="btn block" type="submit">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
