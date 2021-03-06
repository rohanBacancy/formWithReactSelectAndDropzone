import React, { useState } from 'react'
import CheckBox from '../formInsides/CheckBox';
import Input from '../formInsides/Input';
import RadioGrp from '../formInsides/RadioGrp';
import TextArea from '../formInsides/TextArea';
import DropBox from '../formInsides/DropBox';
import DropZone from '../formInsides/DropZone';

const Form = () => {

    const [allFormFieldVals , setAllFormFieldVals ] = useState({
        name:'',
        chess:false,
        pool:false,
        about:'',
        movie:'inception',
        languages:{value:'objc',label:'Objective C'},
    });

    const [allFormFieldErrs , setAllFormFieldErrs ] = useState({
        nameErr:true,
        aboutErr:true,
        dropZoneErr:true,
    });

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if( allFormFieldErrs.nameErr===false && allFormFieldErrs.aboutErr===false && allFormFieldErrs.dropZoneErr===false )
        {
            alert("Form Submitted Successfully");
        }
        else
        {
            alert("Please Fill the Form Properly");
        }
    }

    const handleChange = (e) =>
    {
        if(e.flagSelect) //For ReactSelect
        {
            setAllFormFieldVals({...allFormFieldVals,languages:{value:e.value,label:e.label}});
        }
        else{
            switch(e.target.name) //For Othr Inputs
            {
                case 'name':
                    setAllFormFieldVals({...allFormFieldVals,name:e.target.value});
                    break;
                case 'chess':
                    setAllFormFieldVals({...allFormFieldVals,chess:e.target.checked});
                    break;
                case 'pool':
                    setAllFormFieldVals({...allFormFieldVals,pool:e.target.checked});
                    break;
                case 'about':
                    setAllFormFieldVals({...allFormFieldVals,about:e.target.value});
                    break;
                case 'movie':
                    setAllFormFieldVals({...allFormFieldVals,movie:e.target.value});
                    break;
                default:
                    console.log("Shouldn't Come Here");
            }
        }
    }

    
    const movies = [ {itemTitle:'Inception',value:'inception'} , {itemTitle:'Fight Club',value:'fclub'} ];
    const languages = [ {value:'cpp',label:'C++'} , {value:'objc',label:'Objective C'} ];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <Input 
                        name="name" 
                        value={allFormFieldVals.name} 
                        handleChange={handleChange} 
                        title="Name"
                        allFormFieldErrs={allFormFieldErrs} 
                        setAllFormFieldErrs={setAllFormFieldErrs}/>
                    <CheckBox
                        name="chess" 
                        value={allFormFieldVals.isLegend} 
                        handleChange={handleChange} 
                        title="Chess"/>
                    <CheckBox
                        name="pool" 
                        value={allFormFieldVals.isLegend} 
                        handleChange={handleChange} 
                        title="Pool"/>
                    <TextArea
                        name="about" 
                        value={allFormFieldVals.about} 
                        handleChange={handleChange} 
                        title="About"
                        allFormFieldErrs={allFormFieldErrs} 
                        setAllFormFieldErrs={setAllFormFieldErrs}/>
                    <RadioGrp
                        name="movie"
                        items={movies}
                        value={allFormFieldVals.movie} 
                        handleChange={handleChange}/>
                    <DropBox 
                        name="language"
                        items={languages}
                        value={allFormFieldVals.languages} 
                        handleChange={handleChange}/>

                    <DropZone
                        allFormFieldErrs={allFormFieldErrs} 
                        setAllFormFieldErrs={setAllFormFieldErrs}
                        handleChange={handleChange}
                        allFormFieldVals={allFormFieldVals}
                        setAllFormFieldVals={setAllFormFieldVals}/>

                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
