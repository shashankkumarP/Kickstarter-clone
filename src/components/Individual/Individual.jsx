import React, { useRef } from 'react'
import {Tooltip,Stack,Text,Box,Button,Image,VStack,HStack} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function likebtn()
    {
        return(
            <Stack w='40px' h='50px' onChange={()=>console.log("dsd")}  >
                
                <Box>
                    
                </Box>
                <Text w='30px' h='50px' borderRadius='15px' border='1px solid' bg='white' mt='5px' mb='0.5px' onClick={()=>console.log("yes")} ><Image onClick={()=>console.log("Yes")} w='85%' m='auto' ml='4px' mt='4px' src={'data:image/png;base64,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'} /></Text>
                <Text onClick={()=>console.log("no")} w='30px' h='50px' borderRadius='15px' border='1px solid' bg='white' lineHeight='1px'   ><Image w='80%' m='auto' ml='4px' mt='4px' lineHeight='0.5px' src={'https://c8.alamy.com/zooms/9/a805d2548c1b418e9d9d12cb4e044558/rk78ec.jpg'} /></Text>
                
                <Text onClick={()=>console.log("beet")} w='30px' h='50px' borderRadius='15px' border='1px solid' bg='white' mt='5px' ><Image w='70%' m='auto' ml='4px' mt='4px' src={'https://cdn-icons-png.flaticon.com/512/51/51557.png'} /></Text>
            </Stack>
        )
    }

    const settings = {
        // className: "center",
        infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 5,
        // swipeToSlide: true,
        // afterChange: function(index) {
        //   console.log(
        //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //   );
        // },
        // nextArrow:"next"
    }
    let slide=[
        {
            image:"",
            title:"",
            description:"",
            by:""
        }
    ]

export const Individual = ({heroes}) => {
  let slidepointer = useRef(null)
  console.log(slidepointer.current)
    

  return (
    <div style={{width:"95%", margin:"auto"}}>
        <h2>Swipe To Slide</h2>
        <div style={{display:"flex",justifyContent:"space-between"}} >
         <div >
            <h3 onClick={()=>slidepointer.current.slickPrev()} ><i class="fa-solid fa-angle-left"></i></h3>
          </div>
          <div  >
            <h3 onClick={()=>slidepointer.current.slickNext()} ><i class="fa-solid fa-angle-right"></i></h3>
          </div>
        </div>
        <div  className=''>
            <Slider ref={slidepointer} slidesToShow={4} swipeToSlide='true' >
                {
                    
                    heroes.map((l,index)=>(
                        <div>
                            {ider(l)}
                        </div>
                    ))
                    
                    
                }
            </Slider>
        </div>
          
          
       
      </div>
  )
}
function ider(l)
{
   
  return(
    <div >
        
        
        <VStack spacing={6}>
  

            <HStack spacing={6}>
                

                
                <Tooltip label={likebtn()} placement='right-start'   offset={-20}  right='150%' closeOnClick={false} >
                <Stack w='300px' h='380px'   border='1px solid'  m='auto'  >
                    <Image w='100%' h='65%' src={`${l.images.md}`}  />
                    <Text textAlign='left' fontSize={'large'} fontWeight='bold' _hover={{textDecoration:"underline",color:"green",cursor:"pointer"}} >{l.name}</Text>
                    <Text textAlign='left' _hover={{textDecoration:"underline",color:"green",cursor:"pointer"}} >{l.connections.groupAffiliation}</Text>
                    <Text textAlign='left' _hover={{textDecoration:"underline",color:"green",cursor:"pointer"}} >By {l.biography.fullName} </Text>
                </Stack>
                </Tooltip>
            </HStack>
        </VStack>
       
    </div>
  )
}