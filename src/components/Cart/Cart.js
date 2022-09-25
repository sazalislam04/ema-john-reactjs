import React from "react";

const Cart = (props) => {
  return (
    <>
      <div className="bg-orange-100 shadow-2xl rounded h-[500px] sticky top-0">
        <h1 className="text-[#1C2B35] text-center mt-5 text-2xl">
          Order Summary
        </h1>
        <div className="text-[#2A414F] mt-4 p-5">
          <p className="mb-4">Selected Items: {props.cart.length}</p>
          <p className="mb-4">Total Price: $0</p>
          <p className="mb-4">Total Shipping Charge: $0</p>
          <p>Tax: $0</p>
        </div>
        <div className="text-[#0E161A] text-xl text-center mt-5 mb-5">
          Grand Total: $0
        </div>
        <div className="absolute bottom-10 w-full">
          <button className="bg-[#FF3030] block w-[232px] h-[48px] mx-auto text-xl text-white rounded mb-5 hover:bg-red-400 hover:transition duration-300">
            Clear Cart
          </button>
          <button className="bg-[#FF9900] block w-[232px] h-[48px] mx-auto text-xl text-white rounded hover:bg-orange-400 hover:transition duration-300">
            Review Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
