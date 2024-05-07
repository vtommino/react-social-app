import { createContext, useState, useEffect } from 'react';
import * as postApi from '../Apis/postApi';
 
export const PostContext = createContext();

// Provider 
export default function PostContextProvider({children}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPost();
    }, []);
    //GET -AllPost
    const getAllPost = async () => {
        try {
            const response = await postApi.getAllPost();
            console.log(response.data);
            setPosts(response.data);    
        } catch(error){
            console.log(error);
        }
    };
    return <PostContext.Provider value={{posts: posts}}>{children}</PostContext.Provider>;
}