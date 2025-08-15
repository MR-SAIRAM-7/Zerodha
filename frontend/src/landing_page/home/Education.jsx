export default function Education(){
    return (
        <div className="container">
            <div className="row m-3 p-3">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" />
                </div>
                <div className="col-6">
                    <h1 className="mt-5">Free and open market education</h1>
                    <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#"  style={{ textDecoration: "none",textAlign:"start" }}>
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#"  style={{ textDecoration: "none" }}>
                        Trading Q&A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}