import React from 'react'
import {Stack,Box,Text,HStack} from "@chakra-ui/react"
import { Tabular } from '../../components/Tabular/Tabular'

export const Home = () => {
  return (
    <div>
         <Tabular />
         <Stack border='1px solid' h='300px' >
          <Text fontSize='xx-large' >Bring a creative project to life.</Text>
          <Text>ON KICKSTARTER:</Text>
          <HStack border='1px solid green' >

          </HStack>
         </Stack>
         
    </div>
  )
}
