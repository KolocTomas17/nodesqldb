import BackToTopBtn from "./BackToTopBtn"

const Contact = () => {
    return (
        <section className="section" id="about">
  {/* Title */}
  <div className="section-heading">
    <h4 className="title is-4">Tomáš Koloc</h4>
    <div className="container">
      <p className="subtitle is-5">
        Jsem nadšenec do horských kol již od mala. Vždy jsem chtěl vlastnit obchod s nimi a rozumět jim. Chěl bych se toho co nejvíce věnovat a mít kolem toho přehled. Proto jsem se rozhodl vytvořit tento online obchod.
      </p>
      <p className="subtitle is-5">
        Vlastníkem jsem pouze já, do budoucna se to možná změní dle růstu kariéry a zakázek.
      </p>
      <p>Platba probíhá pomocí falešné karty, tzn. nemusíte tam dávat údaje od své karty, ale stačí Vám pouze smyšlené.</p>
      <p>Například číslo karty: 5454 5454 5454 5454</p>
    </div>
  </div>
  <div className="columns has-same-height is-gapless">
    <div className="column">
      <div className="card">
        <div className="card-content">
          <h3 className="title is-4">Kontakt</h3>
          <div className="content">
            <table className="table-profile">
              <tbody>
                <tr>
                  <th colSpan={1} />
                  <th colSpan={2} />
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>Mladá Boleslav</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>+420 605783479</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>t.koloc@outlook.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
         
        </div>
      </div>
    </div>
  
  </div>
  <BackToTopBtn></BackToTopBtn>
</section>

    )
}

export default Contact

