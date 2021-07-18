import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();//Para evitar el comportamiento del submit
        
        if(inputValue.trim().length > 2){    
            setCategories((categories) => [inputValue,...categories]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
