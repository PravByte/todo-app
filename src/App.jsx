import React, { useState } from 'react'

const App = () => {
  let [state, setstate] = useState([])
  let [submit, setsubmit] = useState([])
  let handle = (e) => {
    let val = e.target.value
    setstate(val)
  }
  let getit = (e) => {
    e.preventDefault()
    setsubmit([...submit, state])
    setstate("")
  }
  let del = (element) => {
    setsubmit(submit.filter((currentelement) => currentelement != element))
  }
  let comp = (index) => {
    let el = document.getElementById(`task-${index}`)
    if (el.style.textDecoration == 'line-through') {
      el.style.textDecoration = 'none'
    }
    else {
      el.style.textDecoration = 'line-through'
    }
  }
  let edit = (index) => {
    let el = document.getElementById(`task-${index}`);
    el.contentEditable = true;
    el.focus();
  }

  return (
    <div className='p-4 bg-blue-950 h-166' style={{ fontFamily: 'cursive', marginTop: '-17px' }}>
      <div className=" p-3 h-150 md:p-6 w-full md:w-200 rounded-md lg:w-150 container mx-auto flex  flex-col items-center mt-5 bg-white shadow-2xl">
        <h1 className='text-3xl text-green-800 mt-10 '>Hey! What's your Plan Today?</h1>
        <div>
          <form className='  mt-20 ' action="" method='get' onSubmit={getit}>
            <input
              type="text"
              placeholder="Enter your task"
              onChange={handle} value={state || ""}
              className=" w-80 px-4 py-2 border border-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
            />
            <button type='submit' className='bg-blue-800  hover:bg-green-600 p-3 rounded-md text-white ms-2 mt-2 lg:mt-0'>Add task</button>

          </form>
        </div>
        {submit?.length > 0 ? (
          <div className="flex flex-col gap-3 overflow-auto max-h-[300px] ">
            {submit.map((element, index) => (
              <div
               style={{fontFamily:'sans-serif'}}   className="bg-fuchsia-300 text-stone-900  p-2 rounded-md flex  items-center justify-between w-full mt-5"
                key={index}
              >
               <div className=''>
               <h1 className='me-2' id={`task-${index}`}>{element}</h1>
               </div>
               <div className='flex gap-2'>
               <button onClick={() => comp(index)} className='bg-yellow-600 text-white p-3  rounded-md '><i class="fa-solid fa-clipboard-list "></i></button>
                <button style={{outline:'none'}} onClick={() => edit(index)} className='bg-green-600 text-white p-3  rounded-md'>
                  <i className="fa-solid fa-file-pen"></i>
                </button>

                <button onClick={() => del(element)} className='bg-red-600 p-3 text-white  rounded-md'>
                  <i className="fa-solid fa-trash"></i>

                </button>
               </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className='text-red-700 mt-10 font-bold'>No task added</h1>
        )}


      </div>

    </div>
  )
}

export default App