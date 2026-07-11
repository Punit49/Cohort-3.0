import React, { useRef, useState } from 'react'

const Form = () => {
    console.log("Form RE-Rendering...");

    const [formData, setFormData] = useState({});
    const formRef = useRef({});
    
    console.log(formData);

    function sub(e){
        e.preventDefault();
        setFormData({
            name: formRef.current.name.value,
            price: formRef.current.price.value,
        });
        console.log(formRef.current.name.value);
        console.log(formRef.current.price.value);
    }

    return (
        <>
        <form onSubmit={sub} className='flex flex-col gap-5 w-50 bg-blue-900 p-4'>
            <input ref={(e) => formRef.current.name = e} className='p-1 border rounded' type="text" 
            placeholder='Product Name' />

            <input ref={(e) => formRef.current.price = e} className='p-1 border rounded' type="number" placeholder='Product Price' />
            
            <button className='bg-white text-black rounded'>CREATE</button>
        </form>

        <div>
            <div>{formData.name}</div>
            <div>{formData.price}</div>
        </div>
        </>
    )
}

export default Form;
