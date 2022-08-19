import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <header>
        <nav id="navp">
          <div id="logoNav">
            <Link to="/">
              <img src="./assets/img/logo1.png" alt="logo de petstore" />
            </Link>
          </div>
          <div>
            <ul id="headMenu">
              <div className="container">
                <input type="search" placeholder="Rechercher ..." />
                <button type="submit">Search</button>
              </div>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-house fa-2xl"></i>
                </div>
                <div>
                  <span>
                    <Link to="/">Accueil</Link>
                  </span>
                </div>
              </li>

              <li>
                <div className="icon">
                  <i className="fa-solid fa-phone fa-2xl"></i>
                </div>
                <div>
                  <span>
                    <Link to="/contact">Contact</Link>
                  </span>
                </div>
              </li>
              <li>
                <a href="">
                  <div className="icon">
                    <i className="fa-solid fa-basket-shopping fa-2xl"></i>
                  </div>
                  <div>
                    <span>Panier</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.php?page=logout">
                  <div className="icon">
                    <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
                  </div>
                  <div>
                    <span>Logout</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
