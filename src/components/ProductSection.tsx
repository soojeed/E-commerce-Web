import type React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

interface PropsType {
  img: string;
  name: string;
  price: string;
}

const ProductSection: React.FC<PropsType> = ({ img, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          -10%
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        
        {/* Rating */}
        <div className="flex text-yellow-400 text-lg">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-lg">{name}</h3>

        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            {price}
          </span>

          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition">
            <AiOutlineShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;