import React from 'react'
import {Text,Stack,HStack,Box,VStack,Image} from "@chakra-ui/react"


export const Photo = ({rectangle}) => {
    // let rectangle=[
    //     {
    //         image:"https://ksr-static.imgix.net/4f2ce43055fbe9359a13f3c91379263a_original-4c140d9.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=34a3fc76c549ca19c09eb83b86a33612",
    //         title:"Uusi's Secrets for Kickstarter Success",
    //         description:"Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators.",
            
    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/tin-crop-ed2a47a.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=c072c44dd65b1db6bb9007e61fbc7cb4",
    //         title:"Composer Christopher Tin wants to create an album to commemorate extinct birds",
    //         description:"The Grammy-winning artist is back with a requiem that offers some hope—and a warning—for the planet’s future."
    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/galdem-45-11cf59e.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=b6d4f56070e7f5aec3bafbc97316d8e0",
    //         title:"9 creators share advice from their journeys to help guide yours",
    //         description:"Over the last several weeks, we hosted a series of small workshops for creators of color and marginalized genders in the UK, in collaboration with gal-dem magazine. Here, we open up some of the insights and advice from those sessions to all."

    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/Screen_Shot_2021-03-11_at_12-14-34_PM-a2b84ac.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=bdaeae97bc01ea8402b4146f58cfca93",
    //         title:"Focusing on the artist behind the comics sensation",
    //         description:"Filmmakers Jim Demonakos and Kevin Hanna are making a documentary about Hellboy creator Mike Mignola."
    //     }
    // ];
    // let rect=[
    //     {
    //         image:"https://ksr-static.imgix.net/CaseStudy_WaxPoetics-400x500-3-e9aa7fd.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=e553548f556bd28d6d687a39f918be87",
    //         title:"Reviving ‘Wax Poetics,’ the cult magazine for long-form music journalism and vinyl culture",
    //         description:"After the magazine closed down, longtime readers Alex Bruh and David Holt launched a campaign to rally an existing and expanding community."
    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/CS_Kaleidadope_Creator-400x500-2456f02.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=33c391dff83f1230bc44832272b63e74",
    //         title:"How tarot creator Krystal Banner strengthens her intuition—and business—on Kickstarter",
    //         description:"The all-or-nothing crowdfunding model can serve as a poll on what projects are worth her time."
    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/ClaudiaCastro_400x500-1-ba11cf5.jpg?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f436a67aa9ecf0a55639fed3913ae147",
    //         title:"Creators: Plan what you can, but prepare for twists and turns",
    //         description:"This poet and printer wanted to engage the communities along the Columbia River. It didn’t go exactly as planned, but their go-with-the-flow attitude brought them through."
    //     },
    //     {
    //         image:"https://ksr-static.imgix.net/final-craighton-berman_case-studies_4-5-9dd3995.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=fa1a9330f8eef4b62ec9b0f48bec40e4",
    //         title:"Craighton Berman's advice for simple creative campaigns",
    //         description:"This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns."
    //     }

    // ]
    
  return (
    <div>
        <Stack w='100%' m='auto' ml='40px'  >
            <HStack w='95%' h='600px'  display={"flex"} justifyContent="space-around" >
                <Stack  w='23%' h='100%' textAlign={"left"}  >
                    <Image w='100%' h='60%' src={`${rectangle[0].image}`} />
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={"large"} fontWeight="bold" >{rectangle[0].title}</Text>
                    <Text _hover={{textDecoration:"underline",cursor:"pointer"}} fontSize={'sm'} letterSpacing='tight' lineHeight={1} >{rectangle[0].description}</Text>
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
