export default function Pricing() {
    return (
        <div className="container">
            <div className="row m-3 p-5">
                <div className="col-4">
                    <h1 className="mb-3">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#"style={{ textDecoration: "none" }}>
                        See Pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="col-1"></div>

                <div className="col-6">
                    <div className="row text-center ml-3">
                        <div className="col border p-3">
                            <h1 className="mb-3">&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mb-3">&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
