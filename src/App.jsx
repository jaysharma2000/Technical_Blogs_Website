import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { useSearchParams } from "react-router-dom";
import {useNavigate, useLocation, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";





function App() { 

  const{fetchData} = useContext(AppContext);
  const[searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() =>{
    
    const page = searchParams.get("page") ?? 1;
    ///imp
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page),null, category); 
    }else{
      fetchData(Number(page));
    }

  },[location.pathname, location.search]); 
  
  return (
    <div className="">  
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/blog/:blogId" element={<BlogPage/>} />
        <Route  path="/tags/:tag" element={<TagPage/>} />
        <Route  path="/categories/:category" element={<CategoryPage/>} />  
      </Routes>
    
    </div>
    
  ); 
}

export default App;
