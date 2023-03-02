import React, { useEffect, useState } from 'react'
import axios
    from 'axios'

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchType, setSearchType] = useState('');
    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await
                axios.get('http://localhost:3001/get-subflyer/flyer/:flyerId');
            setPosts(response.data.data);
            setLoading(false);

        };
        loadPosts();
    }, []);
    console.log(posts, "uiu")
    return (
        <div>
            
            <input
                style={{ width: "30%", height: "30px" }}
                type='text'
                placeholder='Search'
                onChange={(e) => setSearchType(e.target.value)}
            />
        
        </div>
    )
}

export default Search
