import React, { useRef, useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from '../../firebase'

const Addpostform = ({ removeModal, userRef }) => {

    useEffect(()=>{
        console.log("%c addpostform loaded...", "color: green")
    }, [])

    // reference collection
    const postsRef = collection(db, "CitrusPosts")

    // handle textarea changes
    const handleAreaChange = (event) => {
        setPostValue(event.target.value)
    }

    // function to create object in two different ways depending on if image(or something visual) is provided
    const addPostToDB = async () => {
        if (imageValue === "No Image"){
            try {
                await addDoc(postsRef, {
                    timestamp: serverTimestamp(),
                    title: titleValue,
                    tag: tagValue,
                    text: postValue,
                    user: userRef.email
                })
                } catch(error) {
                    console.error(`document ${titleValue} not added to database`)
                }
        } else {
        try {
        await addDoc(postsRef, {
            timestamp: serverTimestamp(),
            title: titleValue,
            tag: tagValue,
            text: postValue,
            image: imageValue,
            user: userRef.email
        })
        } catch(error) {
            console.error(`document ${titleValue} not added to database`)
        }
    }
    }


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
        // does not work and imagevalue in object set to N/A(but program still functions)
        if (imageValue === "" || imageValue === "N/A") {
            setImageValue("No Image")
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

        // add document to server
        addPostToDB()

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
        removeModal()
    }


  return (
    <>
        <div id="NewPostForm" className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-5/6">
          <button className=" drop-shadow-lg border-2 border-white m-1 p-4 pt-2 pb-2 bg-[#ff052f] rounded-full" onClick={removeModal}>&#88;</button>
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Create A New Post</div>
          <form onSubmit={addPost} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            {errorMsg ? <div className="text-black bg-error-bg p-1 rounded-xl">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setTitleValue(event.target.value)} ref={titleRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="titleInput" maxLength={50} placeholder="Title..." />
            <input onChange={(event) => setTagValue(event.target.value)} ref={tagRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="tagInput" maxLength={50} placeholder="Tag Name..." />
            <input onChange={(event) => setImageValue(event.target.value)} ref={imageRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="imageInput" maxLength={50} placeholder="Image URL(Optional)..." />
            <textarea onChange={handleAreaChange} ref={postRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="postInput" placeholder="Post Text..." maxLength={500}></textarea>
            <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Add A Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addpostform