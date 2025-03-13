import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import "./Testimonials.css"; // Import your CSS file

const Testimonials = () => {
    const [reviews, setReviews] = useState([
        {
            name: "Ivan",
            company: "XOS Trucks",
            review: "We’ve only recently started working with Event Solutions, and they seriously saved our butts with a last-minute vendor change...",
            img: "https://i.pravatar.cc/100?img=1",
        },
        {
            name: "T.D.",
            company: "Yelp.com",
            review: "I am typically the one that plans all of our company events, and I will say this is one event that I was able to sit back and enjoy...",
            img: "https://i.pravatar.cc/100?img=2",
        },
        {
            name: "Lan",
            company: "Cast & Crew",
            review: "Thank you so much for putting on a spectacular production! Our team is still talking about it, flooding TEAMS channels and emails...",
            img: "https://i.pravatar.cc/100?img=3",
        }
    ]);

    const [newReview, setNewReview] = useState({ name: "", company: "", review: "", img: "" });

    const handleAddReview = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.company && newReview.review) {
            setReviews([...reviews, { ...newReview, img: newReview.img || "https://i.pravatar.cc/100" }]);
            setNewReview({ name: "", company: "", review: "", img: "" });
        }
    };

    return (
        <div id="testimonials" className="review-section">
            <h2 className="title">What Our Clients Say</h2>

            <div className="review-container">
                {reviews.map((testimonial, index) => (
                    <div key={index} className="review-box">
                        <FaQuoteRight className="fa-quote-right" />
                        
                        <div className="user">
                            <img src={testimonial.img} alt={testimonial.name} />
                            <div>
                                <h3>{testimonial.name}</h3>
                                <span>{testimonial.company}</span>
                            </div>
                        </div>

                        <p>{testimonial.review}</p>
                    </div>
                ))}
            </div>

            {/* Add Review Section */}
            <div className="add-review">
                <h3>Add Your Review</h3>
                <form onSubmit={handleAddReview}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Your Company"
                        value={newReview.company}
                        onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Write your review here..."
                        value={newReview.review}
                        onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                        required
                    ></textarea>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Testimonials;
