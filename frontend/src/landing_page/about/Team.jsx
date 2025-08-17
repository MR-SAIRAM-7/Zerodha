export default function Team() {
    return (
        <div className="container">
            <div className="row p-3">
                <h1 className=" text-center text-muted">
                    People
                </h1>
            </div>
            <div className="row p-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/sairam.jpg" alt="sairam image" style={{ borderRadius: "50%", width: "60%" }} className="mb-3" />
                    <h4>SaiRam</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                        SaiRam is currently building a full-fledged stock trading platform inspired by
                        Zerodha, using the MERN stack. His goal is to create a modern, seamless, and
                        intuitive investing experience for users, while also learning and mastering
                        real-world software engineering practices.
                    </p>
                    <p>
                        With a passion for full-stack development, he is designing and coding the
                        entire platform from scratch the landing pages and signup flows to
                        backend APIs, authentication, and trading features.
                    </p>
                    <p>
                        Outside of coding, he is deeply curious about finance and technology, and
                        enjoys experimenting with UI/UX ideas to deliver clean, simple, and scalable
                        user experiences.
                    </p>

                </div>
            </div>
        </div>
    )
}