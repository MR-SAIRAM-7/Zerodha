export default function Hero() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-muted fs-2">Charges</h1>
            <p className="text-center text-muted fs-4" style={{ marginBottom: "150px" }}>List of all charges and taxes</p>
            <div className="row mt-5" >
                <div className="col-4">
                    <img className="p-4" src="media/images/pricingEquity.svg" alt="pricingEquity.svg" style={{ width: "80%" }} />
                    <h4 className="text-center text-muted" style={{marginRight:"3.2em"}}>Free equity delivery</h4>
                    <p className="text-center text-muted" style={{marginRight:"3.2em"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img className="p-4" src="media/images/pricing20.svg" alt="pricing20.svg" style={{ width: "80%" }} />
                    <h4 className="text-center text-muted" style={{marginRight:"3.2em"}}>Intraday and F&O trades</h4>
                    <p className="text-center text-muted" style={{marginRight:"3.2em"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img className="p-4" src="media/images/pricingMF.svg" alt="pricingMF.svg" style={{ width: "80%" }} />
                    <h4 className="text-center text-muted" style={{marginRight:"3.2em"}}>Free direct MF</h4>
                    <p className="text-center text-muted" style={{marginRight:"3.2em"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}