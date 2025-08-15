export default function Awards() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                
                <div className="col-md-6 p-5">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Largest broker" 
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-6">
                    <h1 className="mb-4">Largest Stock Broker In India</h1>
                    
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes 
                        in India daily by trading and investing in:
                    </p>

                    <div className="row mb-4">
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Futures and Options</li>
                                <li className="mb-2">Commodity Derivatives</li>
                                <li className="mb-2">Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Stocks and IPOs</li>
                                <li className="mb-2">Direct Mutual Funds</li>
                                <li className="mb-2">Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img 
                        src="media/images/pressLogos.png" 
                        alt="Press Logos" 
                        className="img-fluid"
                        style={{width:"90%"}}
                    />
                </div>
            </div>
        </div>
    );
}
