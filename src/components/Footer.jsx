const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white text-center py-4 mt-5">

                <div className="container">

                    <h4>My Website</h4>

                    <p>
                        Welcome to my website.
                        We provide the best services.
                    </p>

                    <div className="mb-3">
                        <a href="#" className="text-white mx-2">
                            Home
                        </a>

                        <a href="#" className="text-white mx-2">
                            About
                        </a>

                        <a href="#" className="text-white mx-2">
                            Services
                        </a>

                        <a href="#" className="text-white mx-2">
                            Contact
                        </a>
                    </div>

                    <hr />

                    <p className="mb-0">
                        © 2026 My Website. All Rights Reserved.
                    </p>

                </div>

            </footer>
        </>
    );
};

export default Footer;