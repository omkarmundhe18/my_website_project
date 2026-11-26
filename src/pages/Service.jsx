import React from "react";

// Services Page Component
const Service = () => {
    return (
        <>
            {/* Services Hero Section */}
            <section className="container-fluid bg-dark text-white py-5">
                <div className="container text-center py-4">
                    <h6 className="text-warning fw-bold">OUR SERVICES</h6>
                    <h1 className="display-4 fw-bold">
                        What We Offer
                    </h1>
                    <p className="lead">
                        We provide the best services for our customers.
                    </p>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="container py-5">
                <div className="text-center mb-5">
                    <h6 className="text-warning fw-bold">
                        OUR SPECIAL SERVICES
                    </h6>
                    <h2 className="fw-bold">
                        Explore Our Services
                    </h2>
                </div>

                <div className="row g-4">

                    {/* Service Card 1 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
                                className="card-img-top"
                                alt="Dine In"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Dine-In Service</h4>
                                <p className="text-muted">
                                    Enjoy delicious food in our comfortable
                                    restaurant atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=600"
                                className="card-img-top"
                                alt="Food Delivery"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Food Delivery</h4>
                                <p className="text-muted">
                                    Get your favourite food delivered
                                    fresh to your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600"
                                className="card-img-top"
                                alt="Takeaway"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Takeaway Service</h4>
                                <p className="text-muted">
                                    Order your food and enjoy it
                                    wherever you want.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 4 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600"
                                className="card-img-top"
                                alt="Party Events"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Party & Events</h4>
                                <p className="text-muted">
                                    Celebrate birthdays and special
                                    occasions with us.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 5 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600"
                                className="card-img-top"
                                alt="Catering"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Catering Service</h4>
                                <p className="text-muted">
                                    Delicious food arrangements for
                                    your special events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 6 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow h-100">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
                                className="card-img-top"
                                alt="Table Reservation"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center p-4">
                                <h4>Table Reservation</h4>
                                <p className="text-muted">
                                    Reserve your favourite table
                                    for a wonderful dining experience.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Service;