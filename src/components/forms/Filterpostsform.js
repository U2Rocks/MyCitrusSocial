import React, { useState, useRef, useEffect } from 'react'

const Filterpostsform = ({ filterValue, removeModal, changeFilterFun, resetTagFunction }) => {

    // ref and state for input on filtering form
    const [filterFormValue, setFilterFormValue] = useState("")
    const filterRef = useRef()

    // state variable to hold error msgs
    const [errorMsg, setErrorMsg] = useState("")

    // on load of the filter function reset the filter
    useEffect(() => {
      resetTagFunction()
    }, [])

    const changeFilter = (e) => {
        // prevent page reload
        e.preventDefault()

        // reset error message
        setErrorMsg("")

        // prevent empty form submission
        if (filterFormValue === "" || filterFormValue === "N/A") {return}

        // check if tag exists in database?????
        // query server to make sure tag exists and set new error if needed

        // do something
        console.log("Change Filter in home to...")
        console.log(filterFormValue)

        // change the filter
        changeFilterFun(filterFormValue)

        // reset state and ref
        setFilterFormValue("")
        filterRef.current.value = ""

        // unmount the component on a successful filter
        removeModal()
    }

    // error msg conditional if needed later {errorMsg ? <div className="text-black bg-error-bg p-1 rounded-xl">{errorMsg}</div> : <div></div>}


    return (
        <>
            <div id="NewPostForm" className="flex flex-col items-center drop-shadow-sm mt-6">
            <div className="w-5/6">
              <button className=" drop-shadow-lg border-2 border-white m-1 p-4 pt-2 pb-2 bg-[#ff052f] rounded-full" onClick={removeModal}>&#88;</button>
              <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Filter Posts</div>
              <form onSubmit={changeFilter} className="flex flex-col gap-4 items-center p-4 bg-light-g">
                <input onChange={(event) => setFilterFormValue(event.target.value)} ref={filterRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="titleInput" maxLength={50} placeholder="Enter a Tag..." />
                <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Apply Filter</button>
              </form>
            </div>
          </div>
        </>
      )
}

export default Filterpostsform