export default function Team() {
    return (
        <div className="container">
            <div className="row p-3">
                <h1 className=" text-center text-muted">
                    People
                </h1>
            </div>
            <div className="row p-3 text-muted " style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/sairam.jpg" alt="sairam image" style={{borderRadius:"50%",width:"60%"}}  className="mb-3"/>
                    <h4>SaiRam</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>SaiRam bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                </div>
            </div>
        </div>
    )
}