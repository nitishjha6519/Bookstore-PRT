import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/download.jpeg";

const Bookslist = () => {
  const [arr, setArr] = useState([]);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let tokenCookie = document.cookie;
    let token = tokenCookie.split("token=")[1];
    fetch("http://127.0.0.1:5000/v1/bookdetails/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let list = data.books;
        setArr(list);
      });
  }, []);

  const handleDetail = (e) => {
    let bookid = e.target.alt;
    let tokenCookie = document.cookie;
    let token = tokenCookie.split("token=")[1];
    fetch(`http://127.0.0.1:5000/v1/bookdetails/${bookid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        let detail = data.book;
        navigate("/bookdetails", { state: { detail } });
      });
  };

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
              <div className="w-52 border border-white mr-8 mb-8" key={i}>
                <img
                  className="w-full object-cover h-40"
                  src={image}
                  alt={item.isbn}
                  onClick={handleDetail}
                />

                <div className="p-4">
                  <h2 className="text-white text-lg"> {item.title}</h2>
                  <p className="text-white text-sm">{item.author}</p>
                  <p className="text-blue-500">Popular</p>
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
