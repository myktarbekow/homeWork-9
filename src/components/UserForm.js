import React from "react";
import { useState } from "react";
import Modal from "./Modal/Modal";
import "../App.css";

function UserForm() {
  const [value, setValue] = React.useState();
  //   const [errors, setError] = React.useState();

  const [inputValue, setInputValue] = React.useState([]);
  const [modalId, setModalId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (e) => setValue(e.target.value);
  const onSubmit = (e) => e.preventDefault();
  const clickHandler = () => {
    if (!value.trim()) return null;

    setInputValue((inputValue) => [
      ...inputValue,
      {
        title: value,
        id: Math.random(),
      },
    ]);
    setValue("");
  };
  function handleDelete(d) {
    const deleted = inputValue.filter((item) => item.id !== d);
    setInputValue(deleted);
    setOpenModal(false);
  }
  const onDelete = (userId) => {
    setModalId(userId);
    setOpenModal(true);
  };
  //   const errorModal = () => {
  //     setError({
  //       title: "Pole ne zapolnen",
  //       titlechik: "zapolnite pj",
  //     });
  //   };

  return (
    <div>
      <form className="Container" onSubmit={onSubmit}>
        <input
          className="Info"
          value={value}
          onChange={changeHandler}
          type="text"
        />
        <button className="Button" onClick={clickHandler}>
          Sent
        </button>
        {inputValue.map((el) => {
          return (
            <div className="container-for-info" key={el.id}>
              <div className="title">{el.title}</div>
              <button className="button2" onClick={() => onDelete(el.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </form>
      <Modal
        handleDelete={handleDelete}
        modalId={modalId}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default UserForm;
