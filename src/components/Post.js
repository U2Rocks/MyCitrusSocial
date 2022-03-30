import React, { useEffect, useState } from 'react'


const Post = ({ dataObject, currentUser, preparetoDeleteFunction }) => {

  // state variable to hold and help format date...
  const [formattedDate, setFormattedDate] = useState('N/A')

  const isSameUser = (currentUser?.email === dataObject.user) ? true : false

  // function to convert time properly for user experience
  const toDateTime = () => {
    try {
    let serverDate = new Date(dataObject.timestamp.seconds * 1000)
    setFormattedDate(serverDate.toLocaleString('en-US'))
    } catch(error) {
      console.error("DATE ERROR MANUALLY DETECTED(Post.js) -> " + error)
      let serverDate = new Date()
      setFormattedDate(serverDate.toLocaleString('en-US'))
    }
  }

  // useEffect for debugging purposes and to format the posts date
  useEffect(() => {
    console.log("%c a post loaded...", "color: green")
    toDateTime()
  }, [])

  return (
    <>
     {dataObject.image !== "N/A" && dataObject.image ?
        <div className="bg-lightest-g p-2 m-4 rounded-xl max-w-[32em] drop-shadow-lg flex flex-col items-center">
            { isSameUser ? <div onClick={() => preparetoDeleteFunction(dataObject.id, dataObject.title)} className="text-md m-1 mb-1 absolute top-0 left-0 p-1 pr-3 pl-3 font-bold hover:scale-105 bg-darkest-g drop-shadow-md text-white rounded-full border-2 border-white">&#88;</div> : null }
            <div className="italic text-md mb-1 absolute top-0 right-0 p-2 font-bold">@{dataObject.tag}</div>
            <div className="p-2 text-center text-2xl sm:text-lg font-semibold mt-5 max-w-fit">{dataObject.title}</div>
            <div className="p-2 flex flex-col items-center max-w-lg sm:max-w-sm bg-light-g rounded-lg">
                <div className="m-2 overflow-none bg-dark-g p-2 rounded-xl drop-shadow-md"><img className="max-h-[18em] max-w-[18em] sm:max-h-[10em] sm:max-w-[10em] rounded-lg" src={dataObject.image} alt="visualization not loading"/></div>
                <div className="max-h-[14em] overflow-scroll p-2 m-2 min-w-[17em]">{dataObject.text}</div>
            </div>
            <div className="p-2 italic text-center max-w-[17em] text-sm">Posted by {dataObject.user} on {formattedDate}</div>
        </div>
      : 
      <div className="bg-lightest-g p-2 m-4 rounded-xl max-w-[32em] drop-shadow-lg flex flex-col items-center">
            { isSameUser ? <div onClick={() => preparetoDeleteFunction(dataObject.id, dataObject.title)} className="text-md m-1 mb-1 absolute top-0 left-0 p-1 pr-3 pl-3 font-bold  hover:scale-105 bg-darkest-g drop-shadow-md text-white rounded-full border-2 border-white">&#88;</div> : null}
            <div className="italic text-md mb-1 absolute top-0 right-0 p-2 font-bold">@{dataObject.tag}</div>
            <div className="p-2 text-center text-2xl sm:text-lg font-semibold mt-5 max-w-fit">{dataObject.title}</div>
            <div className="p-2 flex flex-col items-center max-w-lg sm:max-w-sm bg-light-g rounded-lg">
                <div className="max-h-[14em] overflow-scroll p-2 m-2 min-w-[17em]">{dataObject.text}</div>
            </div>
            <div className="p-2 italic text-center max-w-[17em] text-sm">Posted by {dataObject.user} on {formattedDate}</div>
        </div>
      }
    </>
  )
}

export default Post