import React,{useEffect, useState} from 'react'
import {Stack,Box,Text,HStack,Image} from "@chakra-ui/react"
import { Tabular } from '../../components/Tabular/Tabular'
import { Individual } from '../../components/Individual/Individual'
import { Creator } from '../../components/creator_corner/Creator'
import { Footer } from '../../components/Footer/Footer'
import { Photo } from '../../components/Photo/Photo'
import { Interviews } from '../../components/Interviews/Interviews'
import { Devider } from '../../components/Devider/Devider'
import axios from "axios";
import feature from "../../feature.PNG"

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
let rect=[
  {
      image:"https://ksr-static.imgix.net/CaseStudy_WaxPoetics-400x500-3-e9aa7fd.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=e553548f556bd28d6d687a39f918be87",
      title:"Reviving ‘Wax Poetics,’ the cult magazine for long-form music journalism and vinyl culture",
      description:"After the magazine closed down, longtime readers Alex Bruh and David Holt launched a campaign to rally an existing and expanding community."
  },
  {
      image:"https://ksr-static.imgix.net/CS_Kaleidadope_Creator-400x500-2456f02.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=33c391dff83f1230bc44832272b63e74",
      title:"How tarot creator Krystal Banner strengthens her intuition—and business—on Kickstarter",
      description:"The all-or-nothing crowdfunding model can serve as a poll on what projects are worth her time."
  },
  {
      image:"https://ksr-static.imgix.net/ClaudiaCastro_400x500-1-ba11cf5.jpg?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f436a67aa9ecf0a55639fed3913ae147",
      title:"Creators: Plan what you can, but prepare for twists and turns",
      description:"This poet and printer wanted to engage the communities along the Columbia River. It didn’t go exactly as planned, but their go-with-the-flow attitude brought them through."
  },
  {
      image:"https://ksr-static.imgix.net/final-craighton-berman_case-studies_4-5-9dd3995.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=fa1a9330f8eef4b62ec9b0f48bec40e4",
      title:"Craighton Berman's advice for simple creative campaigns",
      description:"This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns."
  }

]

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
          <Image src={feature} w='95%' h='450px' />
          <br />
          <Devider data={data[6]} />
          <br />
          <Individual heroes={heroes} />
          <br />
          <Devider data={data[5]} />
          <br />
          <Individual heroes={villans} />
          <br />
          <Devider data={data[4]} />
          <br />
          <br />
          <Individual heroes={villans} />
          <br/>
          <br />
          <Devider data={data[3]} />
          <br />
          <Interviews />
          <br />
          <Devider data={data[2]} />
          <br />
          <br />
          <Individual heroes={heroes} />
          <br />
          <br />
          <Photo rectangle={rectangle} />
          <br />
          <Devider data={data[1]} />
          <br />
          <Photo rectangle={rect} />
          <br />
          <Creator />
          <br />
          <Devider data={data[0]} />
          <Footer />
          
          
          
          
         </Stack>
         
    </div>
  )
}
