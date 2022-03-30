import React from 'react'
import Filterpostsform from './forms/Filterpostsform'
import Modal from 'react-modal'

const FilterPostsModal = ({ FilterValue, removeModal, modalState, changeFilterFunction, resetTag }) => {
    // pass down function to change filter state on home
    // pass down status of state to show filter modal
    // pass down value of filter currently



  return (
    <>
    <Modal className="overflow:hidden mt-[7em]" shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true} ariaHideApp={false} isOpen={modalState}>
            <Filterpostsform filterValue={FilterValue} removeModal={removeModal} changeFilterFun={changeFilterFunction} resetTagFunction={resetTag}/>
    </Modal>
    </>
  )
}

export default FilterPostsModal