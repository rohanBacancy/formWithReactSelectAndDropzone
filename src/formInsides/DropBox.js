import React from 'react'
import Select from 'react-select';


const DropBox = ({ name,items,value,handleChange }) => {

const customStyles = {
    
    container: (provided, state) => ({
    ...provided,
    width: '30vw',
    margin:'auto',
    marginTop:'10px'
  }),

  menu: (provided, state) => ({
    ...provided,
    width: '30vw',
  }),
}

    const passToHandleChnage = (selectedItem) =>
    {
        const newItem = {...selectedItem,flagSelect:true}
        console.log(newItem);
        handleChange(newItem);
    }

    return (
        
        <Select styles={customStyles} name={name} value={value} onChange={passToHandleChnage} options={items} />   
    )
  };

export default DropBox
