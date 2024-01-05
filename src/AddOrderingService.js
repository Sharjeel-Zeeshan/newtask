import React, { useState } from 'react';
import ModalComponent from './CreateOrderingService';
import { FiPlus } from "react-icons/fi";
import "./AddOrderingService.css"
import CreateOrderingService from './CreateOrderingService';

const AddOrderingService = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
     
      <button  className="main-button"onClick={openModal}><FiPlus className='icon' /> Add Ordering Service</button>
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} />
       
    </div>
  );
};

export default AddOrderingService;
