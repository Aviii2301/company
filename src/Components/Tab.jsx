import React, { useState } from 'react';
import '../App.css';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {content}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button modal-close">Close</button>
          
        </div>
      </div>
    </div>
  );
};

const Tab = () => {
  const [modalContent, setModalContent] = useState(null);

  function openModal() {
    const content = (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fugiat ullam eaque aspernatur assumenda numquam accusamus quae deleniti error ducimus incidunt, soluta repellendus officia cum ab inventore officiis nihil, esse suscipit temporibus ratione. Dolor odit provident praesentium architecto illum! Quo.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo, reiciendis rerum iure expedita dolores! Laborum esse dolor quibusdam cum ipsum? Minima aliquam ipsum architecto nobis, rerum maxime animi autem.
        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, accusamus. Quia assumenda reiciendis veritatis autem, accusamus rerum ipsum laboriosam expedita maxime nam. Deleniti exercitationem cupiditate nobis rem aliquam. Totam asperiores officia dolore aspernatur quae. Vitae?
        </p>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. In soluta mollitia, asperiores cum facere praesentium veniam vitae placeat quo repellat?
        </p>
      </>
    );
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <div className="container">
      <button onClick={openModal} className="button">TAB 1</button>
      <button onClick={openModal} className="button">TAB 2</button>

      {modalContent && <Modal title="Hello" content={modalContent} onClose={closeModal} />}
    </div>
  );
};

export default Tab;