import React,{useState} from 'react'

const TextArea = ({ name,value,handleChange,title,allFormFieldErrs,setAllFormFieldErrs }) => {
        const [errClass,setErrClass] = useState({outline:'none'});

    const validate = (e) =>
    {
        handleChange(e);
            if(e.target.value.length > 4)
        { setErrClass({outline:'none'}); setAllFormFieldErrs({...allFormFieldErrs,aboutErr:false}) }
        else 
        { setErrClass({outline:'none',border:'1px solid red'});  setAllFormFieldErrs({...allFormFieldErrs,aboutErr:true}) }
    
    }

    return (
        <div>
            <label htmlFor={name} style={{marginRight:'10px'}}> {title} : </label>
            <textarea style={errClass} name={name} value={value} onChange={validate}></textarea>
        </div>
    )
}

export default TextArea
