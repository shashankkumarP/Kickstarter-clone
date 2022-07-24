import React,{useEffect, useState} from 'react'
import {Stack,Box,Text,HStack} from "@chakra-ui/react"
import { Tabular } from '../../components/Tabular/Tabular'
import { Individual } from '../../components/Individual/Individual'
import { Creator } from '../../components/creator_corner/Creator'
import { Footer } from '../../components/Footer/Footer'
import { Photo } from '../../components/Photo/Photo'
import { Interviews } from '../../components/Interviews/Interviews'
import { Devider } from '../../components/Devider/Devider'
import axios from "axios"

export const Home = () => {
  let [heroes,setHeroes] = useState([]);
  let [villans,setVillans] = useState([])
  let data =[
    {
      image:"https://ksr-static.imgix.net/01-homepage_module-e4102a3.gif?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=067058d08e8bced53ffbbd4366991171",
      title:"Kickstarter’s 2021 Public Benefit Statement",
      description:"Nearly 3.2 million people pledged more than $800 million to Kickstarter creators in 2021. Our latest annual Public Benefit Statement reports on how well we lived up to our commitments as a Public Benefit Corporation and fulfilled our mission to bring creative projects to life.",
      last:"Read more"
    },
    {
      image:"https://ksr-static.imgix.net/pub-guide-hp-module-asset-d43bd0d.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=7ab937c7bbaf6f81655b43ac4186bf1f",
      title:"How to Create a Great Kickstarter Publishing Project Page",
      description:"Discover tips and tricks for each element of your campaign, from choosing your funding goal to lining up creative rewards.",
      last:"Learn more"
    },
    {
      image:"https://ksr-static.imgix.net/DS_KS_BeautyRender_0209-cdf5937.jpg?ixlib=rb-4.0.2&s=744f4416207472d60e7a9ebf51e27f20",
      title:"How Brandon Sanderson’s Kickstarter Project Broke the Bookish Internet",
      description:"Here's why the author's record-smashing Kickstarter campaign was so successful.",
      last:"Read what happened"
    },
    {
      image:"https://ksr-static.imgix.net/kickstarter-web30-16x9-ed39321.png?ixlib=rb-4.0.2&s=b21244444d99f8dd7afc59854929d08f",
      title:"The Future of Crowdfunding Creative Projects",
      description:"To truly serve our mission to help bring creative projects to life, we need to build on what made Kickstarter so innovative in the first place: the power of a large network of people working together towards a common goal.",
      last:"Learn more"
    },
    {
      image:"https://ksr-static.imgix.net/Final_magic-and-div_hp-module-1225x525_R-311e886.jpg?ixlib=rb-4.0.2&s=d8fe051bc727dbf42c9bca0ccdbef4c1",
      title:"Magic & Divination",
      description:"From terrific tarot decks and wizarding wands to arcane accessories, eldritch electronics, sorcerous stationery, and so much more, you can now find all the most spellbinding projects here in one place.",
      last:"Discover the magic"
    },
    {
      image:"https://ksr-static.imgix.net/V2_Patrons_Program_Design_2020_B01-e486ae0.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=3ff970c90421ae560f8cbb0de70965f2",
      title:"Forward Funds",
      description:"Get access to funds from nonprofits and foundations that back Kickstarter campaigns related to their visions for a more creative and equitable world.",
      last:"Learn More"
    },
    {
      image:"https://ksr-static.imgix.net/ZineQuest4-2022-homepage-module-1204x516-068c3e7.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=9ae0de42128499ce31a965fed2da316d",
      title:"Bring an RPG zine to life",
      description:"Our annual Zine Quest prompt is back to bestow creators with a valiant mission: Bring your RPG to life with maps, adventures, monsters, comics, articles, and interviews! To participate, creators must launch a project for an unbound, folded, stapled, or saddle-stitched RPG zine.",
      last:"Load More"
    }
  ];
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://superhero-search.p.rapidapi.com/api/heroes',
      headers: {
        'X-RapidAPI-Key': 'f3fe02bcbamshbf696f35dc9fc92p1e4116jsn73c7dd0d0536',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);setHeroes(response.data)
    }).catch((err)=>console.log("err",err))
    },[]);

    useEffect(()=>{
      axios.get("https://superhero-search.p.rapidapi.com/api/villains",{
      headers: {
          'X-RapidAPI-Key': 'f3fe02bcbamshbf696f35dc9fc92p1e4116jsn73c7dd0d0536',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
           }
    }).then((r)=>{console.log("villan",r.data);setVillans(r.data)})
    },[])




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
          <Individual heroes={heroes} />
          <Individual heroes={villans} />
          <Creator />
          <Footer />
          <Photo />
          <Interviews />
          <Devider data={data[6]} />
          
         </Stack>
         
    </div>
  )
}
