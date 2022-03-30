import React, { useEffect } from 'react'
import Modal from 'react-modal'
import Addpostform from './forms/Addpostform'

const AddPostModal = ({ removeModal, modalState, userVar }) => {

  useEffect(() => {
    console.log("%c addpostmodal loaded...", "color: green")
  }, [])

    // outer button will handle toggling modal on
    // button in modal or maybe div will toggle modal off...

    // pass down function that turns off modal...

  return (
    <>
        <Modal className="overflow:hidden mt-[7em]" shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} ariaHideApp={false} isOpen={modalState}>
            <Addpostform userRef={userVar} removeModal={removeModal}/>
        </Modal>

    </>
  )
}

export default AddPostModal