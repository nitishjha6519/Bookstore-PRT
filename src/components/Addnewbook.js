import React from "react";

const Addnewbook = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-800">
      <div className="w-96 pt-10">
        <button className="border border-orange-400 text-orange-400 p-2 ml-0 mb-1 hover:bg-orange-400 hover:text-white rounded">
          Show Book List
        </button>

        <h1 className="text-3xl font-normal  text-white mb-4 text-center">
          Add Book
        </h1>

        <p className="text-white font-light mb-2 text-center">
          Create New Book
        </p>
      </div>

      <form className="w-96">
        <input
          type="text"
          placeholder="Title of the book"
          className="w-full p-2 rounded mb-6"
        />
        <input
          type="text"
          placeholder="ISBN"
          className="w-full p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Describe this book"
          className="w-full p-2 rounded mb-3"
        />
        <input
          type="date"
          placeholder="published_date"
          className="w-full p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Publisher of this Book"
          className="w-full p-2 rounded mb-6"
        />
        <button className="border border-orange-400 text-orange-400 p-2 w-full  hover:bg-orange-400 hover:text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addnewbook;
