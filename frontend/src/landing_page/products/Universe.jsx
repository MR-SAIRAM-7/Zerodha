export default function ZerodhaUniverse() {
  const partners = [
    {
      logo: "media/images/zerodhaFundhouse.png",
      name: "Zerodha Fund House",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      name: "Sensibull",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      logo: "media/images/zerodhaFundhouse.png",
      name: "Tijori",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      logo: "media/images/streakLogo.png",
      name: "Streak",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      logo: "media/images/smallcaseLogo.png",
      name: "smallcase",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      logo: "media/images/dittoLogo.png",
      name: "ditto",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container my-5">
      {/* Header */}
      <p className="fs-4 text-muted text-center mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <div className="text-center mb-5">
        <h2 className="fs-2 mb-5">The Zerodha Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid */}
      <div className="row text-center">
        {partners.map((partner, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="mb-3"
              style={{ height: "40px" }}
            />
            <p className="text-muted small px-5 mt-2">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
