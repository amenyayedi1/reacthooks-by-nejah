import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const AddNewMovie = ({handleAdd}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(1);
    const [date, setDate] = useState("")
    const handleRating=(x)=>setRating(x);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newMovie={
            id:Math.random(),name,image,date,rating
        }
        handleAdd(newMovie)
        closeModal()
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
  
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <div>
        <button onClick={openModal}>Add New Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form >
            <label >Movie Name</label>
            <input type="text"  value={name} onChange={e=>setName(e.target.value)} />
            <label >Movie Image</label>
            <input type="text"  value={image} onChange={e=>setImage(e.target.value)} />
            <StarRating rating={rating} handleRating={handleRating} />
            <label >Movie Date</label>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
            <div>
                <button className="btn" onClick={closeModal} >Cancel</button><button className="btn" onClick={handleSubmit} >  Confirme</button>
            </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewMovie