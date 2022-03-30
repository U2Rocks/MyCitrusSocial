import React from 'react'
import Modal from 'react-modal'
import Deleteform from './forms/Deleteform'

const DeletePostModal = ({ modalState, deleteID, hideModal, deleteIDName }) => {

  return (
    <>
        <Modal className="overflow:hidden mt-[7em]" shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} ariaHideApp={false} isOpen={modalState}>
            <Deleteform ID={deleteID} IDNAME={deleteIDName} hideModalFunction={hideModal}/>
        </Modal>
    </>
  )
}

export default DeletePostModal