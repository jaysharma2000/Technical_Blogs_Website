import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const{handlePageChange, page, totalPage} = useContext(AppContext);
  return (
    <div className='border-t-2 shadow-lg fixed bottom-0 w-screen flex  justify-center items-center  bg-slate-100'>

      <div className='flex justify-between w-11/12 max-w-[690px] p-2 '> 
      {
        page > 1 &&
        (<button onClick={()=> handlePageChange(page -1)} className='border-2 border-gray-400 px-3 py-1 rounded-md bg-white'>Previous</button>)
      }

      {
        page < totalPage &&
        (<button onClick={()=> handlePageChange(page +1)} className='border-2 border-gray-400 px-4 py-1 rounded-md bg-white'>Next</button>)
      } 

      <p className='ml-[25rem] font-semibold'>Page {page} of {totalPage}</p>
      </div>
      
   
    </div>
  )
}

export default Pagination