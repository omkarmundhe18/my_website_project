import React from "react";

// Product Page Component
const Product = () => {

    return (
        <>
            {/* Product Hero Section */}
            <section className="container-fluid bg-dark text-white py-5">
                <div className="container text-center py-4">
                    <h6 className="text-warning fw-bold">OUR MENU</h6>
                    <h1 className="display-4 fw-bold">
                        Explore Our Products
                    </h1>
                    <p className="lead">
                        Delicious food made with love and fresh ingredients.
                    </p>
                </div>
            </section>

            {/* Product Cards Section */}
            <section className="container py-5">

                <div className="text-center mb-5">
                    <h6 className="text-warning fw-bold">OUR SPECIAL MENU</h6>
                    <h2 className="fw-bold">Popular Food Items</h2>
                </div>

                <div className="row g-4">

                    {/* Product Card 1 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/071/195/887/non_2x/delicious-chicken-biryani-with-spiced-rice-garnished-with-lemon-onion-and-coriander-served-in-wooden-bowl-traditional-indian-food-png.png"
                                className="card-img-top"
                                alt="Chicken Biryani"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Chicken Biryani</h4>
                                <p className="text-muted">
                                    Spicy and delicious chicken biryani.
                                </p>
                                <h5 className="text-warning">₹220</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600"
                                className="card-img-top"
                                alt="Paneer Masala"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Paneer Masala</h4>
                                <p className="text-muted">
                                    Fresh paneer with Indian spices.
                                </p>
                                <h5 className="text-warning">₹180</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                                className="card-img-top"
                                alt="Veg Pizza"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Veg Pizza</h4>
                                <p className="text-muted">
                                    Cheesy pizza with fresh toppings.
                                </p>
                                <h5 className="text-warning">₹250</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 4 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
                                className="card-img-top"
                                alt="Burger"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Cheese Burger</h4>
                                <p className="text-muted">
                                    Tasty burger with cheese and vegetables.
                                </p>
                                <h5 className="text-warning">₹150</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 5 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600"
                                className="card-img-top"
                                alt="Dessert"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Chocolate Dessert</h4>
                                <p className="text-muted">
                                    Sweet and delicious chocolate dessert.
                                </p>
                                <h5 className="text-warning">₹120</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 6 */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0">
                            <img
                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
                                className="card-img-top"
                                alt="Salad"
                                style={{ height: "230px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h4>Fresh Salad</h4>
                                <p className="text-muted">
                                    Healthy salad with fresh vegetables.
                                </p>
                                <h5 className="text-warning">₹100</h5>
                                <button className="btn btn-warning">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Product;