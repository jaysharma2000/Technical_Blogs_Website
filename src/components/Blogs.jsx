import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from "./Card"

const Blogs = () => {

  const{loading, posts} = useContext(AppContext);

  

  return (
    <div className=' mt-16 mx-auto sm:max-w-2xl max-w-sm mb-24'>

      {
        loading ? (<Spinner/>) : (posts.length === 0 ? ( <div><p>No Data Found</p></div> ) : (posts.map((post) => (<Card post={post} />))))
      }

    </div>
  )
}

export default Blogs
