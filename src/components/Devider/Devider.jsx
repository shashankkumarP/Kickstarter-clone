import React from 'react'
import {Stack,HStack,Box,Text,Image} from "@chakra-ui/react"



export const Devider = ({data}) => {
   
  return (
    <div>
         <Stack  w='90%' h='300px' m='auto' >
            <HStack  display={'flex'} h='100%' w='100%' gap='10px' _hover={{cursor:"pointer",'.a':{textDecoration:"underline",color:"teal"}}}   >
                
                    <Image m='none' w='50%' h='100%' src={`${data.image}`} />
                
                <Stack  textAlign='left' h='100%' >
                    <Stack borderLeft='5px solid teal'  >
                        <Text className='a' ml='15px' mt='0px' fontSize={'x-large'} letterSpacing='1px' fontWeight={'medium'} >{data.title}</Text>
                        <Text pl='15px' >{data.description}</Text>
                    </Stack>
                    <Stack>
                        <Text _hover={{textDecoration:"underline",cursor:"pointer"}} pl='15px'>{data.last}</Text>
                    </Stack>
                </Stack>

            </HStack>
         </Stack>

       
    </div>
  )
}
