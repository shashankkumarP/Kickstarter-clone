import React from 'react'
import {Text,Stack,HStack,Box,VStack,Image} from "@chakra-ui/react"


export const Photo = () => {
    let rectangle=[
        {
            image:"https://ksr-static.imgix.net/4f2ce43055fbe9359a13f3c91379263a_original-4c140d9.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=34a3fc76c549ca19c09eb83b86a33612",
            title:"Uusi's Secrets for Kickstarter Success",
            description:"Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.",
            
        },
        {
            image:"https://ksr-static.imgix.net/tin-crop-ed2a47a.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=c072c44dd65b1db6bb9007e61fbc7cb4",
            title:"Composer Christopher Tin wants to create an album to commemorate extinct birds",
            description:"The Grammy-winning artist is back with a requiem that offers some hope—and a warning—for the planet’s future."
        },
        {
            image:"https://ksr-static.imgix.net/galdem-45-11cf59e.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=b6d4f56070e7f5aec3bafbc97316d8e0",
            title:"9 creators share advice from their journeys to help guide yours",
            description:"Over the last several weeks, we hosted a series of small workshops for creators of color and marginalized genders in the UK, in collaboration with gal-dem magazine. Here, we open up some of the insights and advice from those sessions to all."

        },
        {
            image:"https://ksr-static.imgix.net/Screen_Shot_2021-03-11_at_12-14-34_PM-a2b84ac.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=bdaeae97bc01ea8402b4146f58cfca93",
            title:"Focusing on the artist behind the comics sensation",
            description:"Filmmakers Jim Demonakos and Kevin Hanna are making a documentary about Hellboy creator Mike Mignola."
        }
    ];
    
  return (
    <div>
        <Stack w='100%' m='auto' ml='40px'  >
            <HStack w='95%' h='600px' border='1px solid' display={"flex"} justifyContent="space-around" >
                <Stack  w='23%' h='100%' textAlign={"left"}  >
                    <Image w='100%' h='60%' src={'https://ksr-static.imgix.net/4f2ce43055fbe9359a13f3c91379263a_original-4c140d9.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=34a3fc76c549ca19c09eb83b86a33612'} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"} fontWeight="bold" >Uusi's Secrets for Kickstarter Success</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={'sm'} letterSpacing='tight' lineHeight={1} >Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Read more</Text>
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='60%' src={`${rectangle[1].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"} fontWeight="bold" >{rectangle[1].title}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={'sm'} letterSpacing='tight' lineHeight={1} >{rectangle[1].description}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Read more</Text>
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='60%' src={`${rectangle[2].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"} fontWeight="bold" >{rectangle[2].title}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={'sm'} letterSpacing='tight' lineHeight={1} >{rectangle[2].description}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Read more</Text>
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='60%' src={`${rectangle[3].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"} fontWeight="bold" >{rectangle[3].title}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={'sm'} letterSpacing='tight' lineHeight={1} >{rectangle[3].description}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} >Read more</Text>
                </Stack>
            </HStack>
        </Stack>
    </div>
  )
}
