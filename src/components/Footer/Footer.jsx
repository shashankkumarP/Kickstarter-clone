import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,HStack,Stack,Text,Image } from '@chakra-ui/react'
import MyImage from "../../lastportion.PNG"

export const Footer = () => {
  return (
    <div>
      <Tabs   w='100%' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
        <TabList  w='70%'   justifyContent='space-evenly' alignItems='center' h='70px'  >
          <Tab border='none' _hover={{textDecoration:"underline",cursor:"pointer"}}  bg='none' fontSize='sm' color='rgb(100, 100, 100)' >Arts</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}}  border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Comics & Illustration</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}} border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Design & Tech</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}}  border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Film</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}}  border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Food & Craft</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}} border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Games</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}} border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)' >Music</Tab>
          <Tab _hover={{textDecoration:"underline",cursor:"pointer"}}  border='none'  bg='none' fontSize='sm' color='rgb(100, 100, 100)'>Publishing</Tab>
        </TabList>
        
      </Tabs>
      <HStack  display='flex' justifyContent='space-evenly'>
        <Stack  textAlign={"left"} >
          <Text fontWeight='bold' >About</Text>
          
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >About us</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Our charter</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Stats</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Press</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Jobs</Text>
        </Stack>
        <Stack  textAlign={"left"} pr='50px'>
          <Text fontWeight='bold' >Help Center</Text>
          
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Our Rules</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Our charter</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Creator Resources</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Forward Funds</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Brand assets</Text>
        </Stack>
        <Stack  textAlign={"left"} pr='50px' >
          <Text fontWeight='bold' >MORE FROM KICKSTARTER</Text>
          
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Newsletters</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Kickstarter Magazine</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >The Creative Independent</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >The Kickstarter Blog</Text>
          <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Mobile apps</Text>
        </Stack>
      </HStack>
      <Image src={MyImage} h='150px' w='100%' />

    </div>
  )
}
