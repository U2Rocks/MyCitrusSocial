import React from 'react'
import Modal from 'react-modal'
import Addpostform from './forms/Addpostform'

const AddPostModal = ({ removeModal, modalState }) => {

    // outer button will handle toggling modal on
    // button in modal or maybe div will toggle modal off...

    // pass down function that turns off modal...

  return (
    <>
        <Modal isOpen={modalState}>
            <button onClick={removeModal}>&89;</button>
            <Addpostform />
        </Modal>

    </>
  )
}

export default AddPostModal