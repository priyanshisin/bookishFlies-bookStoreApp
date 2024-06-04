import React from "react";


function Cards({ item }) {

  return (
    <>
      {/* <a href="../public/It-ends-with-us.pdf" target="_blank"> */}
        <div className="mt-4 my-3 p-3">
              <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
                <figure>
                  <img src={item.image} alt="Not found"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                  {item.title}
                    <div className="badge badge-secondary">{item.category}</div>
                  </h2>
                  <p>{item.name}</p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
        </div>
      {/* </a> */}
    </>
  );
}

export default Cards;
