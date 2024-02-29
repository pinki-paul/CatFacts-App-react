import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './CatFacts.css';

const CatFact = () => {

    const [catFacts, setCatFacts] = useState(null);

    const fetchCatData = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFacts(res.data);
        })
    }
    useEffect(() => {
        fetchCatData();
    }, []);
    return (
        <div className='main-container'>
            <h1>interesting facts about cat</h1>
            <div className="container">
                <button className="btn" onClick={fetchCatData}>Click to get facts</button>
             <h3>Cat Facts: <span>{catFacts?.fact}</span> </h3>
            </div>
        </div>
    )
}

export default CatFact;