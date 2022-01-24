import React, { useState, useEffect } from "react";
import axios from 'axios';
    
    const Articles = () => {
        const[data, setData] = useState([]);
        useEffect(() => {
        axios
            .get('https://127.0.0.1:8000/api/docs.jsonld')
            .then((res) => setData(res.data));
        
        }, []);
    
        return (
            <div>
                <ul>
                    {data.map((Article) => (
                        <li>{Article.name}</li>   
                    ))}
                </ul>
            </div>
        );
    }
export default Articles;
