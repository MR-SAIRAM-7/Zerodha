export default function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" style={{width:"80%"}}/>
        </div>

        {/* Right Content */}
        <div className="col-lg-6 p-5">
          <h3 className="fw-semibold mb-3 fs-1">{productName}</h3>
          <p className="text-muted mb-4 fs-5">{productDescription}</p>

          {/* Links */}
          <div className="mb-4">
            {tryDemo && (
              <a href="#"className="me-3 text-decoration-none text-primary">
                Try Demo →
              </a>
            )}
            {learnMore && (
              <a href="#" className="text-decoration-none text-primary">
                Learn More →
              </a>
            )}
          </div>

          {/* Store Badges */}
          <div className="d-flex gap-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
