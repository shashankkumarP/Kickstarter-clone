import React from 'react'
import {HStack,Box,Text,Image,Stack,Button,ChevronDownIcon} from "@chakra-ui/react"
import {Link,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";
import {Logout_action} from "../../state/Authentication/Authaction"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal
} from '@chakra-ui/react'


export const Navbar = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let tk = localStorage.getItem("registrationtoken");
    let {isAuth} = useSelector((state)=>state.Auth);

    let handlelogout = ()=>{
      dispatch(Logout_action())
    }
    
    function profile()
    {
      return (
         <Menu>
            <MenuButton border='none' >
             <Image src={'https://images.hdqwalls.com/wallpapers/mixed-colors-abstract-4k-v6.jpg'} borderRadius='24px' w='100%' h='20px' />
            </MenuButton>
            
            <MenuList boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' border='none' >
              <MenuGroup title='Your account' >
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}} >saved projects</MenuItem>
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}} >recomemded for you</MenuItem>
              </MenuGroup>
              <MenuGroup title='profile' >
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}} >Activity</MenuItem>
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}} >setting</MenuItem>
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}}>Message</MenuItem>
              </MenuGroup>
              <br/>
              <MenuItem border='none' _hover={{textDecoration:'underline',cursor:'pointer'}} onClick={()=>handlelogout()} >Logout</MenuItem>
            </MenuList>
           
            
            
         </Menu>
      )
    }
    
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
        
        { isAuth==true ?  profile() :<Link to='/login' style={{textDecoration:"none"}} >Login</Link>}
       </Box>
    </HStack>
  )
}
