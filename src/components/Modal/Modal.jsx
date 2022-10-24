import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ setOpenModal, openModal, handleDelete, modalId }) {
  return ReactDOM.createPortal(
    <div className={openModal ? "modal active" : "modal"}>
      <div
        className={openModal ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>Do you really want to delete?</div>
        <button className="yes" onClick={() => handleDelete(modalId)}>Yes</button>
        <button className="no" onClick={() => setOpenModal(false)}>No</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
export default Modal;
