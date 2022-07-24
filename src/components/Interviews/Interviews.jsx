import React from 'react'
import {Text,Box,Stack,HStack,Image} from "@chakra-ui/react"



export const Interviews = () => {
    let rectangle=[
        {
            image:"https://ksr-static.imgix.net/TCI-OceanVuong-47bcab2.jpg?ixlib=rb-4.0.2&s=9e54a0fea51a9e5763bc50a18d5c0441",
            title:"Author Ocean Vuong on being generous in your work"
        },
        {
            image:"https://ksr-static.imgix.net/TCI-MichelleZauner-c41b69a.jpg?ixlib=rb-4.0.2&s=81f2798e6b69715bcb4ab6b67efff26c",
            title:"Musician and writer Michelle Zauner on finding ways to keep going"
        },
        {
            image:"https://ksr-static.imgix.net/TCI-TschabalalaSelf-ab8399e.jpg?ixlib=rb-4.0.2&s=bb3af627829077af902d7438330bc198",
            title:"Visual artist Tschabalala Self on not being afraid of hard work"
        },
        {
            image:"https://ksr-static.imgix.net/TCI-DannyElfman-2584873.jpg?ixlib=rb-4.0.2&s=8630458388c0cef304bebad6d872bf7b",
            title:"Composer Danny Elfman on not being afraid of failure"
        }
    ]
  return (
    <div>
        <Stack w='100%' m='auto' ml='40px'  >
            <HStack w='95%' h='600px' display={"flex"} justifyContent="space-around" >
                <Stack  w='23%' h='100%' textAlign={"left"}  >
                    <Image w='100%' h='70%' src={`${rectangle[0].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"}  >{rectangle[0].title}</Text>
                   
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='70%' src={`${rectangle[1].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"}  >{rectangle[1].title}</Text>
                    
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='70%' src={`${rectangle[2].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"}  >{rectangle[2].title}</Text>
                    
                </Stack>
                <Stack  w='23%' h='100%' textAlign={"left"}>
                    <Image w='100%' h='70%' src={`${rectangle[3].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"}  >{rectangle[3].title}</Text>
                    
                </Stack>
            </HStack>
        </Stack>
    </div>
  )
}
