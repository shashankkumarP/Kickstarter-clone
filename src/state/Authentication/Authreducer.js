import {Login_Error, Login_Loading, Login_Successful,Logout_Successful,Signup_Successful} from "./Authactiontype"

let initialauth={
    isError:false,
    isRegistered:false,
    isLoading:false,
    isAuth:false,
    token:null
}

export const Authreducer = (state=initialauth,{type,payload})=>{


    switch(type)
    {
        case Login_Successful:{
           
            return  {...state,isAuth:true,token:payload,isLoading:false,isRegistered:true}
        }
        case Login_Loading:{
            return {...state,isLoading:true}
        }
        case Login_Error:{
            return {...state,isError:true,isLoading:false}
        }
        case Logout_Successful:{
            
            return {...state,isAuth:false,token:null}
        }
        case Signup_Successful:{
            localStorage.setItem("registrationtoken",payload);
            return {...state,isRegistered:true}
        }
        default:{
            return state;
        }
    }
}