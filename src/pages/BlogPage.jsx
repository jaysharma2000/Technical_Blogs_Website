import React, { useContext, useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Card from '../components/Card'; 
import Spinner from '../components/Spinner' 

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/" 
    const[blog, setBlog] = useState(null); 
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location  = useLocation(); 
    const navigate = useNavigate();
    const{setLoading, loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1); 
  
    async function fetchRelatedBlogs(){
      setLoading(true);
      let url = `${newBaseUrl}get-blog?blogId=${blogId}`; 
      try{
        const res = await fetch(url);
        const data = await res.json();

        console.log("inside blogpage--------------") 
        console.log(data);

        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
      }catch(e){
        console.log(e);
        setBlog(null);
        setRelatedBlogs([])
      }

      setLoading(false);
    }

    useEffect(() => {
      if(blogId){
        fetchRelatedBlogs();
      }
    },[location.pathname]);
    
    

  return (
    <div>
      <Header/>
      <div onClick={() => navigate(-1)} className=' mt-24'>
        <button className='border-2 border-gray-400 px-4 py-1 rounded-md bg-white ml-[25rem]'>Back </button>
      </div>
      {/* (blog ? (<div> <Card post={blog}/>  <h2>Related Blogs</h2> {relatedblogs.map((post) =>(<div><Card post={post}/></div>))}<div/>) : (<div>No Blog Found<div/>)) */}
      <div>
        {
          loading ? (<Spinner/>) : (blog ? 
            (<div className='mt-16 mx-auto sm:max-w-2xl max-w-sm mb-24'> 
              <Card post={blog}/>
              <h2 className=' text-3xl font-bold mt-10'>Related Blogs</h2>
              {relatedblogs.map((post) =>(<div key={post.id}><Card post={post}/></div>))}
            </div>) 
            :(<div>
              <p>No Page Found</p>
            </div>))
        }
      </div>
    </div>
  )
}

export default BlogPage