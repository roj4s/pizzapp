const defaultRequiredValidator = (val) => {
    if(val && val.trim() !== ""){
        return true;
    }
    return false;
}

const UserFieldValidators = {
    email: (val) => { 
        if(!defaultRequiredValidator(val)){
            return false;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)))
        {
            return false;
        }
        return true;
    },
    name: defaultRequiredValidator,
    address: defaultRequiredValidator,
    phone: (val) => {
        if(!defaultRequiredValidator(val)){
            return false;
        }
        if(val.length < 10)
         {
             return false;
         }
        for(let i = 0 ; i < val.length; i++){
            let c = val.charAt(i);
            if(c < '0' || c > '9')
                return false;
        }
        return true;
    } 
};

export const checkObjAllTrue = (obj) => {

    const keys = Object.keys(obj);
    for(let i=0; i < keys.length; i++){
        let k = keys[i];
        if(obj[k] !== true)
            return false;
    }
    return true;

}

export default UserFieldValidators;