import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {useLocation, useNavigate} from 'react-router-dom';

//createcontext
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPage, setTotalPage] = useState(null);
    const navigate = useNavigate();

    async function fetchData(page =1,tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`
        }

        if(category){
            url += `&category=${category}`
        }

        try{

            const response =  await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);

        }catch(e){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);        

    }


    

    const handlePageChange = (page) => {
        // navigate({search: `?page${page}`});
        // setPage(page);
        navigate(`?page=${page}`);
        setPage(page);  

    }

    //context 
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchData,
        handlePageChange
    };

    //contextProvider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>



}