import React from 'react'
import {HStack,Text,Input,Button,Flex,Box,Stack,Checkbox} from "@chakra-ui/react"

export const Signup = () => {
  return (
    <div>
      <Stack display='block' w='35%' m='auto' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='100px' mb='30px' bg='white' >
      <Text textAlign='left' pl='80px' pt='30px' fontSize='larger' letterSpacing='0.5' >Sign up</Text>
          <Input placeholder='Name' w='300px' h='30px' />
          <br />
          <Input placeholder='email' w='300px' h='30px' />
          <br />
          <Input placeholder ='password' w='300px' h='30px' />
          <br />
          
          
          <br />
          <Text textAlign='left' pl='80px' pr='40px' > <input type="checkbox"  placeholder='Remember me'/>
          Send me a weekly mix of handpicked project, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; plus occasional Kickstarter news</Text>
          <br />
          <Text textAlign='left' pl='80px' pr='50px' > <input type="checkbox"  placeholder='Remember me'/>
          Contact me about participating in Kickstarter &nbsp;&nbsp;&nbsp;&nbsp; research </Text>
          <br />
          <Button w='300px' h='30px' bg='green' color='white' >Create-account</Button>
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
