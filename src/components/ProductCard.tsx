import type React from "react";
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
import { useCartContext } from "../context/CardContext";

interface PropsType {
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({ img, name, price }) => {

const {addToCart} = useCartContext();
const addProductToCart = () => {
    // toast.succes("Added to Cart");
    addToCart({img, name , price})

}

  return (
    <div
      className="border border-gray-200 hover:border-gray-400 hover:scale-105 
      transition-transform rounded-lg relative bg-white"
    >
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={img}
        alt={name}
      />

      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">{price}</h3>

        <button
          className="absolute -top-4 right-2 bg-green-500 text-white text-[22px] 
          w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer" onClick={addProductToCart}
        >
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;