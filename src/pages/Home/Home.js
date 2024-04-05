import React from "react";
import applelogo from "../../assets/images/apple-logo.png";
import applephone from "../../assets/images/apple-phone.png";
import arrow from "../../assets/images/arrow-right.png";
import frame from "../../assets/images/Frame.png";
import Jbl from "../../assets/images/JBL.png";
import service1 from "../../assets/images/Services-img1.png";
import service2 from "../../assets/images/Services-img2.png";
import service3 from "../../assets/images/Services-img3.png";
import eye from "../../assets/images/Eye.png";
import heart from "../../assets/images/Heart.png";
import star from "../../assets/images/Three Star.png";

function Home() {
  let data = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    },
  ];
  let cards = data.map((product) => (
    <div className="product-card" key={product.id}>
      <div className="product-bg">
        <img className="th" src={product.thumbnail} alt="" />
      </div>
      <img className="heart" src={heart} alt="heart" />
      <img className="eye" src={eye} alt="eye" />
      <button className="product-new">NEW</button>
      <div className="product-content">
        <p className="product-text2">{product.title}</p>
        <p className="product-text2" title={product.description}>
          {product.description}
        </p>
        <div className="prices">
          <p className="product-price">${product.price}</p>
          <img src={star} alt="star" />
          <p className="strock">({product.stock})</p>
        </div>
      </div>
    </div>
  ));
  let data2 = [
    {
      id: 1,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2824_108)">
            <path
              d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6667 7H31.1354"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 44.0052V44.0305"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="15.1667"
              y1="39.8333"
              x2="40.8333"
              y2="39.8333"
              stroke="black"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_2824_108">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "Phone",
    },
    {
      id: 2,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2921_535)">
            <path
              d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.3333 46.6667H39.6667"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 37.3333V46.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 37.3333V46.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 32H48"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2921_535">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "Computers",
    },
    {
      id: 3,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2824_231)">
            <path
              d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 42V49H35V42"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 14V7H35V14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="24"
              y1="23"
              x2="24"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="28"
              y1="28"
              x2="28"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="32"
              y1="26"
              x2="32"
              y2="34"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2824_231">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "SmartWatch",
    },
    {
      id: 4,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2824_252)">
            <path
              d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8416 17.2998 14.9665C18.175 14.0913 18.6667 12.9043 18.6667 11.6666C18.6667 11.0478 18.9125 10.4543 19.3501 10.0167C19.7877 9.57915 20.3812 9.33331 21 9.33331H35C35.6188 9.33331 36.2123 9.57915 36.6499 10.0167C37.0875 10.4543 37.3333 11.0478 37.3333 11.6666C37.3333 12.9043 37.825 14.0913 38.7002 14.9665C39.5753 15.8416 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7001C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4246 47.6332 45.2998C46.758 46.175 45.571 46.6666 44.3333 46.6666H11.6667C10.429 46.6666 9.242 46.175 8.36683 45.2998C7.49167 44.4246 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7001C9.242 16.825 10.429 16.3333 11.6667 16.3333"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4673 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4673 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2824_252">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "Camera",
    },
    {
      id: 5,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2824_261)">
            <path
              d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2824_261">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "HeadPhones",
    },
    {
      id: 6,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2824_923)">
            <path
              d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 28H23.3333M18.6667 23.3333V32.6666"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 25.6667V25.6909"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42 30.3333V30.3574"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2824_923">
              <rect width="56" height="56" />
            </clipPath>
          </defs>
        </svg>
      ),
      p: "HeadPhones",
    },
  ];
  let cards2 = data2.map((v) => (
    <div key={v.id} className="category-card">
      {v.svg}
      <p className="category-card-text">{v.p}</p>
    </div>
  ));
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-style">
              <div className="hero-content">
                <div className="apple-verson">
                  <img src={applelogo} alt="apple-logo" />
                  <p className="apple-text">iPhone 14 Series</p>
                </div>
                <p className="hero-par">Up to 10% off Voucher</p>
                <a href="#" className="hero-a">
                  Shop Now <img src={arrow} alt="arrow-right" />
                </a>
              </div>
              <img className="apl-ph" src={applephone} alt="apple-phone" />
            </div>
          </div>
        </section>
        <section className="category">
          <div className="container">
            <div className="category-title">
              <div className="div1"></div>
              <p className="categories">Categories</p>
            </div>
            <p className="category-text">Browse By Category</p>
            <div className="category-cards">{cards2}</div>
            <hr />
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="product-title">
              <div className="div1"></div>
              <p className="products">Our Products</p>
            </div>
            <div className="product-text-arr">
              <p className="product-text">Explore Our Products</p>
              <img src={frame} alt="Frame" />
            </div>
            <div className="product-cards">{cards}</div>
            <button className="product-btn">View All Products</button>
          </div>
        </section>
        <section className="category-music">
          <div className="container">
            <div className="category-music-style">
              <div className="category-content">
                <p className="music-title">Categories</p>
                <p className="music-text">Enhance Your Music Experience</p>
                <div className="music-data">
                  <div className="hours">
                    <p className="music-hour">
                      <strong>23</strong> Hours
                    </p>
                  </div>
                  <div className="hours">
                    <p className="music-hour">
                      <strong>05</strong> Days
                    </p>
                  </div>
                  <div className="hours">
                    <p className="music-hour">
                      <strong>59</strong> Minutes
                    </p>
                  </div>
                  <div className="hours">
                    <p className="music-hour">
                      <strong>35</strong> Seconds
                    </p>
                  </div>
                </div>
                <button className="music-btn">Buy Now!</button>
              </div>
              <img src={Jbl} alt="jbl" />
            </div>
          </div>
        </section>
        <section className="arrival">
          <div className="container">
            <div className="arrival-title">
              <div className="div1"></div>
              <p className="arrivals">Our Products</p>
            </div>
            <div className="arrival-style">
              <div className="arrival-content">
                <div className="arrival-pars">
                  <p className="arrival-text">PlayStation 5</p>
                  <p className="arrival-par">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a href="#" className="arrival-a">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="arrival-box">
                <div className="arrival-content2">
                  <div className="arrival-pars">
                    <p className="arrival-text">Women’s Collections</p>
                    <p className="arrival-par">
                      Featured woman collections that give you another vibe.
                    </p>
                    <a href="#" className="arrival-a">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="arrival-box2">
                  <div className="arrival-content3">
                    <div className="arrival-pars">
                      <p className="arrival-text">Speakers</p>
                      <p className="arrival-par">Amazon wireless speakers</p>
                      <a href="#" className="arrival-a">
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="arrival-content4">
                    <div className="arrival-pars">
                      <p className="arrival-text">Perfume</p>
                      <p className="arrival-par">GUCCI INTENSE OUD EDP</p>
                      <a href="#" className="arrival-a">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="container">
            <div className="service-cards">
              <div className="service-card">
                <img className="ser1" src={service1} alt="Services" />
                <p className="service-text">FREE AND FAST DELIVERY</p>
                <p className="service-par">
                  Free delivery for all orders over $140
                </p>
              </div>
              <div className="service-card">
                <img className="ser1" src={service2} alt="Services" />
                <p className="service-text">24/7 CUSTOMER SERVICE</p>
                <p className="service-par">Friendly 24/7 customer support</p>
              </div>
              <div className="service-card">
                <img className="ser1" src={service3} alt="Services" />
                <p className="service-text">MONEY BACK GUARANTEE</p>
                <p className="service-par">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
