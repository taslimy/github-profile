import React from "react";

const Form = props => {
  console.log(props);
  return (
    <>
      <form onSubmit={props.loadUser}>
        <input type="text" placeholder="enter your username" name="name" />
      </form>
      <button onClick={props.loadUser}>Fetch yo data</button>
    </>
  );
};

export default Form;
