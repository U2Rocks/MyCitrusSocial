import React, { useRef, useState } from 'react'

const Addpostform = () => {
    const titleRef = useRef()
    const tagRef = useRef()
    const imageRef = useRef()
    const postRef = useRef()

    const [titleValue, setTitleValue] = useState('N/A')
    const [tagValue, setTagValue] = useState('N/A')
    const [imageValue, setImageValue] = useState('N/A')
    const [postValue, setPostValue] = useState('N/A')

    // state variable for error message
    const [errorMsg, setErrorMsg] = useState("")




    const addPost = (e) => {
        // prevent page reload
        e.preventDefault()

        // reset error message
        setErrorMsg("")

  
        // prevent empty entry into database
        if (titleValue === "" || titleValue === "N/A") {
            setErrorMsg("Title field is empty...")
            return
        }
        if (tagValue === "" || tagValue === "N/A") {
            setErrorMsg("Tag field is empty...")
            return
        }
        if (imageValue === "" || imageValue === "N/A") {
            setErrorMsg("Image field is empty...")
            return
        }
        if (postValue === "" || postValue === "N/A") {
            setErrorMsg("Post field is empty...")
            return
        }

        
        // log that function has run
        console.log("%c post added", "color:green")

        // log form input values
        console.group("addpostform values")
        console.log(`%c title: ${titleValue}`, "color: orange")
        console.log(`%c tag: ${tagValue}`, "color: orange")
        console.log(`%c image: ${imageValue}`, "color: orange")
        console.log(`%c post: ${postValue}`, "color: orange")
        console.groupEnd()

        // reset form fields and state values
        setTitleValue('N/A')
        setTagValue('N/A')
        setImageValue('N/A')
        setPostValue('N/A')

        titleRef.current.value = ""
        tagRef.current.value = ""
        imageRef.current.value = ""
        postRef.current.value = ""

        // automatically close form when done adding post...
        // WIP...
    }


  return (
    <>
        <div id="NewPostForm" className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Create New Post</div>
          <form onSubmit={addPost} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            {errorMsg ? <div className="text-[#ff052f] bg-black p-1 rounded-xl">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setTitleValue(event.target.value)} ref={titleRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="titleInput" maxLength={50} placeholder="Title..." />
            <input onChange={(event) => setTagValue(event.target.value)} ref={tagRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="tagInput" maxLength={50} placeholder="Tag Name..." />
            <input onChange={(event) => setImageValue(event.target.value)} ref={imageRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="imageInput" maxLength={50} placeholder="Image URL..." />
            <input onChange={(event) => setPostValue(event.target.value)} ref={postRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="postInput" placeholder="Post Text..." />
            <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Add A Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addpostform