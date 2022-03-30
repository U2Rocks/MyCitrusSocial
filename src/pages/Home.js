import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import AddPostModal from '../components/AddPostModal'
import FilterPostsModal from '../components/FilterPostsModal';
import DeletePostModal from '../components/DeletePostModal';
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, collection, query, orderBy, limit } from "firebase/firestore"
import { db } from '../firebase'
import { useOutletContext } from "react-router-dom"

const Home = () => {

  // filtering modal logic -> form pops up on button click -> user enters text -> user clicks button ->
  // function runs that changes searchTag state -> reload page????

  // state variable to hold latest postID to be deleted
  const [postToDeleteID, setPostToDeleteId] = useState("")
  // state variable to hold name of postID to be deleted
  const [nameOfPostToDelete, setNameOfPostToDelete] = useState("")
  
  // const variable to hold tag in case of user filtering
  const [postSearchTag, setPostSearchTag] = useState("")

  // state variable to hold list of document data
  const [docList, setDocList] = useState([])
 
  // ref to firebase collection
  const postsRef = collection(db, "CitrusPosts")
  // ref to query to get database items -> add conditional to make query filter is filter is truthy
  const firebaseQuery = query(postsRef, orderBy("timestamp", "desc"), limit(50))

  // function to get data -> FIND WAY TO CLEANLY UNSUBSCRIBE LATER
  const getData = () => {
    console.log("<------get data called------>")
    return onSnapshot(
      firebaseQuery, (querySnapshot) => {
      const posts = []
      querySnapshot.forEach((doc) => {
        posts.push({...doc.data(), id: doc.id})
      })
      console.log(posts)
      console.log("<------before doclist------>")
      setDocList(posts)
      console.log("<------after doclist------>")
      // setLoader(false)
    })
  }

  // const to hold logged in user information based on parent context
  const [user, setUser] = useOutletContext()

  // useEffect hook manages auth state and gets data from backend
  useEffect( () => {
    console.log("<------useEffect Start------>")
    console.log("%c home loaded...", "color: green")
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    getData() // run function to change data
    const unsubscribe = getData() // unsubcribe is given function to remove listeners...
    console.log("<------useEffect End------>")

    return unsubscribe()
  }, [])

  // see if user logged in or not via user object
  const isLoggedin = user ? true : false

  // set if modal is visible to user
  const [modalVisible, setModalVisible] = useState(false)

  // functions that toggle the visibility of the modal
  const toggleModalOn = () => {
        setModalVisible(true)
    }
  const toggleModalOff = () => {
        setModalVisible(false)
    }

  // set new tag value
  const setNewFilter = (tagName) => {
    setPostSearchTag(tagName)
    console.log("new tagName: ", tagName)
  }  

  // set if filtering modal is visible to the user
  const [filterModalVisible, setFilterModalVisible] = useState(false)

  // functions that toogle the visibility of the filtering form
  const toggleFilterModalOn = () => {
    if (filterModalVisible === true){return}
    setFilterModalVisible(true)
    console.log("%c filter modal on", "color:purple")
  }
  const toggleFilterModalOff = () => {
    setFilterModalVisible(false)
    console.log("%c filter modal off", "color:purple")
  }

  // function to reset tag value and remove filter
  const removeFilter = () => {
    setPostSearchTag("")
  }

  // const to switch between hidden and shown modal
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  // functions to show and hide delete modal
  const showDeleteModal = () => {
    if (deleteModalVisible === true) {return}
    setDeleteModalVisible(true)
  } 
  const hideDeleteModal = () => {
    setDeleteModalVisible(false)
    setPostToDeleteId("")
    setNameOfPostToDelete("")
  }

  // function to show delete modal and set variable to hold doc.id(which is passed to the modal)
  const prepareToDeleteModal = (ID, IdName) => {
    setPostToDeleteId(ID)
    setNameOfPostToDelete(IdName)
    showDeleteModal()
  }

  // delete modal logic -> yes = deleteDoc(db, "CitrusPosts", posttoDelete...) -> no hideDeleteModal() and setPostToDeleteId("")
  // make delete modal and implement logic...

    // test posts
    // <Post />
    // <Post />
    // <Post />
    // <Post />
    // <Post />
 

  return (
    <>
        <AddPostModal userVar={user} removeModal={toggleModalOff} modalState={modalVisible}/>
        <DeletePostModal deleteID={postToDeleteID} deleteIDName={nameOfPostToDelete} hideModal={hideDeleteModal} modalState={deleteModalVisible}/>
        <FilterPostsModal FilterValue={postSearchTag} resetTag={removeFilter} removeModal={toggleFilterModalOff} modalState={filterModalVisible} changeFilterFunction={setNewFilter}/>
        <div className="flex flex-col items-center last:pb-0">
            {postSearchTag ?
            docList && docList?.map((doc) => {
              if (doc.tag === postSearchTag) return (<Post dataObject={doc} key={doc.id} currentUser={user} preparetoDeleteFunction={prepareToDeleteModal} />)
              return null
            })
             :
            docList && docList?.map((doc) => {
              return (<Post dataObject={doc} key={doc.id} currentUser={user} preparetoDeleteFunction={prepareToDeleteModal} />)
            })
            }
        </div>
        {!modalVisible && !filterModalVisible ? isLoggedin ? <><button onClick={toggleModalOn} className="p-6 pt-5 pb-5 m-4 rounded-full border-2 border-white bg-formblue hover:bg-darkformblue hover:scale-105 font-bold text-xl sticky bottom-3 z-10">&#10133;</button>
        <button onClick={toggleFilterModalOn} className="p-6 pt-5 pb-5 m-4 rounded-full border-2 border-white bg-lightest-g hover:bg-light-g hover:scale-105 font-bold text-xl sticky bottom-2 z-10">&#64;</button> 
        </>
        : <div></div>
         : <div></div>}
    </>
  )
}

export default Home