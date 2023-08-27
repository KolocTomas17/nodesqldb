const Services = () => {
    return(
        <div className="section-color services" id="services">
        <div className="container">
          <div className="columns is-multiline">
            <div
              className="column is-12 about-me"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1 className="title has-text-centered section-title">Služby</h1>
            </div>
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-book fa-3x" />
                <hr />
                <h2>
                Velký výběr různých kol
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                 <i className="fas fa-dollar-sign fa-3x" />
                <hr />
                <h2>
                Vše za rozumnou cenu
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-phone fa-3x" />
                <hr />
                <h2>
                Infolinka dostupná i o svátkách
                </h2>
              </div>
            </div>
            <hr />
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-truck fa-3x" />
                <hr />
                <h2>
                Rychlá doprava
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-reply fa-3x" />
                <hr />
                <h2>
                Reklamace na naše náklady
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-paper-plane fa-3x" />
                <hr />
                <h2>
                 Komunikace i na sociálních sítích
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Services