import React from 'react'

const Input = ({ name,value,handleChange,title,allFormFieldErrs,setAllFormFieldErrs }) => {

    const validateName = (e) =>
    {
        handleChange(e);
        
        if(e.target.value.length > 4)
        { console.log("Name good"); setAllFormFieldErrs({...allFormFieldErrs,nameErr:false}) }
        else 
        { console.log("Name Not Good");  setAllFormFieldErrs({...allFormFieldErrs,nameErr:true}) }
    }

    return (
        <div>
            <label htmlFor={name} style={{marginRight:'10px'}}> {title} : </label>  
            <input type="text" name={name} value={value} onChange={validateName} />
        </div>
    )
}

export default Input
