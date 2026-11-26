import React from "react";

// Contact Page Component
const Contact = () => {
    return (
        <>
            {/* Contact Hero Section */}
            <section className="container-fluid bg-dark text-white py-5">
                <div className="container text-center py-4">
                    <h6 className="text-warning fw-bold">CONTACT US</h6>
                    <h1 className="display-4 fw-bold">Get In Touch</h1>
                    <p className="lead">
                        We would love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Form and Details */}
            <section className="container py-5">
                <div className="row g-4">

                    {/* Contact Information */}
                    <div className="col-md-5">
                        <h3 className="fw-bold mb-4">Contact Information</h3>

                        <div className="card border-0 shadow p-4">
                            <h5 className="text-warning">Our Address</h5>
                            <p className="text-muted">
                                Your Restaurant Address, Pune, Maharashtra
                            </p>

                            <hr />

                            <h5 className="text-warning">Email Address</h5>
                            <p>info@example.com</p>

                            <hr />

                            <h5 className="text-warning">Phone Number</h5>
                            <p>9876543210</p>

                            <hr />

                            <h5 className="text-warning">Opening Hours</h5>
                            <p>Monday - Sunday: 10 AM - 11 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7">
                        <h3 className="fw-bold mb-4">Send Us A Message</h3>

                        <div className="card border-0 shadow p-4">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter subject"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Write your message..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning px-5"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* Google Map Section */}
            <section className="container pb-5">
                <h2 className="fw-bold text-center mb-4">
                    Find Our Location
                </h2>

                <div className="ratio ratio-21x9 shadow rounded overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                        title="Restaurant Location"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;