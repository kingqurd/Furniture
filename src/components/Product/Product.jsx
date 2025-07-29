// import ProductCard from "./ProductCard";
import SOFA from "../../assets/images/sofa.jpg";
import ARMCHAIR from "../../assets/images/armchair.jpg";
import COFFEE_TABLE from "../../assets/images/coffee table.jpg"; // Adjust the import path as necessary
import IMG1 from "../../assets/images/IMG-20250727-WA0052.jpg";
import IMG2 from "../../assets/images/IMG-20250727-WA0053.jpg";
import IMG3 from "../../assets/images/IMG-20250727-WA0054.jpg";
import IMG4 from "../../assets/images/IMG-20250727-WA0055.jpg";
import IMG5 from "../../assets/images/IMG-20250727-WA0056.jpg";
import IMG6 from "../../assets/images/IMG-20250727-WA0057.jpg";
import IMG7 from "../../assets/images/IMG-20250727-WA0058.jpg";
import IMG8 from "../../assets/images/IMG-20250727-WA0059.jpg";
import IMG9 from "../../assets/images/IMG-20250727-WA0060.jpg";
import IMG10 from "../../assets/images/IMG-20250727-WA0061.jpg";
import IMG11 from "../../assets/images/IMG-20250727-WA0063.jpg";
import IMG12 from "../../assets/images/IMG-20250727-WA0064.jpg";
import IMG13 from "../../assets/images/IMG-20250727-WA0065.jpg";
import IMG14 from "../../assets/images/IMG-20250727-WA0066.jpg";
import IMG15 from "../../assets/images/IMG-20250727-WA0067.jpg";
import IMG16 from "../../assets/images/IMG-20250727-WA0068.jpg";
import IMG17 from "../../assets/images/IMG-20250727-WA0069.jpg";
import IMG18 from "../../assets/images/IMG-20250727-WA0070.jpg";
import IMG19 from "../../assets/images/images.jpeg";
import IMG20 from "../../assets/images/IMG-20250727-WA0072.jpg";
import IMG21 from "../../assets/images/IMG-20250727-WA0073.jpg";
import IMG22 from "../../assets/images/IMG-20250727-WA0074.jpg";
import IMG23 from "../../assets/images/IMG-20250727-WA0077.jpg";
import IMG24 from "../../assets/images/IMG-20250727-WA0078.jpg";
import IMG25 from "../../assets/images/IMG-20250727-WA0079.jpg";
import IMG26 from "../../assets/images/IMG-20250727-WA0080.jpg";
import cabinet from '../../assets/images/cabimet4.jpeg'
import cabinet2 from '../../assets/images/cabinet.jpeg'
import cabinet3 from '../../assets/images/cabinet2.jpeg'
import cabinet4 from '../../assets/images/cabinet5.jpeg'
import cabinet5 from '../../assets/images/cabinet6.jpeg'
import { useState, useRef } from "react";

const FeaturedProducts = () => {
  const [showItems, setShowItems] = useState(6);
  const [viewMore, setViewMore] = useState(false);
  const containerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Sofa",
      price: "$299",
      originalPrice: "$399",
      image: SOFA,
      category: "Living Room",
    },
    {
      id: 26,
      name: "Mirror",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG23,
      category: "Living Room",
    },
    {
      id: 2,
      name: "Arm Chair",
      price: "$899",
      originalPrice: null,
      image: ARMCHAIR,
      category: "Living Room",
    },
    {
      id: 3,
      name: "Coffee Table",
      price: "$1,299",
      originalPrice: "$1,599",
      image: COFFEE_TABLE,
      category: "Center Table",
    },
    {
      id: 4,
      name: "Floor-standing TV console",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG1,
      category: "Living Room",
    },
    {
      id: 5,
      name: "Upholstered Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG2,
      category: "Bed Room",
    },
    {
      id: 6,
      name: "Wall-mounted TV concole",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG3,
      category: "Living Room",
    },
    {
      id: 31,
      name: "Kitchen Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: cabinet2,
      category: "Kitchen",
    },
    {
      id: 7,
      name: "Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG4,
      category: "Kitchen",
    },
    {
      id: 8,
      name: "L-shape Sofa",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG5,
      category: "Living Room",
    },
    {
      id: 32,
      name: "Full Kitchen Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: cabinet3,
      category: "Kitchen",
    },
    {
      id: 29,
      name: "Mirror",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG26,
      category: "Center Table",
    },
    {
      id: 9,
      name: "Floor-standing TV console",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG6,
      category: "Living Room",
    },
    {
      id: 10,
      name: "Modern Wardrope",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG7,
      category: "Bed Room",
    },
    {
      id: 11,
      name: "Platform Bed Frame ",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG8,
      category: "Bed Room",
    },
    {
      id: 12,
      name: "Wall-mounted TV console",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG9,
      category: "Living Room",
    },
    {
      id: 13,
      name: "Sofa",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG10,
      category: "Living Room ",
    },
    {
      id: 14,
      name: "Floor-standing TV console",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG11,
      category: "Living Room",
    },
    {
      id: 28,
      name: "Mirror",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG25,
      category: "Bed Room",
    },
    {
      id: 15,
      name: "Living Room ",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG12,
      category: "Living Room",
    },
    {
      id: 35,
      name: "Kitchen Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: cabinet,
      category: "Kitchen",
    },
    {
      id: 16,
      name: "Wall-mounted TV console",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG13,
      category: "Living Room",
    },
    {
      id: 17,
      name: "Dinig chair",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG14,
      category: "Dining Room",
    },
    {
      id: 18,
      name: "Storage Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG15,
      category: "Bed Room",
    },
    {
      id: 19,
      name: "Storage Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG16,
      category: "Bed Room",
    },
    {
      id: 20,
      name: "Storage Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG17,
      category: "Bed Room",
    },
    {
      id: 34,
      name: "Kitchen Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: cabinet5,
      category: "Kitchen",
    },
    {
      id: 21,
      name: "Platform Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG18,
      category: "Bed Room",
    },
    {
      id: 22,
      name: "Wall Mirror",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG19,
      category: "Bathroom",
    },
    {
      id: 23,
      name: "Platform Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG20,
      category: "Bed Room",
    },
    {
      id: 24,
      name: "Storage Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG21,
      category: "Bed Room",
    },
    {
      id: 25,
      name: "Storage Bed Frame",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG22,
      category: "Bed Room",
    },
    {
      id: 27,
      name: "Mirror/Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: IMG24,
      category: "Bathroom",
    },
    {
      id: 33,
      name: "Kitchen Cabinet",
      price: "$1,299",
      originalPrice: "$1,599",
      image: cabinet4,
      category: "Kitchen",
    },
  ];

  const phoneNum = "+2349063479592";

  const handleViewMore = () => {
    if (viewMore) {
      setShowItems(6);
      setViewMore(false);
      containerRef.current.scrollIntoView({ behaviour: "smooth" });
    } else {
      setShowItems(products.length);
      setViewMore(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] italic mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-[#111827]">
            Handpicked pieces that define modern living. Each item is carefully
            selected for quality, design, and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, showItems).map((product) => (
            <span
              key={product.id}
              className="group cursor-pointer border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <section className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#111827] italic mb-3">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#111827] italic">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through text-[#111827] italic">
                        {product.originalPrice}
                      </span>
                    )}
                  </div> */}
                  <button
                    onClick={() =>
                      window.open(`https://wa.me/${phoneNum}`, "_blank")
                    }
                    className="opacity-0 group-hover:opacity-100 group-hover:bg-[#111827] w-[30%] h-[2rem] rounded-lg group-hover:text-white transition-opacity duration-300"
                  >
                    Negotiate
                  </button>
                </div>
              </section>
            </span>
          ))}
        </div>

        <div className="text-center mt-12">
          {products.length > 6 && (
            <button
              onClick={handleViewMore}
              className="px-8 py-3 border border-[#111827] text-[#111827] rounded-lg hover:bg-[#111827] hover:text-white transition-colors duration-300 hover:shadow-lg hover:italic "
            >
              {viewMore ? "View Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
