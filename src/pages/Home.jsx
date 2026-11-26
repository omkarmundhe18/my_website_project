import React from "react";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <section>
        {/* Full Width About Section */}
<section className="container-fluid bg-light py-5">
  <div className="row justify-content-center text-center">
    <div className="col-12 px-4">

      <h6 className="text-warning fw-bold">
        ABOUT OUR RESTAURANT
      </h6>

      <h1 className="fw-bold mb-4">
        Welcome To Our Restaurant
      </h1>

      <p className="text-muted mx-auto" style={{ maxWidth: "900px" }}>
        We serve delicious food prepared with fresh
        ingredients and passion. Our restaurant offers
        a comfortable atmosphere and excellent service
        for every guest.
      </p>

      <p className="text-muted mx-auto" style={{ maxWidth: "900px" }}>
        Enjoy memorable moments with your family and
        friends with our special dishes and hospitality.
      </p>

      <button className="btn btn-warning px-5 mt-3">
        Read More
      </button>

    </div>
  </div>
</section>
{/* Our Popular Dishes Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-warning fw-bold">OUR MENU</h6>
          <h1 className="fw-bold">Our Popular Dishes</h1>
          <p className="text-muted">
            Taste our delicious and special food items.
          </p>
        </div>

        <div className="row g-4">

          {/* Product Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src="https://static.vecteezy.com/system/resources/previews/071/195/887/non_2x/delicious-chicken-biryani-with-spiced-rice-garnished-with-lemon-onion-and-coriander-served-in-wooden-bowl-traditional-indian-food-png.png"
                className="card-img-top"
                alt="Chicken Biryani"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title">Chicken Biryani</h4>
                <p className="card-text text-muted">
                  Delicious and spicy chicken biryani.
                </p>
                <h5 className="text-warning">₹220</h5>
                <button className="btn btn-warning">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600"
                className="card-img-top"
                alt="Paneer Masala"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title">Paneer Masala</h4>
                <p className="card-text text-muted">
                  Fresh paneer with rich Indian spices.
                </p>
                <h5 className="text-warning">₹180</h5>
                <button className="btn btn-warning">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                className="card-img-top"
                alt="Pizza"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title">Veg Pizza</h4>
                <p className="card-text text-muted">
                  Cheesy pizza with fresh toppings.
                </p>
                <h5 className="text-warning">₹250</h5>
                <button className="btn btn-warning">
                  Order Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      </section>
    </>
  );
};

export default Home;