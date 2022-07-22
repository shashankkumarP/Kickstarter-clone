import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export const Tabular = () => {
  return (
    <div>
      <Tabs   w='100%' m='auto' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
        <TabList display='flex' w='70%'  ml='20%' justifyContent='space-evenly' alignItems='center' h='70px'  >
          <Tab border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)' >Arts</Tab>
          <Tab   border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Comics & Illustration</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Design & Tech</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Film</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Food & Craft</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Games</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)' >Music</Tab>
          <Tab  border='none'  bg='none' fontSize='large' color='rgb(100, 100, 100)'>Publishing</Tab>
        </TabList>
        
      </Tabs>
    </div>
  )
}
