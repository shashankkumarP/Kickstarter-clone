import React, { useContext, useEffect, useState } from 'react'
import {HStack,Text,Input,Button,Flex,Box,Stack,Checkbox,Spinner} from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'
import {loginaction,singupaction} from "../../state/Authentication/Authaction";
import { useDispatch ,useSelector} from 'react-redux';
import { Previdlege } from '../../context/Previdlege';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let {isAuth,isLoading,isError} = useSelector((state)=>state.Auth);
  
  let [modal,setModal] = useState(false);
  let [form,setForm] = useState({
    username:"",
    password:""
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  let handlechange =(e)=>{
    let {name,value} = e.target;
    setForm({...form,[name]:value})
  }
  let handlesubmit = ()=>{
    console.log(form)
    dispatch(loginaction(form,setModal,modal))
    navigate("/")
    
  }
  
  useEffect(()=>{
    
    if(isError==true){
      onOpen();
    }
    // isError==true&&setModal(!modal);
  },[modal])
   isLoading&&<Spinner color='red.500' />
   
   

  return (
    <div >
      
      
        
     
      
      
      <Modal  aria-label='Focus moved to this box' ref={finalRef}  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}   >
        <ModalOverlay />
        <ModalContent  w='30%' left='34%' m='auto' top="37%" position="absolute " boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'  bg="#fff" zIndex={1000} opacity={1} backgroundClip= "padding-box" >
          <Box display='flex' justifyContent='space-between' >
          <ModalHeader>Message</ModalHeader>
          <ModalCloseButton w='10px' />
          </Box>
          
          <ModalBody >
           <Text>&nbsp;&nbsp;! OOps You have Entered a wrong credential</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      
      
        <Stack  display='block' w='35%' m='auto' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='100px' mb='30px' bg='white' >
          <Text textAlign='left' pl='80px' pt='30px' fontSize='larger' letterSpacing='0.5' >Login</Text>
          <Input placeholder='email' name='username' w='300px' h='30px' onChange={handlechange} />
          <br />
          <Input placeholder ='password' name='password' w='300px' h='30px' onChange={handlechange} />
          <br />
          <br />
          <Text textAlign='left' pl='80px' fontSize='small' color='blue' >Forgot your password</Text>
          <br />
          <Button w='300px' h='30px' onClick={()=>{handlesubmit()}} >Login</Button>
          <br />
          <Text textAlign='left' pl='80px' > <input type="checkbox" defaultChecked placeholder='Remember me'/> Remeber me</Text>
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
         
          <Box display='flex' alignItems='center' pl='100px' >
            <Text>New to kickstarter ?</Text>
            <Text color='blue' textDecoration='underline' onClick={()=>{navigate("/signup")}} >Signup</Text>
          </Box>
          <Box display='flex'    pl='100px' pr='91px' fontSize='smaller' >
            <Text>This site is protected by reCAPTCHA and the Google  privacy policy
             and Terms of service apply</Text>
          </Box>
        
          
      
    

        </Stack>
       
        
    </div>
  )
}
