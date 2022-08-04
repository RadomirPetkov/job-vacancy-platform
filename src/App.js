import { Navbar } from "./components/Navbar/Navbar";
import { Heading } from "./components/Home/Heading/Heading";
import { JobOffers } from "./components/Home/JobOffers/JobOffers";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Heading />



        <div className="wrapper row3">
          <hr className="btmspace-50" />
          <h3 className="test">Our latest offers:</h3>
          <hr className="btmspace-100" />
          <main className="hoc container clear">

            {/* main body */}

            <JobOffers />




            <hr className="btmspace-80" />

            <section id="overview">
              <div className="sectiontitle">
                <p className="nospace font-xs">Integer facilisis enim sollicitudin</p>
                <p className="heading underline font-x2">Dolor ut pellentesque</p>
              </div>
              <ul className="nospace group btmspace-80">
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-tape" />
                      </a>
                      <h6 className="heading">Efficitur auctor</h6>
                    </div>
                    <p>
                      Cras dui ac pretium egestas nunc maecenas scelerisque leo eget
                      enim interdum at vulputate lorem pretium in.
                    </p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-table-tennis" />
                      </a>
                      <h6 className="heading">Tempor aliquam</h6>
                    </div>
                    <p>
                      Sagittis arcu a magna eget cursus lacus consectetur proin
                      imperdiet bibendum elit id molestie ipsum ut tellus.
                    </p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <div className="clear">
                      <a href="#">
                        <i className="fas fa-people-carry" />
                      </a>
                      <h6 className="heading">Metus convallis</h6>
                    </div>
                    <p>
                      Orci blandit ac mauris ac gravida maximus nulla curabitur
                      convallis massa sed urna placerat sed tempor velit.
                    </p>
                  </article>
                </li>
              </ul>
              <footer className="center">
                <a className="btn" href="#">
                  Mattis vestibulum
                </a>
              </footer>
            </section>

            {/* / main body */}
            <div className="clear" />
          </main>
        </div>



        <div
          className="bgded overlay"
          style={{ backgroundImage: 'url("images/demo/backgrounds/02.png")' }}
        >
          <section id="splitfifty" className="hoc container clear">
            <div className="sectiontitle">
              <p className="nospace font-xs">Magna ultrices eleifend suspendisse</p>
              <p className="heading underline font-x2">Posuere vivamus semper</p>
            </div>
            <div
              className="bgded clear"
              style={{ backgroundImage: 'url("images/demo/backgrounds/03.png")' }}
            >

              <article>
                <h6 className="heading font-x2">Tellus nec mollis sem</h6>
                <p>
                  lacus dui pretium non elit ac interdum ullamcorper purus ut
                  ultricies ullamcorper convallis morbi bibendum sapien in odio
                  finibus sit amet lacinia dolor dapibus in nisl erat consectetur eu
                  blandit.
                </p>
                <footer>
                  <a className="btn" href="#">
                    Fermentum felis
                  </a>
                </footer>
              </article>

            </div>
          </section>
        </div>



        <div className="wrapper row2">
          <div className="hoc container clear">

            <div className="sectiontitle">
              <p className="nospace font-xs">Id elementum lobortis justo donec</p>
              <p className="heading underline font-x2">Rutrum sed ligula viverra</p>
            </div>
            <ul className="nospace group team">
              <li className="one_quarter first">
                <figure>
                  <a className="imgover" href="#">
                    <img src="images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>A. Doe</strong> <em>Job Title Here</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>B. Doe</strong> <em>Job Title Here</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>C. Doe</strong> <em>Job Title Here</em>
                  </figcaption>
                </figure>
              </li>
              <li className="one_quarter">
                <figure>
                  <a className="imgover" href="#">
                    <img src="images/demo/300x300.png" alt="" />
                  </a>
                  <figcaption>
                    <strong>D. Doe</strong> <em>Job Title Here</em>
                  </figcaption>
                </figure>
              </li>
            </ul>

          </div>
        </div>



        <div className="wrapper row3">
          <section className="hoc container clear">

            <div className="sectiontitle">
              <p className="nospace font-xs">Nisl vitae mauris ipsum eget</p>
              <p className="heading underline font-x2">Tincidunt elit velit auctor</p>
            </div>
            <ul id="stats" className="nospace group">
              <li>
                <i className="fab fa-sticker-mule" />
                <p>
                  <a href="#">123</a>
                </p>
                <p>Phasellus tincidunt</p>
              </li>
              <li>
                <i className="fab fa-pied-piper-alt" />
                <p>
                  <a href="#">1234</a>
                </p>
                <p>Egestas maximus</p>
              </li>
              <li>
                <i className="fas fa-globe" />
                <p>
                  <a href="#">12345</a>
                </p>
                <p>Aliquam neque</p>
              </li>
              <li>
                <i className="fas fa-ribbon" />
                <p>
                  <a href="#">6789</a>
                </p>
                <p>Curabitur sodales</p>
              </li>
            </ul>

          </section>
        </div>



        <div
          className="wrapper bgded"
          style={{ backgroundImage: 'url("images/demo/backgrounds/04.png")' }}
        >
          <section id="testimonials" className="hoc clear">

            <div className="one_half overlay">
              <ul className="nospace">
                <li>
                  <blockquote>
                    suscipit tellus non ligula mattis quis iaculis nunc lobortis
                    vestibulum vehicula bibendum malesuada curabitur quis interdum mi
                    vestibulum consectetur leo ut viverra sagittis sapien orci rhoncus
                    nisi.
                  </blockquote>
                  <figure className="clear">
                    <img className="circle" src="images/demo/60x60.png" alt="" />
                    <figcaption>
                      <h6 className="heading">A. Doe</h6>
                      <em>CEO / Odio tristique quis</em>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <footer>
                    <a className="btn inverse" href="#">
                      View More
                    </a>
                  </footer>
                </li>
              </ul>
            </div>

          </section>
        </div>



        <div className="wrapper row3">
          <section className="hoc container clear">

            <div className="sectiontitle">
              <p className="nospace font-xs">Luctus ligula lacus non odio nunc</p>
              <p className="heading underline font-x2">Faucibus libero risus</p>
            </div>
            <ul id="latest" className="nospace group">
              <li className="one_third first">
                <article>
                  <a className="imgover" href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user" /> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">
                      Maecenas eu posuere velit eget ultricies enim
                    </h6>
                    <p>
                      Sed nibh enim consequat ac tellus tempus interdum euismod ligula
                      quisque quam nisl aliquet et facilisis eget.
                    </p>
                    <footer>
                      <a className="btn" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
              <li className="one_third">
                <article>
                  <a className="imgover" href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user" /> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">
                      Condimentum quis arcu nullam id purus tortor
                    </h6>
                    <p>
                      Molestie vulputate a luctus nulla nulla eleifend justo in libero
                      feugiat congue donec sit amet pharetra velit.
                    </p>
                    <footer>
                      <a className="btn" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
              <li className="one_third">
                <article>
                  <a className="imgover" href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <ul className="nospace meta group">
                    <li>
                      <i className="fas fa-user" /> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                    </li>
                  </ul>
                  <div className="excerpt">
                    <h6 className="heading">
                      Nulla tempor faucibus tortor nulla pretium
                    </h6>
                    <p>
                      Cras auctor commodo metus sed pede in vitae sapien phasellus in
                      magna sed dictum libero et nisi proin porta.
                    </p>
                    <footer>
                      <a className="btn" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>

          </section>
        </div>



        <div
          className="bgded overlay row4"
          style={{ backgroundImage: 'url("images/demo/backgrounds/05.png")' }}
        >
          <footer id="footer" className="hoc clear">

            <div className="center btmspace-50">
              <h6 className="heading">Sislaf</h6>
              <ul className="faico clear">
                <li>
                  <a className="faicon-dribble" href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="faicon-facebook" href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="faicon-google-plus" href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a className="faicon-linkedin" href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="faicon-twitter" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="faicon-vk" href="#">
                    <i className="fab fa-vk" />
                  </a>
                </li>
              </ul>
              <p className="nospace">
                Pellentesque ante integer mollis risus vitae condimentum vulputate
                elit.
              </p>
            </div>

            <hr className="btmspace-50" />

            <div className="group btmspace-50">
              <div className="one_quarter first">
                <h6 className="heading">Erat adipiscing metus</h6>
                <p className="nospace btmspace-15">
                  Mi etiam ac enim quis risus hendrerit ullamcorper nam faucibus
                  lectus eget.
                </p>
                <form method="post" action="#">
                  <fieldset>
                    <legend>Newsletter:</legend>
                    <input
                      className="btmspace-15"
                      type="text"
                      defaultValue=""
                      placeholder="Name"
                    />
                    <input
                      className="btmspace-15"
                      type="text"
                      defaultValue=""
                      placeholder="Email"
                    />
                    <button type="submit" value="submit">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Auctor tellus diam</h6>
                <ul className="nospace linklist">
                  <li>
                    <article>
                      <p className="nospace btmspace-10">
                        <a href="#">
                          Mauris nam odio dui vestibulum a molestie ac pulvinar a
                          tellus donec nisi dui.
                        </a>
                      </p>
                      <time className="block font-xs" dateTime="2045-04-06">
                        Friday, 6<sup>th</sup> April 2045
                      </time>
                    </article>
                  </li>
                  <li>
                    <article>
                      <p className="nospace btmspace-10">
                        <a href="#">
                          Mattis ipsum ut leo ut elementum odio sed tellus quisque
                          malesuada bibendum.
                        </a>
                      </p>
                      <time className="block font-xs" dateTime="2045-04-05">
                        Thursday, 5<sup>th</sup> April 2045
                      </time>
                    </article>
                  </li>
                </ul>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Laoreet non sodales</h6>
                <ul className="nospace linklist">
                  <li>
                    <a href="#">Amet blandit non quam quisque</a>
                  </li>
                  <li>
                    <a href="#">Cursus faucibus nulla in mauris</a>
                  </li>
                  <li>
                    <a href="#">Libero interdum quis molestie</a>
                  </li>
                  <li>
                    <a href="#">Ut convallis non felis mauris</a>
                  </li>
                  <li>
                    <a href="#">Volutpat consequat nibh aenean</a>
                  </li>
                </ul>
              </div>
              <div className="one_quarter">
                <h6 className="heading">Aliquam mollis tortor</h6>
                <ul className="nospace clear latestimg">
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="imgover" href="#">
                      <img src="images/demo/100x100.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div id="ctdetails" className="clear">
              <ul className="nospace clear">
                <li className="one_quarter first">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-phone" />
                    </a>{" "}
                    <span>
                      <strong>Give us a call:</strong> +00 (123) 456 7890
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-envelope" />
                    </a>{" "}
                    <span>
                      <strong>Send us a mail:</strong> support@domain.com
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-clock" />
                    </a>{" "}
                    <span>
                      <strong> Monday - Saturday:</strong> 08.00am - 18.00pm
                    </span>
                  </div>
                </li>
                <li className="one_quarter">
                  <div className="block clear">
                    <a href="#">
                      <i className="fas fa-map-marker-alt" />
                    </a>{" "}
                    <span>
                      <strong>Come visit us:</strong> Directions to{" "}
                      <a href="#">our location</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </footer>
        </div>



        <div className="wrapper row5">
          <div id="copyright" className="hoc clear">

            <p className="fl_left">
              Copyright © 2018 - All Rights Reserved - <a href="#">Domain Name</a>
            </p>
            <p className="fl_right">
              Template by{" "}
              <a
                target="_blank"
                href="https://www.os-templates.com/"
                title="Free Website Templates"
              >
                OS Templates
              </a>
            </p>

          </div>
        </div>



        <a id="backtotop" href="#top">
          <i className="fas fa-chevron-up" />
        </a>
        {/* JAVASCRIPTS */}
        <script src="layout/scripts/jquery.min.js"></script>
        <script src="layout/scripts/jquery.backtotop.js"></script>
        <script src="layout/scripts/jquery.mobilemenu.js"></script>
      </>

    </div>
  );
}

export default App;
