export default function RightSection({
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
                {/* Left Content */}
                <div className="col-lg-6">
                    <h3 className="fw-semibold mb-3">{productName}</h3>
                    <p className="text-muted mb-4 fs-5">{productDescription}</p>

                    {/* Links */}
                    <div className="mb-4">
                        {tryDemo && (
                            <a href={tryDemo} className="me-3 text-decoration-none text-primary">
                                Try Demo →
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className="text-decoration-none text-primary">
                                Learn More →
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center">
                    <img src={imageUrl} alt={productName} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
