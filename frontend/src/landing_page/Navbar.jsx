export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom p-3" style={{ backgroundColor: "white" }}>
            <div className="container-fluid">
                {/* Logo with left margin */}
                <a className="navbar-brand ms-3" href="#">
                    <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
                </a>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#">SignUp</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="#">Products</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="#">Pricing</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
