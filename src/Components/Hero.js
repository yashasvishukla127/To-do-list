import React, { useState } from "react";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <div>
      <h1 className="text-4xl text-white font-bold ">No task available...</h1>;
    </div>
  );
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div className="flex justify-center items-center mt-3">
          <li key={i} className="flex justify-between items-center gap-10 mb-5">
            <div className="flex items-center justify-between text-xl  text-white">
              <div className="flex justify-between items-center gap-96">
                <h5 className="">
                  {i + 1}- Title: {t.title}
                </h5>
                <h6>Description: {t.desc}</h6>
                <button
                  onClick={() => {
                    deleteHandler(i);
                  }}
                  className=" bg-red-500 text-white px-4 py-2 rounded font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        </div>
      );
    });
  }
  return (
    <div className="w-full h-screen py-12  ">
      <div className="flex flex-col justify-center items-center  ">
        <div>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Title"
              className=" border-4 border-white  m-10 p-2 rounded bg-slate-100 text-black"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              className=" border-4 border-white m-10 p-2 rounded bg-slate-100"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button className=" bg-gray-800 px-6 py-2 text-white font-bold text-xl rounded">
              ADD TASK
            </button>
          </form>
        </div>
      </div>

      <div>
        <div className="p-8 bg-gray-700 h-screen mt-24">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
