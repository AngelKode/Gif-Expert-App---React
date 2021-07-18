import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifCollection } from './components/GifCollection';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            {(categories.length === 0) && <p>No cuenta con búsquedas pasadas</p>}
            <ol>
                {
                    categories.map((category) => (
                        <GifCollection 
                            category = {category}
                            key = {category}
                        />
                    ))
                } 
            </ol>  
        </>
    )
}

export default GifExpertApp;

