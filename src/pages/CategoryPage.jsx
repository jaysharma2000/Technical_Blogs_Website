import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';


const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className=' mt-24 flex  mx-auto sm:max-w-2xl max-w-sm'>
            <button onClick={() => navigate(-1)} className='border-2 border-gray-400 px-4 py-1 rounded-md bg-white'>Back</button>
            <h2 className=' ml-3 text-xl font-bold'>
                Blogs On <span className=' underline'>{category}</span>
            </h2>
        </div>
        
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage