import React from "react";

const Product = (props) => {
  const { product, addToCart } = props;
  const { img, name, seller, price, ratings } = product;
  return (
    <div className=" border rounded-md h-[500px] relative">
      <img className="rounded p-2" src={img} alt="img" />
      <div className="p-3">
        <p className="text-[#0E161A] mb-1">{name}</p>
        <p className="text-orange-500 text-xl">Price: ${price} </p>
      </div>
      <div className="absolute bottom-14 p-3 text-[#2A414F]">
        <p>
          <span>Manufacturer : {seller}</span>
        </p>
        <p>
          <span>Rating : {ratings} start</span>
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-orange-200 w-full  py-3 rounded-b-md  absolute bottom-0 hover:bg-orange-400 hover:transition hover:duration-500 hover:text-white flex justify-center items-center"
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Product;
