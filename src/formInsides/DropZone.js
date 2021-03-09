import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'


const DropZone = ( { allFormFieldErrs,setAllFormFieldErrs,handleChange,allFormFieldVals,setAllFormFieldVals }) => {

    const [files,setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
    if(acceptedFiles.length>0)
    {
        setAllFormFieldErrs({...allFormFieldErrs,dropZoneErr:false})
        setAllFormFieldVals({...allFormFieldVals,files:files})
    }
    else
    {
        setAllFormFieldErrs({...allFormFieldErrs,dropZoneErr:true})
    }
  })

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
            <div {...getRootProps()} style={{width:'30vw',margin:'30px auto',padding:'20px'}}>
            <input {...getInputProps()} />
            {
                files.length>0 ? files.length + " Files are selected" :
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
            </div>
    )
}

export default DropZone

