import React from 'react'


const Post = () => {
  return (
    <>
        <div className="bg-lightest-g p-4 m-4 rounded-xl max-w-[32em] drop-shadow-lg flex flex-col items-center">
            <div className="italic text-md mb-1 absolute top-0 right-0 p-2">@literature</div>
            <div className="p-2 text-center text-2xl sm:text-lg font-semibold mt-1 max-w-fit">Extemely long title that doesnt make sense lolol lololololol</div>
            <div className="p-2 flex flex-col items-center max-w-lg sm:max-w-sm bg-light-g rounded-lg">
                <div className="m-2 overflow-none bg-dark-g p-2 rounded-xl drop-shadow-md"><img className="max-h-[18em] max-w-[18em] sm:max-h-[10em] sm:max-w-[10em] rounded-lg" src="https://www.computerhope.com/jargon/g/guest-user.jpg" alt="default user pic"/></div>
                <div className="max-h-[14em] overflow-scroll p-2 m-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
            </div>
            <div className="p-2 italic text-center">Created by FakeUser1 on 3/19/22 3:00PM</div>
        </div>
    </>
  )
}

export default Post