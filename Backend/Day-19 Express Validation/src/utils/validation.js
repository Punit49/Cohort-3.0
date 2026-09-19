const validateRegisterData = (data) => {
    const { email, phone, password } = data;
    let errors = [];

    if(!email || !email.trim()) errors.push("email");
    if(!phone || !phone.trim()) errors.push("phone");
    if(!password || !password.trim()) errors.push("password");

    errors = errors.map((field) => ({
        field, 
        message: `${field} is required`
    }));

    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if(email && !emailRegex.test(email)){
        errors.push({
            field: "email", 
            message: "Email is invalid"
        })
    }

    if(phone && !phoneRegex.test(phone)){
        errors.push({
            field: "phone", 
            message: "Phone Number is invalid"
        })
    }

    if(password && password.trim().length < 6){
        errors.push({
            field: "password", 
            message: "Password must contain minimum 6 characters"
        })
    }

    return errors;
}

export {
    validateRegisterData
}