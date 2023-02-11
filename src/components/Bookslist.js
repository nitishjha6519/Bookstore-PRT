import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/download.jpeg";

const Bookslist = () => {
  const [arr, setArr] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    let list = [
      {
        title: "Adventures of Gogo",
        author: "Rajkumar",
        genre: "fantasy",
      },
      {
        title: "One Piece",
        author: "kakashi",
        genre: "Adventure",
      },
      {
        title: "My Hero Academea",
        author: "shinto",
        genre: "Superhero",
      },

      {
        title: "My Hero Academea",
        author: "shinto",
        genre: "Superhero",
      },
      {
        title: "My Hero Academea",
        author: "shinto",
        genre: "Superhero",
      },
      {
        title: "My Hero Academea",
        author: "shinto",
        genre: "Superhero",
      },
    ];
    setArr(list);
  }, []);
  return (
    <div className="w-screen h-screen bg-slate-800">
      <div className="w-4/5  m-auto flex flex-col items-center">
        <h1 className="text-3xl text-white py-4">Books List</h1>

        <button
          className="bg-orange-400 p-2 ml-auto mb-4 hover:bg-orange-500 rounded"
          onClick={() => navigate("/addnewbook")}
        >
          + Add New Book
        </button>

        <div className="grid grid-cols-4">
          {arr.map((item, i) => {
            return (
              <div
                className="w-52 border border-white mr-8 mb-8"
                key={i}
                onClick={() => navigate("/bookdetails")}
              >
                <img
                  className="w-full object-cover h-40"
                  src={image}
                  alt="My Hero Academea"
                />

                <div className="p-4">
                  <h2 className="text-white text-lg"> {item.title}</h2>
                  <p className="text-white text-sm">{item.author}</p>
                  <p className="text-blue-500">{item.genre}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookslist;
