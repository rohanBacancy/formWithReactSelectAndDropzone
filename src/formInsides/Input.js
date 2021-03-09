import React, { useState } from 'react'

const Input = ({ name,value,handleChange,title,allFormFieldErrs,setAllFormFieldErrs }) => {

    const [errClass,setErrClass] = useState({outline:'none'});

    const validateName = (e) =>
    {
        handleChange(e);
        
        if(e.target.value.length > 4)
        { setErrClass({outline:'none'}); setAllFormFieldErrs({...allFormFieldErrs,nameErr:false}) }
        else 
        { setErrClass({outline:'none',border:'1px solid red'});  setAllFormFieldErrs({...allFormFieldErrs,nameErr:true}) }
    }

    return (
        <div>
            <label htmlFor={name} style={{marginRight:'10px'}}> {title} : </label>  
            <input style={errClass} type="text" name={name} value={value} onChange={validateName} />
        </div>
    )
}

export default Input
