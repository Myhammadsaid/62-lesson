import React from "react";
import search from "../../assets/images/search.png";

function Header() {
  let Links = ["Home", "Contact", "About", "Sign Up"];
  return (
    <header>
      <section className="header-top">
        <div className="container">
          <div className="header-top-content">
            <p className="header-top-text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#" className="header-top-text2">
              ShopNow
            </a>
          </div>
        </div>
      </section>
      <section className="header-end">
        <div className="container">
          <nav>
            <p className="header-end-title">Exclusive</p>
            <div className="nav-links" id="navbar-responsive">
              {Links.map((val, ind) => (
                <a href="#" key={ind} className="nav-link">
                  {val}
                </a>
              ))}
              <div className="header-btns-icons">
                <button className="header-btn">
                  What are you looking for?
                  <img src={search} alt="search" />
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
              </div>
            </div>
            <button className="menu-btn" id="menu-btn">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </section>
      <hr />
    </header>
  );
}

export default Header;
