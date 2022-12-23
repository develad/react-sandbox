import React, { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(123);
    // console.log(inputRef.current.classList.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Goodbay";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          className="form-control mb-4 w-25"
          id="Name"
        />
        <button
          type="submit"
          className="btn btn-primary w-25"
        >
          Submit
        </button>
        <p
          ref={paraRef}
          onClick={() => inputRef.current.focus()}
        >
          Hello
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
