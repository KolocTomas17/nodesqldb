import BackToTopBtn from "./BackToTopBtn"

const Contact = () => {
    return (
        <section className="section" id="about">
  {/* Title */}
  <div className="section-heading">
    <h3 className="title is-2">About Me</h3>
    <h4 className="subtitle is-5">Tomas Koloc</h4>
    <div className="container">
      <p>
        Web developer with more than <strong>3 years</strong> of well-rounded
        experience with a degree in the field of
        <strong> Computer Science</strong>,  knowledge of modern Web
        techniques. Looking for an
        opportunity to work and upgrade, as well as being involved in an
        organization that believes in gaining a competitive edge and giving back
        to the community.
      </p>
    </div>
  </div>
  <div className="columns has-same-height is-gapless">
    <div className="column">
      <div className="card">
        <div className="card-content">
          <h3 className="title is-4">Profile</h3>
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
                <tr>
                  <td>School:</td>
                  <td>Střední průmyslová škola Mladá Boleslav</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
         
        </div>
      </div>
    </div>
    <div className="column">
      {/* Skills */}
      <div className="card">
        <div className="card-content">
          <h3 className="title is-4">Skills</h3>
          <div className="content">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>JavaScript:</strong>
                    <br />
                    <progress
                      className="progress is-primary"
                      value={50}
                      max={100}
                    />
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Node.js:</strong>
                    <br />
                    <progress
                      className="progress is-primary"
                      value={30}
                      max={100}
                    />
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>React:</strong>
                    <br />
                    <progress
                      className="progress is-primary"
                      value={60}
                      max={100}
                    />
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>HTML5/CSS3</strong>
                    <br />
                    <progress
                      className="progress is-primary"
                      value={95}
                      max={100}
                    />
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Databases</strong>
                    <br />
                    <progress
                      className="progress is-primary"
                      value={75}
                      max={100}
                    />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BackToTopBtn></BackToTopBtn>
</section>

    )
}

export default Contact

