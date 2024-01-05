import { React, useState } from 'react';
import Modal from 'react-modal';
import "./CreateOrderingService.css"
import AdvancedConfigurations from "./AdvancedConfigurations"
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios"


const CreateOrderingService = ({ isOpen, closeModal }) => {
    const initialData = {
        organizationName: "",
        numberOfNodes: "",
        channelName: "",
        domain: ""
    }
    const [formData, setFormData] = useState(initialData)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        axios.post("http://dummyapi/form",formData)
        .then((response)=>console.log(response))
        .then((error)=>console.error(error))

    }
    const handleButtonClick = () => {
        setShowForm(true);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >

            <div>
                <button onClick={closeModal} className="close" >
                    &#10006;   {/*cross mark code */}
                </button>

            </div>
            <div className='Container'>

                <h4>Create Ordering Service</h4>
                <form onSubmit={handleSubmit}>


                    <label>
                        Organization Name
                        <span className="asterisk">*</span>
                        <input
                            type="text"
                            name="organizationName"
                            value={formData.organizationName}
                            placeholder="Organization Name 1"
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        No. of Ordering Nodes
                        <span className="asterisk">*</span>
                        <input
                            type="text"
                            name="numberOfNodes"
                            value={formData.numberOfNodes}
                            placeholder="Organization Name 1"
                            onChange={handleInputChange}
                            required
                        />
                    </label>

                    <label>
                        Channel Name(Optional)
                        <input
                            type="text"
                            name="channelName"
                            value={formData.channelName}
                            placeholder="Organization Name 1"
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Domain
                        <span className="asterisk">*</span>
                        <input
                            type="text"
                            name="domain"
                            value={formData.domain}
                            placeholder="Organization Name 1"
                            onChange={handleInputChange}
                            required
                        />

                    </label>

                    <label>
                        Advanced Configurations:
                        <IoIosArrowDown onClick={handleButtonClick} />
                        {showForm && <AdvancedConfigurations />}
                    </label>

                </form>
                <div className='btn'>
                    <button className="btn-cancel" type="button">Cancel</button>
                    <button className="btn-submit" type="submit">Submit</button>
                </div>
            </div>
        </Modal>
       
    );
};

export default CreateOrderingService;
