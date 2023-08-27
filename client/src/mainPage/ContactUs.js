import Form from "../components/Form";

const ContactUs = () => {
    return(
        <div className="section-light contact" id="contact">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Kontaktujte nás
              </h1>
            </div>
            <div className="column is-8 is-offset-2">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactUs