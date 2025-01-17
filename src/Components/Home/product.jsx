
import React from 'react';
import "../../styles/Home/homeproduct.css";

import Firstproduct from "../../assets/Home/scruu.png";
import Secondproduct from "../../assets/Home/inspire.png";
import Thirdproduct from "../../assets/Home/happens.png";
import Fourthproduct from "../../assets/Home/honors.png";

// ProductCard Component
const ProductCard = ({ title, message, image }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={title} />
    </div>
    <div className="product-content first_product_cart">
      <h2 className="product-title">{title}</h2>
      <p className="product-message">{message}</p>
    </div>
  </div>
);
const ProductCards = ({ title, message, image }) => (
  <div className="product-card">
    <div className="product-content">
      <h2 className="product-title">{title}</h2>
      <p className="product-message">{message}</p>
    </div>
    <div className="product-image second_product_cart">
      <img src={image} alt={title} />
    </div>
  </div>
);

function HomeProduct() {
  return (
    <div className="product-container ">
      {/* First Card */}
      <ProductCard
        title="What Drives Us"
        message="Born from the need to provide high-quality investment castings, Rudra Castings has become a trusted name in the global steel castings market. In a fiercely competitive industry, we are committed to exceeding expectations, constantly refining our processes to deliver excellence in every product."
        image={Firstproduct}
      />
      
      {/* Third Card */}
      <ProductCards
        title="What Inspires Us"
        message="Fueled by a relentless commitment to perfection and backed by years of expertise, we continue to shape a future defined by quality and precision. Our state-of-the-art manufacturing facilities in India operate round-the-clock, ensuring we deliver top-quality products that meet even the tightest deadlines with precision and reliability."
        image={Secondproduct}
      />
      {/* Second Card */}
      <ProductCard
        title="Where It Happens"
        message="Spanning over 75,000 sq. ft. and ISO-certified, our facilities are designed to exceed industry standards and accommodate future expansions as demand grows. We take pride in our commitment to quality, continually refining our processes to remain a leader in the investment castings industry."
        image={Thirdproduct}
      />
      
      
      {/* Fourth Card */}
      <ProductCards
        title="Honors We Hold"
        message="Our dedication to excellence has earned us prestigious industry awards, highlighting the strength of our processes and the high standards we uphold in both product quality and service."
        image={Fourthproduct}
      />
    </div>
  );
}

export default HomeProduct;
