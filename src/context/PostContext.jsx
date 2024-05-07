import { createContext } from 'react';

export const PostContext = createContext();

// Provider 
export default function PostContextProvider({children}) {
    const posts = [];
    return <PostContext.Provider>{children}</PostContext.Provider>;
}