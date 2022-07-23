import React from 'react'
import {HStack,Stack,Box,Text,VStack,Image} from "@chakra-ui/react"

export const Creator = () => {
  return (
    <Stack  w='90%' h='800px' pl='80px' m='auto'  >
        <HStack  w='100%' h='250px' mt='0px' gap='30px' mb='50px'  >
            <HStack boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"   h='100%' w='45%' p='0px 20px 0px 20px' _hover={{cursor:"pointer",'.a':{textDecoration:"underline"}}} >
                <Image  src='https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d' w='35%' h='80%' m='auto'  />
                <Stack w='65%' h='80%' mt='0px'  >
                    <Text className='a' textAlign='left' pl='20px' fontSize='larger' fontWeight='bold' letterSpacing='1px' mt='5px' >Kickstarter Creator Resources</Text>
                    <Text textAlign='left'  fontSize='medium' pl='20px' pt='15px' color='rgb(80,80,80)' lineHeight='1.1'  >Our definitive roundup of everything from planning shipping to communicating with backers.</Text>
                    
                    <br />
                    <Text textAlign='left' pl='20px' color='blue'  _hover={{textDecoration:"underline",cursor:"pointer"}} >Read More</Text>
                </Stack>
            </HStack>
            <HStack boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" h='100%' w='45%' p='0px 20px 0px 20px'  _hover={{cursor:"pointer",'.a':{textDecoration:"underline"}}} >
                <Image  src='https://ksr-static.imgix.net/TCI_storytelling-9fe71bf.png?ixlib=rb-2.1.0&s=dca8c6b2fbb2d3d423ae9a9e2f11c165' w='35%' h='80%' m='auto'  />
                <Stack w='65%' h='80%' mt='0px'  >
                    <Text textAlign='left' className='a' pl='20px' fontSize='larger' fontWeight='bold' letterSpacing='1px' mt='5px' >How to tell the story of your creative work</Text>
                    <Text textAlign='left' fontSize='medium' pl='20px' pt='15px' color='rgb(80,80,80)' lineHeight='1.1'  >Tips for uncovering the best story you can tell to press, funders, followers, and everybody else.</Text>
                    
                    <br />
                    <Text textAlign='left' pl='20px' color='blue'  _hover={{textDecoration:"underline",cursor:"pointer"}} >Read More</Text>
                </Stack>
            </HStack>
        </HStack>

        <HStack  w='100%' h='250px' mt='0px' gap='30px' >
            <HStack boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" h='100%' w='45%' p='0px 20px 0px 20px'  _hover={{cursor:"pointer",'.a':{textDecoration:"underline"}}} >
                <Image  src='https://ksr-static.imgix.net/Copy_of_K74A9508_Press_Kit_-_Employer_Brand-30e99b1.jpg?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=52fbe154bfce69ab2aba3d644dbd189f' w='35%' h='80%' m='auto'  />
                <Stack w='65%' h='80%' mt='0px'  >
                    <Text textAlign='left' className='a' pl='20px' fontSize='larger' fontWeight='bold' letterSpacing='1px' mt='5px' >How to talk about your project honestly and clearly</Text>
                    <Text textAlign='left' fontSize='medium' pl='20px' pt='15px' color='rgb(80,80,80)' lineHeight='1.1'  >Our advice for crafting a project page that’s honest, open, and transparent in both text and visuals.</Text>
                    
                    <br />
                    <Text textAlign='left' pl='20px' color='blue'  _hover={{textDecoration:"underline",cursor:"pointer"}} >Read More</Text>
                </Stack>
            </HStack>
            <HStack boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" h='100%' w='45%' p='0px 20px 0px 20px'  _hover={{cursor:"pointer",'.a':{textDecoration:"underline"}}} >
                <Image  src='https://ksr-static.imgix.net/fulfillment_from_a_to_z-ded7c17.jpg?ixlib=rb-2.1.0&s=c05ae0b451a04d143e2d4efd8ba93445' w='35%' h='80%' m='auto'  />
                <Stack w='65%' h='80%' mt='0px'  >
                    <Text textAlign='left' className='a' pl='20px' fontSize='larger' fontWeight='bold' letterSpacing='1px' mt='5px' >Fulfillment from A to Z</Text>
                    <Text textAlign='left' fontSize='medium' pl='20px' pt='15px' color='rgb(80,80,80)' lineHeight='1.1'  >A list of services that can help you with prototyping, manufacturing, packaging, shipping, and more.</Text>
                    
                    <br />
                    <Text textAlign='left' pl='20px' color='blue'  _hover={{textDecoration:"underline",cursor:"pointer"}} >Read More</Text>
                </Stack>
            </HStack>
        </HStack>
    </Stack>
  )
}
