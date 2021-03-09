import React from 'react'

const RadioGrp = ({ name,items,value,handleChange,title }) => {
    return (
        <div> 
            {items.map((item,index) => (<div key={index}><input type="radio" checked={item.value === value} name={name} value={item.value} onChange={handleChange} /><label htmlFor={name} style={{marginRight:'10px'}}> {item.itemTitle} </label></div>))} 
        </div>
    )
}

export default RadioGrp
