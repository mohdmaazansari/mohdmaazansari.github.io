import React from 'react'

import { Box, Heading, Text , SimpleGrid,GridItem, Image,HStack, Badge, Link} from '@chakra-ui/react'

import style from './Project.module.css'

import { ExternalLinkIcon } from '@chakra-ui/icons'



const Responsive_Projects = [

  {
    pc_screenshot : 'myntra.png',

    mobile_screenshot : 'myntraMobile.png',

    title : 'Myntra',

    clone : 'clone : Myntra',

    description : 'It is an Indian E-commerce Platform that offers a range of online Clothing Accessories.',

    tech_stack : [{skill : 'HTML.png', w : '20px'},{skill : 'CSS.png', w  : '25px'},{ skill : 'Chakra ui.png', w : '25px'}, {skill : 'React.png', w : '25px'}, {skill : 'react-router.png', w : '25px'}],

    netlify : 'https://radiant-paletas-f729ea.netlify.app/',

    github : 'https://github.com/MohdMaazAnsari/myntra_clone',


  },


  {
    pc_screenshot : 'dell.png',

    mobile_screenshot : 'dellMobile.png',

    title : 'Next Technologies',

    clone : 'clone : Dell',

    description : 'It is leading Laptop Brand. It develops, sells, repairs, and supports computers and related products and services .',

    tech_stack : [{skill : 'HTML.png', w : '20px'},{skill : 'CSS.png', w  : '25px'}, {skill : 'Javascript.png', w : '25px'},],

    netlify : 'https://glistening-cactus-137633.netlify.app/',

    github : 'https://github.com/Jayeshkhandelwal09/straight-turkey-1580',

  

  },


];



const non_Responsive_Projects = [


  {
    pc_screenshot : 'buynow.png',

    mobile_screenshot : null,

    title : 'BUY NOW👗👖',

    clone : 'clone : koovs',

    description : 'It is a global luxury fashion online marketplace that connects customers with a curated selection of products from a network of independent luxury boutiques and designer brands.',

    tech_stack : [{skill : 'HTML.png', w : '20px'},{skill : 'CSS.png', w  : '25px'}, { skill : 'Chakra ui.png', w : '25px'}, {skill : 'React.png', w : '25px'},{skill : 'react-router.png', w : '25px'}],

    netlify : 'https://merry-gecko-c2cdc2.netlify.app/',

    github : 'https://github.com/MohdMaazAnsari/BUY_NOW',

    isOnGithub : true

  },

  {
    pc_screenshot : 'flipkart.png',

    mobile_screenshot : null,

    title : 'Flipkart',

    clone : 'clone : Flipkart',

    description : 'It offers a wide variety of products at competitive prices, from electronics to groceries, with a user-friendly online shopping experience and fast delivery..',

    tech_stack : [{skill : 'HTML.png', w : '20px'},{skill : 'CSS.png', w  : '25px'}, {skill : 'Javascript.png', w : '25px'}, ],

    netlify : 'https://lambent-swan-4277b4.netlify.app/',

    github : 'https://github.com/mohdmaazansari/Flipkart_clone',

    isOnGithub : true

  },



  {
    pc_screenshot : 'trends.png',

    mobile_screenshot : null,

    title : 'Trends',

    clone : 'clone : ASOS',

    description : 'It is a popular ecommerce website specializing in fashion and beauty products, offering a vast range of trendy and affordable clothing options..',

    tech_stack : [{skill : 'HTML.png', w : '20px'},{skill : 'CSS.png', w  : '25px'}, {skill : 'Javascript.png', w : '25px'}, ],

    netlify : 'https://comfy-torte-cb6879.netlify.app/',

    github : 'https://github.com/mohdmaazansari/mountainous-seed-3369',

    isOnGithub : true

  },




]




const Projects = () => {
  return (
    <Box  pb = '100px' border="2px solid rgb(224, 242, 241)" mt="90px" id="projects" >

      {/* green border to below box */}

            <Box mt = '110px'>

            <Heading color = '#1A202C;' fontSize={35}> <Text as = 'span' color = '#1A202C'>My</Text> Projects</Heading>

            <SimpleGrid spacing = '8' mt = '20px' columns={1}>

                {  Responsive_Projects.map((el) =>

                {   return <GridItem  key = {Math.random()} className="project-card" bg = '#E0EFF8' px = '10px' py = '25px'>




                      {/* visible on tablet,mobile screen description box */}


                      <Box flexDirection = 'column'bg ='rgb(225, 245, 254)' display = {{base : 'flex','1349px' : 'none'}}>

                                  <HStack justify = 'center'>

                                    <Heading className="project-title" fontSize={'23px'}>{el.title}</Heading>

                                    <Badge  fontSize={10} colorScheme={'green'}>{el.clone}</Badge>

                                  </HStack>

                                  <Box m = 'auto' display = 'flex' flexDirection = 'column' w = '80%' bg = 'bg="rgb(225, 245, 254)' borderRadius={'10px'} mt = '20px' p = '2'>

                                        <Text color = 'black' fontWeight={"500"} align = 'left'>Description : </Text>

                                        <Text className ="project-description" align = 'left'>{el.description}</Text>

                                        <Text mt = '5px' color ='black' fontWeight={"500"} align = 'left'>Tech Stack : </Text>

                                        <HStack mt = '10px' className="project-tech-stack" >

                                               {el.tech_stack.map((el) => {
                                               
                                               return<Box key = {Math.random(el)}>
                                               
                                                <Image w = {el.w} src = {el.skill}></Image>

                                                </Box>
                                                
                                              })}

                                        </HStack>

                                        <Text mt = '10px' color ='black' fontWeight={"500"} align = 'left'>Deployed Link : </Text>



                                        <HStack mt = '10px'>

                                            <Link isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png'></Image></Link>

                                            <ExternalLinkIcon zIndex = '2' />

                                            <Link isExternal href = {el.github}><Image bg = 'white' _hover = {{cursor : 'pointer'}} borderRadius={'10px'} w = '30px' src = 'github.png'></Image></Link>

                                            <ExternalLinkIcon zIndex = '2' />


                                          </HStack>




                                  </Box>


                              </Box>


                          {/* laptop andd iphone images */}

                        <HStack mt = {{base : '20px','1349px' : '0px'}} flexDirection = {{base : 'column','848px' : 'row'}} justify = {{base : 'center','1349px' : ''}}  position={'relative'}>

                                  <Image  zIndex={'2'} w = {{'base' : '95%','848px' : '42.4%'}} src = 'Laptop2.png'></Image>

                                  <Image  id = {style['Project-scr']} top = {{'base' : '5.6%','848px' : '22%' ,'1349px' :'16.4%'}} left = {{base : '12%','371px' : '13%','496px' : '14%','848px' : '23.2%','1011px' : '23.5%','1349px' :'5.1%'}} w = {{base : '70%','848px' : '30.9%'}} position={'absolute'} src = {el.pc_screenshot}></Image>

                                <HStack display = {{base : 'none','1349px' : 'flex'}} left = '15%' bottom = '21%' position={'absolute'} >

                                  <Link zIndex = '2' isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png' boxShadow = '2px 2px 10px black'></Image></Link>

                                  <ExternalLinkIcon  />

                                  <Link zIndex = '2' isExternal href = {el.github} ><Image bg = 'white' _hover = {{cursor : 'pointer'}} borderRadius={'10px'} w = '30px' src = 'github.png' boxShadow = '2px 2px 10px black'></Image></Link>

                                  <ExternalLinkIcon  />


                          </HStack>

                          <Box display = {{base : 'block','848px' : 'none'}} h = '30px' mb = '20px'></Box>


                            <Image  zIndex={'2'} w = {{base : '70%','848px' : '20%'}} src = 'Iphone.png'></Image>

                            <Image  top={{base : '40.5%','296px' : '40.3%','358px' : '40%','363px' : '39.6%','468px' : '39%','555px' :'38.5%','631px' : '38%','848px' : '2.5%'}} left = {{base : '26%','468px' :'27%','848px'  :'64.5%','1349px' : '46.1%'}} w ={{ base : '45%','848px' : '12.8%'}} position={'absolute'} src = {el.mobile_screenshot}></Image>
                       
                    
                    {/* -------------DEscription box---------------------- */}
                    
                    
                            <Box display = {{base : 'none','1349px' : 'block'}} bg="rgb(225, 245, 254)">

                                    <HStack>

                                      <Heading className="project-title"  fontSize={'23px'}>{el.title}</Heading>

                                      <Badge  fontSize={10} colorScheme={'green'}>{el.clone}</Badge>

                                    </HStack>
{/* ---------------bg ---------description needs to change */}
                                    <Box  bg='rgb(225, 245, 254)' borderRadius={'10px'} mt = '20px' p = '2'>

                                          <Text color = '#1A202C' fontWeight={"500"} align = 'left'>Description : </Text>

                                          <Text className ="project-description"  align = 'left'>{el.description}</Text>

                                          <Text mt = '5px' color = '#1A202C' align = 'left' fontWeight={"500"}>Tech Stack : </Text>

                                          <HStack mt = '10px' className="project-tech-stack">

                                             {
                                             
                                             el.tech_stack.map((el) =>  <Image key = {Math.random()} w = {el.w} src = {el.skill}></Image>)


                                            }

                                          </HStack>

                                          <Text mt = '10px' color = 'black' align = 'left' fontWeight={"500"}>Deployed Link : </Text>



                                          <HStack mt = '10px'>

                                              <Link className="project-deployed-link" isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png'></Image></Link>


                                              <Link className = "project-github-link" isExternal href = {el.github}><Image borderRadius = '40px' bg = 'white' _hover = {{cursor : 'pointer'}}  w = '30px' src = 'github.png'></Image></Link>

                                             


                                            </HStack>


                                    </Box>


                            </Box>


                        </HStack>



                  </GridItem>
                  
                  
                })}


                {/* for non responsive Projects */}



                {non_Responsive_Projects.map((el) =>

                  {
                  
                  return <GridItem  key = {Math.random()} className="project-card" bg = '#E0EFF8' px = '10px' py = '25px'>




                      {/* visible on tablet,mobile screen description box */}


                      <Box flexDirection = 'column' display = {{base : 'flex','1349px' : 'none'}}>

                                  <HStack justify = 'center'>

                                    <Heading className="project-title" fontSize={'23px'}>{el.title}</Heading>

                                    <Badge  fontSize={10} colorScheme={'green'}>{el.clone}</Badge>

                                  </HStack>

                                  <Box m = 'auto' display = 'flex' flexDirection = 'column' w = '80%' bg ='rgb(225, 245, 254)' borderRadius={'10px'} mt = '20px' p = '2'>

                                        <Text color = 'black' align = 'left' fontWeight={"500"}>Description : </Text>

                                        <Text className ="project-description" align = 'left'>{el.description}</Text>

                                        <Text mt = '5px' color ='black' fontWeight={"500"} align = 'left'>Tech Stack : </Text>

                                        <HStack mt = '10px' className="project-tech-stack">

                                               {el.tech_stack.map((el) => {
                                               
                                               return<Box key = {Math.random(el)}>
                                               
                                                <Image w = {el.w} src = {el.skill}></Image>

                                                </Box>
                                                
                                              })}

                                        </HStack>

                                        <Text mt = '10px' color = 'black' fontWeight={"500"} align = 'left'>Deployed Link : </Text>



                                        <HStack mt = '10px'>

                                            <Link isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png'></Image></Link>

                                            <ExternalLinkIcon zIndex = '2' />

                                            <Link isExternal href = {el.github}><Image visibility = {el.isOnGithub ?'visible' : 'hidden'}  borderRadius = '40px' bg = 'white' _hover = {{cursor : 'pointer'}} w = '30px' src = 'github.png'></Image></Link>

                                            <ExternalLinkIcon visibility = {el.isOnGithub ?'visible' : 'hidden'}  zIndex = '2' />


                                          </HStack>




                                  </Box>


                              </Box>


                          {/* laptop andd iphone images */}

                        <HStack mt = {{base : '20px','1349px' : '0px'}} flexDirection = {{base : 'column','848px' : 'row'}} justify = {{base : 'center','1349px' : ''}}  position={'relative'}>

                                  <Image  zIndex={'2'} w = {{'base' : '95%','848px' : '42.4%'}} src = 'Laptop2.png'></Image>

                                  <Image  id = {style['Project-scr']} top = {{'base' : '16%','848px' : '17.5%' ,'1349px' :'16.4%'}} left = {{base : '12%','371px' : '13%','496px' : '14%','848px' : '33.6%','1011px' : '33.8%','1349px' :'5.1%'}} w = {{base : '70%','848px' : '30.9%'}} position={'absolute'} src = {el.pc_screenshot}></Image>

                                <HStack display = {{base : 'none','1349px' : 'flex'}} left = '15%' bottom = '21%' position={'absolute'} >

                                  <Link zIndex = '2' isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png' boxShadow = '2px 2px 10px black'></Image></Link>

                                  <ExternalLinkIcon  />

                                  <Link zIndex = '2' isExternal href = {el.github} ><Image visibility = {el.isOnGithub ?'visible' : 'hidden'}  bg = 'white' _hover = {{cursor : 'pointer'}} borderRadius={'10px'} w = '30px' src = 'github.png' boxShadow = '2px 2px 10px black'></Image></Link>

                                  <ExternalLinkIcon visibility = {el.isOnGithub ?'visible' : 'hidden'}   />


                          </HStack>

                          <Box display = {{base : 'block','848px' : 'none'}} h = '30px' mb = '20px'></Box>


                            {/* <Image visibility = {el.isResponsive ? 'visible' : 'hidden'} zIndex={'2'} w = {{base : '70%','848px' : '20%'}} src = 'Iphone.png'></Image>

                            <Image visibility = {el.isResponsive ? 'visible' : 'hidden'} top={{base : '40.5%','296px' : '40.3%','358px' : '40%','363px' : '39.6%','468px' : '39%','555px' :'38.5%','631px' : '38%','848px' : '2.5%'}} left = {{base : '26%','468px' :'27%','848px'  :'64.5%','1349px' : '46.1%'}} w ={{ base : '45%','848px' : '12.8%'}} position={'absolute'} src = {el.mobile_screenshot}></Image>
                       
                     */}
                    {/* -------------DEscription box---------------------- */}
                    
                    
                            <Box display = {{base : 'none','1349px' : 'block'   }} bg="rgb(225, 245, 254)">

                                    <HStack>

                                      <Heading className="project-title" fontSize={'23px'}>{el.title}</Heading>

                                      <Badge  fontSize={10} colorScheme={'green'}>{el.clone}</Badge>

                                    </HStack>

                                    <Box   borderRadius={'10px'} mt = '20px' p = '2' bg="rgb(225, 245, 254)"  >

                                          <Text color = 'black' align = 'left' fontWeight={"500"}>Description : </Text>

                                          <Text className ="project-description" align = 'left'>{el.description}</Text>

                                          <Text mt = '5px' color = 'black' align = 'left' fontWeight={"500"}>Tech Stack : </Text>

                                          <HStack mt = '10px' className="project-tech-stack" >

                                             {
                                             
                                             el.tech_stack.map((el) =>  <Image key = {Math.random()} w = {el.w} src = {el.skill}></Image>)


                                            }

                                          </HStack>

                                          <Text mt = '10px' color = 'black' align = 'left' fontWeight={"500"}>Deployed Link : </Text>



                                          <HStack mt = '10px'>

                                              <Link className="project-deployed-link" isExternal href = {el.netlify}><Image _hover = {{cursor : 'pointer'}} border = '2px solid' borderRadius={'10px'} bg = 'white' w = '50px' src = 'Netlify logo.png'></Image></Link>


                                              <Link className = "project-github-link" isExternal href = {el.github}><Image visibility = {el.isOnGithub ?'visible' : 'hidden'} borderRadius = '40px' bg = 'white' _hover = {{cursor : 'pointer'}} w = '30px' src = 'github.png'></Image></Link>

                                           


                                            </HStack>


                                    </Box>


                            </Box>


                        </HStack>


                    



                  </GridItem>

                                          })}







            </SimpleGrid>


            </Box>

    </Box>
  )
}

export default Projects