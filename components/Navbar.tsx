import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove authentication from localStorage
    router.push('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar px-4">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" href="/containers">
      Container App
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" href="/containers">
            Containers
          </Link>
        </li>
      </ul>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  </div>
</nav>

  );
}
