import React from 'react'
import {Stack,Box,Text,HStack} from "@chakra-ui/react"
import { Tabular } from '../../components/Tabular/Tabular'
import { Individual } from '../../components/Individual/Individual'

export const Home = () => {
  return (
    <div>
         <Tabular />
         <Stack  h='300px' >
          <Text fontSize='xx-large' >Bring a creative project to life.</Text>
          <Text>ON KICKSTARTER:</Text>
          <HStack  display='flex' justifyContent='center' spacing={0.5} >
            <Box boxShadow= 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'  w='320px'>
              <Text fontSize='30px' letterSpacing='1px' fontWeight='bold' color='teal' >223,838</Text>
              <Text>Project funded</Text>
            </Box>
            <Box  boxShadow= 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'  w='320px' >
              <Text fontSize='30px' letterSpacing='1px' fontWeight='bold' color='teal' >$6,161,214,001</Text>
              <Text>towards creative work</Text>
            </Box>
            <Box boxShadow= 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'  w='320px' >
              <Text fontSize='30px' letterSpacing='1px' fontWeight='bold' color='teal' >68,796,601</Text>
              <Text>pledges</Text>
            </Box>
          </HStack>
          <Individual />
         </Stack>
         
    </div>
  )
}
