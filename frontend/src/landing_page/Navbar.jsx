import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom p-3" style={{ backgroundColor: "white" }}>
            <div className="container-fluid">
                {/* Logo with left margin */}
                <Link className="navbar-brand ms-3" to={"/"}>
                    <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
                </Link>

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
                            <Link className="nav-link active" aria-current="page" to={'/signup'}>SignUp</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to={'/product'}>Products</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to={'/pricing'}>Pricing</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to={'/support'}>Support</Link>
                        </li>
                       <a  className="nav-link active" href="http://localhost:5174/">Dashboard</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
