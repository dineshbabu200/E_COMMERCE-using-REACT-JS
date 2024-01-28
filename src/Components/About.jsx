import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            
Welcome to E-Commerce, where shopping meets satisfaction. Established with a passion for delivering an exceptional online shopping experience, E-commerce is your go-to destination for quality products and seamless service. Our journey began with a vision to redefine the way you shop, offering a curated selection of Clothing that reflects style, functionality, and affordability. At E-Commerce, we prioritize your needs, providing a user-friendly platform that ensures a hassle-free browsing and purchasing journey. Our commitment to excellence extends beyond products to customer service, promising timely deliveries, easy returns, and a dedicated support team ready to assist you. Join us on this digital shopping adventure, where we aim to make every click count, and each purchase tells a story of quality and satisfaction. Thank you for choosing E-Commerce your trusted destination for all things Clothing. Happy shopping!
                            </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/Images/About.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About