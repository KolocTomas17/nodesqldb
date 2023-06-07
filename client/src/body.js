
import Footer from "./components/Footer";

const Body = () => {
  return (
    <>
      <div className="header-wrapper" id="home">
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title">Nakama Books</h2>
              <h1 className="subtitle profession">
                Vaše destinace pro všechny manga milovníky
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="main-content">
        <div className="section-light about-me" id="about-me">
          <div className="container">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                O nás <i className="fa-brands fa-instagram" />
              </h1>
            </div>
            <div className="columns is-multiline">
              <div
                className="column is-6 has-vertically-aligned-content"
                data-aos="fade-right"
              >
                <p className="is-larger">
                  <strong>
                    Showcase is a modern, beautiful personal website template to
                    showcase who you are, as well as projects you've worked on
                    in the past.
                  </strong>
                </p>
                <br />

                <p>
                  Showcase was built from the ground up with Bulma to be fast
                  and responsive out of the box with all source files well
                  documented for easy to customization. The Showcase template
                  gives you a personal space to share what you are all about as
                  a creative designer, developer, photographer, and more!
                </p>

                <br />

                <div className="is-divider" />
              </div>
              <div className="column is-6 right-image " data-aos="fade-left">
                <img
                  className="is-rounded"
                  src="https://picsum.photos/id/366/600/375"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-color services" id="services"></div>
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
                <form
                  action="https://formspree.io/email@example.com"
                  method="POST"
                >
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        placeholder="email"
                        name="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Zpráva</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="zpráva"
                        name="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control ">
                      <button className="button submit-button">
                        poslat&nbsp;&nbsp;
                        <i className="fas fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer></Footer>
    </>
  );
};

export default Body;
