import {Login_Successful,Logout_Successful,Signup_Successful} from "./Authactiontype"

let initialauth={
    isAuth:false,
    token:null
}

export const Authreducer = (state=initialauth,{type,payload})=>{


    switch(type)
    {
        case Login_Successful:{
            let a = localStorage.getItem("token");
            return a==undefined ? alert("Wrong credential") : {...state,isAuth:true,token:a}
        }
        case Logout_Successful:{
            return {...state,isAuth:false,token:null}
        }
        case Signup_Successful:{
            localStorage.setItem("token",payload)
            return state
        }
        default:{
            return state;
        }
    }
}