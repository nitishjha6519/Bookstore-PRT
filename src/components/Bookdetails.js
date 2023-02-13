import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Bookdetails = () => {
  const navigate = useNavigate();
  const locateData = useLocation();
  const list = locateData.state.detail;

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-800">
      <div className="w-96 pt-10">
        <button
          className="border border-orange-400 text-orange-400 p-2 ml-0 mb-1 hover:bg-orange-400 hover:text-white rounded"
          onClick={() => navigate("/bookslist")}
        >
          Show Book List
        </button>

        <h1 className="text-3xl font-normal  text-white mb-4 text-center">
          Book's Record
        </h1>

        <p className="text-white font-light mb-2 text-center">
          View Book's Info
        </p>
      </div>

      <div className="w-120">
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">1</p>
          <p className="w-4/12 p-2">Title</p>
          <p className="w-6/12 p-2">{list[0].title}</p>
        </div>
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">2</p>
          <p className="w-4/12 p-2">Author</p>
          <p className="w-6/12 p-2">{list[0].author}</p>
        </div>
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">3</p>
          <p className="w-4/12 p-2">ISBN</p>
          <p className="w-6/12 p-2">{list[0].isbn}</p>
        </div>
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">4</p>
          <p className="w-4/12 p-2">Publisher</p>
          <p className="w-6/12 p-2">{list[0].publisher}</p>
        </div>
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">5</p>
          <p className="w-4/12 p-2">Published Date</p>
          <p className="w-6/12 p-2">{list[0].published_date}</p>
        </div>
        <div className="flex text-white text-sm  bg-black">
          <p className="w-2/12 p-2">6</p>
          <p className="w-4/12 p-2">Description</p>
          <p className="w-6/12 p-2">{list[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
