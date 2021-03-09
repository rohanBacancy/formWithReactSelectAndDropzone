import React from 'react'

const TextArea = ({ name,value,handleChange,title,allFormFieldErrs,setAllFormFieldErrs }) => {
    const validate = (e) =>
    {
        let result;
        handleChange(e);
        result = !(e.target.value.length > 4);
        setAllFormFieldErrs({...allFormFieldErrs,aboutErr:result})
    }

    return (
        <div>
            <label htmlFor={name} style={{marginRight:'10px'}}> {title} : </label>
            <textarea name={name} value={value} onChange={validate}></textarea>
        </div>
    )
}

export default TextArea
