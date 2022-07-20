import React, { useState } from 'react'
import {HStack,Text,Input,Button,Flex,Box,Stack,Checkbox} from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'

import { Signup } from '../Signup/Signup'

export const Login = () => {
  let [read,setRead] = useState(false);
  let [logs,setLogs] = useState(false);
  return (
    <div >
        {logs==false&&(<Stack display='block' w='35%' m='auto' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='100px' mb='30px' bg='white' >
          <Text textAlign='left' pl='80px' pt='30px' fontSize='larger' letterSpacing='0.5' >Login</Text>
          <Input placeholder='email' w='300px' h='30px' />
          <br />
          <Input placeholder ='password' w='300px' h='30px' />
          <br />
          <br />
          <Text textAlign='left' pl='80px' fontSize='small' color='blue' >Forgot your password</Text>
          <br />
          <Button w='300px' h='30px' >Login</Button>
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
            <Text color='blue' textDecoration='underline' onClick={()=>{}} >Signup</Text>
          </Box>
          <Box display='flex'    pl='100px' pr='91px' fontSize='smaller' >
            <Text>This site is protected by reCAPTCHA and the Google  privacy policy
             and Terms of service apply</Text>
          </Box>
         

        </Stack>)}
        {logs==true &&<Signup />}
    </div>
  )
}
