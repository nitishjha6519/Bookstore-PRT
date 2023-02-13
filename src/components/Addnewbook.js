import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addnewbook = () => {
  const navigate = useNavigate();
  const [bookdetails, setBookdetails] = useState({
    title: "",
    isbn: "",
    description: "",
    author: "",
    published_date: "",
    publisher: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(bookdetails);
    let URL = "http://127.0.0.1:5000/v1/bookdetails/add";
    let tokenCookie = document.cookie;
    let token = tokenCookie.split("token=")[1];
    let Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookdetails),
    };

    fetch(URL, Options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setBookdetails({
            title: "",
            isbn: "",
            description: "",
            author: "",
            published_date: "",
            publisher: "",
          });

          navigate("/bookslist");
        } else {
          alert(`${data.message}`);
        }
      });
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-800">
      <div className="w-96 pt-10">
        <button
          onClick={() => navigate("/bookslist")}
          className="border border-orange-400 text-orange-400 p-2 ml-0 mb-1 hover:bg-orange-400 hover:text-white rounded"
        >
          Show Book List
        </button>

        <h1 className="text-3xl font-normal  text-white mb-4 text-center">
          Add Book
        </h1>

        <p className="text-white font-light mb-2 text-center">
          Create New Book
        </p>
      </div>

      <form className="w-96" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title of the book"
          className="w-full p-2 rounded mb-6"
          name="title"
          value={bookdetails.title}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="ISBN"
          className="w-full p-2 rounded mb-3"
          name="isbn"
          value={bookdetails.isbn}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, isbn: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full p-2 rounded mb-3"
          name="author"
          value={bookdetails.author}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Describe this book"
          className="w-full p-2 rounded mb-3"
          name="description"
          value={bookdetails.description}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, description: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="published_date"
          className="w-full p-2 rounded mb-3"
          name="published_date"
          value={bookdetails.published_date}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, published_date: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Publisher of this Book"
          className="w-full p-2 rounded mb-6"
          name="publisher"
          value={bookdetails.publisher}
          onChange={(e) =>
            setBookdetails({ ...bookdetails, publisher: e.target.value })
          }
        />
        <button className="border border-orange-400 text-orange-400 p-2 w-full  hover:bg-orange-400 hover:text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addnewbook;
