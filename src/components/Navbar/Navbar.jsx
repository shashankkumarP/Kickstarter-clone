import React from 'react'
import {HStack,Box,Text,Image} from "@chakra-ui/react"
import {Link,useNavigate} from "react-router-dom"


export const Navbar = () => {
    let navigate = useNavigate();
    
  return (
    <HStack w='100%'   pl='0px' fontSize='bolder' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' mb='1px' pb='1px' >
       <Box  ml='45px' w='16%' display='flex' alignItems='center' justifyContent='space-between' >
        <Text>Discover</Text>
        <Text>Search for a project</Text>
       </Box>
       <Box m='auto' w='60%' mr='100px' onClick={()=>{navigate("/")}} >
        <Link to='/'><Image src={`https://theme.zdassets.com/theme_assets/7902/7a63b03d352488898e3a870d14a103ddffe4b5fe.png`} w='25%' /></Link>
       </Box>
       <Box display='flex' alignItems='center' justifyContent='space-around'   w='11%'  pl='8%' >
        <Text>Search <i class="fa-solid fa-magnifying-glass"></i> </Text>
        
        <Link to='/login' style={{textDecoration:"none"}} >Login</Link>
       </Box>
    </HStack>
  )
}
