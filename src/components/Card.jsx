import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';

const Card = ({post}) => {

    // const{} = useContext(AppContext); 
  return (
    <div key={post.id} >
        <NavLink to={`/blog/${post.id}`}>
          <p className=' font-bold text-lg  mt-9'>{post.title}</p>
        </NavLink>
        

        <p>By <span className=' italic'>{post.author}</span> On {" "} <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}><span className=' font-semibold underline '>{post.category}</span></NavLink> </p> 

        <p>Posted on {post.date}</p>

        <p className=' mt-4 text-[1.1rem] leading-[1.4rem]'>{post.content}</p>
        
        <div className=' mt-4 text-sm flex flex-wrap gap-2 text-blue-600 font-semibold underline'>
            {
                post.tags.map((tag, index) => (<NavLink to={`/tags/${tag.replaceAll(" ","-")}`}><span key={index} className=' '>{`#${tag}`}</span></NavLink>)) 
            }
        </div>



    </div>
  )
}

export default Card