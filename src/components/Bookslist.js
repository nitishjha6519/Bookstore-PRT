import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/download.jpeg";

const Bookslist = () => {
  const [arr, setArr] = useState([]);
  const [modal, setModal] = useState(false);

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
    <>
      <div className="w-full  bg-slate-800">
        <div className="p-4 px-20 bg-slate-50">
          <p
            onClick={() => setModal(true)}
            className="ml-auto w-24 text-lg px-6 rounded hover:bg-gray-200"
          >
            Logout
          </p>
        </div>

        <div className="w-4/5  m-auto flex flex-col items-center">
          <h1 className="text-3xl text-white py-4">Books List</h1>

          <button
            className="bg-orange-400 p-2 ml-auto mb-4 hover:bg-orange-500 rounded"
            onClick={() => navigate("/addnewbook")}
          >
            + Add New Book
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

        {modal ? (
          <div className="w-full h-full absolute top-0 left-0">
            {/* after:content-none after:absolute  after:top-0 after:left-0 after:bg-gradient-to-r after:from-gray-400 after:to-gray-400 after:opacity-70 z-10 */}
            <div className="w-full h-full  flex justify-center items-center backdrop-brightness-50">
              <div className="w-120 bg-white flex px-6 py-8  rounded-md flex-col">
                <p className=" w-full text-center text-3xl text-red-500 font-medium mb-8 ">
                  Are you sure ?
                </p>

                <div className=" m-auto">
                  <button
                    onClick={() => setModal(false)}
                    className=" bg-gray-400 py-2 px-8 hover:bg-gray-500 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      document.cookie =
                        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                      navigate("/");
                    }}
                    className="bg-red-400 py-2 px-8  hover:bg-red-500 rounded ml-2 mb-4"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Bookslist;
