import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: end;
`;
const Forms = styled.form`
  width: 100%;
  height: 100vh;

  background-image: url(https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserInfo = styled.div`
  width: 300px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  left: 125vh;
`;
const Button = styled.button`
  background-color: red;
  height: 31px;
  width: 5%;
  border: none;
  border-radius: 0 5px 5px 0;
  margin-right: 100px;
`;

const Input = styled.input`
  width: 20%;
  height: 30px;
  color: red;
  outline: none;
  border: none;
  border-radius: 5px 0 0 5px;
`;

function Form(props) {
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState([
    { id: 1, title: "Cristiano Ronaldo" },
  ]);

  const ChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    if (value.trim().length > 0) {
      return (
        setInputValue([
          ...inputValue,

          {
            title: value,
            id: Math.random(),
          },
        ]),
        setValue("")
      );
    }
  };
  const clickDelete = (id) => {
    const deleteItem = inputValue.filter((item) => item.id !== id);
    setInputValue(deleteItem);
  };
  return (
    <Div>
      <Forms onSubmit={submitHandler}>
        <Input type="text" value={value} onChange={ChangeHandler} />
        <Button onClick={clickHandler}>push</Button>
        <p>{props.title}</p>
        {inputValue.map((el) => (
          <UserInfo key={el.id}>
            <p> {el.title} </p>
            {""}
            <p>{}</p>
            <button onClick={() => clickDelete(el.id)}>X</button>
          </UserInfo>
        ))}
      </Forms>
    </Div>
  );
}

export default Form;
