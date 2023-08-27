const MainContent = () => {
    return (
        <div className="main-content">
        <div className="section-light about-me" id="about-me">
          <div className="container">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">O nás</h1>
            </div>
            <div className="columns is-multiline">
              <div
                className="column is-6 has-vertically-aligned-content"
                data-aos="fade-right"
              >
                <p className="is-larger">
                  <strong>
                    Vítejte v malém online obchodě s mtb koly! Ať už jste začátečník, nebo ostřílený biker, zde si rozhodně vyberete svoje kolo.
                  </strong>
                </p>
                <br />
                <p>
                  
                  Pečlivě vybíráme každé kolo, které otestujeme a seřídíme tak, abyste měli jistotu, že se vám na něm nic nerozbije při své první projížďce.
                </p>
                <p>
                  V nabídce je zatím pouze pár kusů různých značek. Do budoucna se to rozhodně bude rozšiřovat.
                </p>
               
                <br />
                <div className="is-divider" />
              </div>
              <div className="column is-6 right-image " data-aos="fade-left">
                <img
                  className="is-rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEZ-1T9fcnIFr_qzAeO-YWBO3CGx7cz0Bjg&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    )    
}

export default MainContent