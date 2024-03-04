import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const UserProfile = (props) => {
    const [user, setUser] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <>
        
        </>
    )
}
    
export default UserProfile;

