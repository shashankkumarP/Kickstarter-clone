import React, { useState } from 'react'
import {HStack,Text,Input,Button,Flex,Box,Stack,Checkbox} from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux";
import {singupaction} from "../../state/Authentication/Authaction"
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  let dispatch= useDispatch();
  let navigate = useNavigate();
  
  let [form,setForm] = useState({
       name:"",
        email:"",
        username:"",
        password:"",
        mobile:"",
        description:"hello",

  })
  let handlechange =(e)=>{
    let {name,value} = e.target;
    setForm({...form,[name]:value});
  }
  let handlesignup = ()=>{
    let a='';
    let s="shapqrtuvwxyzcdefgh"
    let bag =""
    for(let i=0;i<3;i++)
    {
      let ab = Math.floor(Math.random(5,0)*10+1);
      a+=ab;
      bag+=s[ab];

    }
    form.mobile=a;
    form.email=bag+"@gmail.com";

    console.log(form);
    dispatch(singupaction(form));
    navigate("/login");


  }


  return (
    <div>
      <Stack display='block' w='35%' m='auto' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='100px' mb='30px' bg='white' >
      <Text textAlign='left' pl='80px' pt='30px' fontSize='larger' letterSpacing='0.5' >Sign up</Text>
          <Input placeholder='Name' name='name' w='300px' h='30px' onChange={handlechange} />
          <br />
          <Input placeholder='email ' name='username' w='300px' h='30px' onChange={handlechange} />
          <br />
          <Input placeholder ='password' name='password' w='300px' h='30px' onChange={handlechange} />
          <br />
          
          
          <br />
          <Text textAlign='left' pl='80px' pr='40px' > <input type="checkbox"  placeholder='Remember me'/>
          Send me a weekly mix of handpicked project, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; plus occasional Kickstarter news</Text>
          <br />
          <Text textAlign='left' pl='80px' pr='50px' > <input type="checkbox"  placeholder='Remember me'/>
          Contact me about participating in Kickstarter &nbsp;&nbsp;&nbsp;&nbsp; research </Text>
          <br />
          <Button w='300px' h='30px' bg='green' color='white' onClick={()=>{handlesignup()}} >Create-account</Button>
          <br />
          <Box display='flex' alignItems='center'>
          <Box w='130px' pl='90px' >
            <hr />
          
          </Box>
          or
          <Box w='130px' pl='10px' >
            <hr />
          
          </Box>
          </Box>
          <Button w='300px' h='30px' borderRadius='5px' bg='black' color='white' ><i class="fa-brands fa-apple"></i> &nbsp; sign-in with apple</Button>
          <Button w='300px' h='30px' borderRadius='5px' bg='blue' color='white' ><i class="fa-brands fa-facebook-square"></i>&nbsp; continue with facebook</Button>
         
          
          <Box display='flex'    pl='100px' pr='91px' fontSize='smaller' >
            <Text>This site is protected by reCAPTCHA and the Google  privacy policy
             and Terms of service apply</Text>
          </Box>
      </Stack>
    </div>
  )
}
