import React from "react";
import "./Modal.css";
const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modalContainer">
        <div className="close-modar-wrapper" onClick={closeModal}>
          <p>X</p>
        </div>
        <div className="inner-modal-wrapper">
          <div className="modalRightside">
            <p>
              It is called legalization or authentication or certification. An
              officer of the ministry certifies the genuineness of the document.
            </p>
            <h3>Requirements</h3>
            <ul>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
            </ul>
          </div>
          <div className="modalLeftside">
            <p>
              It is called legalization or authentication or certification. An
              officer of the ministry certifies the genuineness of the document.
            </p>
            <h3>Requirements</h3>
            <ul>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
              <li>
                Sometimes document should be notarized by a local state level
                notary public – it is optional for certain countries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
