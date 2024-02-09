export const validate = (name,value) => {
    let error = "";

    switch(name) {
        case "email":
            if(!value.includes("@")) {
                error = "Please enter @ symbol"
            }
            break;

            case "password":
                let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
                if(!regex.test(value)){
                    error = "Password must be at least 8 characters, including uppercase, lowercase and number"
                }
                break;

                case "terms":
                    if(!value){
                        error = "Agree with the terms "
                    }
                    break;

                    case "gender":
                        if(!value){
                            error = "Gender must be choosen"
                        }
                        break;

                        case "birthday":
                            if(!value){
                                error = "Birthday must be choosen"
                            }
                            break;
                            default:
                            break;
    }   
    return error;
};