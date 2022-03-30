import React from 'react'
import { db } from '../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

const Deleteform = ({ ID, hideModalFunction, IDNAME }) => {

    const onNo = () => {
        // nothing happens and modal is closed(etc.)
        console.log("No")
        hideModalFunction()
    }

    const onYes = () => {
        console.log("Yes")
        deleteDocWithID()
    }

    const deleteDocWithID = async () => {
        // delete document by calling the reference with doc function in deleteDoc
        console.log("deleteDoc called...")
        await deleteDoc(doc(db, "CitrusPosts", ID))
        await hideModalFunction()
    }



  return (
    <>
      <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4 text-center bg-light-g p-2 rounded-lg">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Do you want to delete "{IDNAME}"?</div>
            <button onClick={onYes} className="hover:font-bold text-black bg-[#cf3b13] hover:bg-[#ff3700] hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl m-2 mr-4">Yes</button>
            <button onClick={onNo} className="hover:font-bold text-black bg-formblue hover:bg-darkformblue hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl m-2 mr-4">No</button>
        </div>
      </div>
    </>
  )
}

export default Deleteform