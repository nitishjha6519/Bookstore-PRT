import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bookdetails = () => {
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const list = [
      {
        title: "The Hunger Games",
        isbn: "123456",
        publisher: "No one",
        published_date: "2022-05-01",
        description: "Popular",
      },
    ];
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-800">
      <div className="w-96 pt-10">
        <button
          className="border border-orange-400 text-orange-400 p-2 ml-0 mb-1 hover:bg-orange-400 hover:text-white rounded"
          onClick={() => navigate("/booklist")}
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

      <div className="w-96">
        <div className="flex text-white text-sm border border-white bg-black">
          <p className="w-2/12 border">1</p>
          <p className="w-4/12">Title</p>
          <p>Hunger Games</p>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
