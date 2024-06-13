import React from "react";
import "./Modal.css";
const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modalContainer">
        <div className="close-modar-wrapper" onClick={closeModal}>
          <p>X</p>
        </div>
        <div className="inner-modal-wrapper">
          {/* <div className="modalRightside">
            <p>
              It is called legalization or authentication or certification. An
              officer of the ministry certifies the genuineness of the document.
            </p>
            <h3>Requirements</h3>
            <ul className="require-list">
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
            <div>
              <h3>Processes</h3>
              <ul className="require-list">
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
          </div> */}
          <div className="modalLeftside">
            <h3>Cost breakdown</h3>
            <ul className="require-list">
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
            <div className="payment-milestone-wrapper">
              <table className="milestone-table">
                <tr>
                  <th>Payment milestone</th>
                  <th>Charges</th>
                </tr>
                <tr>
                  <td>Expedited Fees @Ministry of Education</td>
                  <td>$64.76</td>
                </tr>
                <tr>
                  <td>Expedited Processing @Ministry of Foreign Affairs (1)</td>
                  <td>$25.90</td>
                </tr>
                <tr>
                  <td>Service Charge Helpmewaka</td>
                  <td>$199.96</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$290.62</td>
                </tr>
              </table>
              {/* <ul className="require-list">
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
