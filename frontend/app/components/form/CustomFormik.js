import {useState} from "react";

export default function CustomFormik({initialValues,onSubmit, children})
{
    const [values,setValues] = useState(initialValues);
    //console.log('Initial values ',initialValues);
    //console.log('onSubmit ',onSubmit);
    const props ={
        values:values,
        handleChange:(event)=>{
            let name = event.target.name;
            setValues({
                ...values,
                [name]: event.target.value
            });
        },
        handleBlur:(event)=>{
          console.log('Handle blur');
        },
        handleSubmit : (event)=>{
            //console.log('Here');
            event.preventDefault();
            onSubmit(props.values);
        }
    };
    return(<div>
        {
            children(props)
        }
    </div>)
}