import React from 'react'

const CheckBox = ({ name,value,handleChange,title }) => {
    return (
        <div>
            <input type="checkbox" name={name} checked={value} onChange={handleChange} />
            <label htmlFor={name}> {title} </label> 
        </div>
    )
}

export default CheckBox
