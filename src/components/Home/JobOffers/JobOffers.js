

export const JobOffers = () => {


    return <section id="introblocks">
        <ul className="nospace group btmspace-80">
            <li className="one_third first">
                <figure>
                    <a className="imgover" href="#">
                        <img src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ=" alt="" />
                    </a>
                    <figcaption>
                        <h5 >Job position: <b>Chef</b></h5>
                        {/* <h6 className="heading">Chef</h6> */}
                        <p> Job descripiton: You will have to prepare everyday meals for our clients.
                        </p>
                        <p>Salary: 3000-5000$</p>
                    </figcaption>
                </figure>
            </li>

            <li className="one_third">
                <figure>
                    <a className="imgover" href="#">
                        <img src="https://blog.drjobpro.com/wp-content/uploads/2022/02/Waiters-and-Waitresses-1.jpg" alt="" />
                    </a>
                    <figcaption>
                        <h6 className="heading">Libero sodales</h6>
                        <p>
                            Nec tincidunt maximus ex orci sollicitudin metus ut lacinia
                            ligula nisi vel neque sed non quam eleifend.
                        </p>
                    </figcaption>
                </figure>
            </li>
            <li className="one_third">
                <figure>
                    <a className="imgover" href="#">
                        <img src="images/demo/348x261.png" alt="" />
                    </a>
                    <figcaption>
                        <h6 className="heading">Laoreet tortor</h6>
                        <p>
                            Pharetra etiam ut nisi non mi scelerisque consectetur maecenas
                            vel elementum lectus cras maximus finibus.
                        </p>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </section>
}