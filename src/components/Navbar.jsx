import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Divider, Flex, Heading, Hide, IconButton, Menu, MenuButton, MenuItem, MenuList, Show, Spacer, useColorMode, useColorModeValue, useDisclosure, useMediaQuery, VisuallyHidden } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon, ChevronUpIcon, CloseIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, MoonIcon, PhoneIcon, RepeatIcon, SearchIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons'
import Sidebar from './Sidebar ';


const Navbar = () => {
  const [isNotSmallerScreen] = useMediaQuery("min-width(600px");
  const { colorMode, toggleColorMode } = useColorMode();
  const [iconVisible, setIconVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex minWidth='max-content' justifyContent='space-evenly' alignItems='center' gap='2' padding='15px'>
            {/* for below medium(850) screen size this will be visible and above that it will be hidden */}

              <Show breakpoint='(max-width: 850px)'>         
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label='Options'
                      icon={ iconVisible ? <HamburgerIcon onClick={()=> setIconVisible(!iconVisible)} /> :  <CloseIcon onClick={()=> setIconVisible(!iconVisible)} />}
                      variant='outline'
                    />
                    <MenuList>
                      <MenuItem icon={<AddIcon />} command='⌘T'>
                        Inspiration
                      </MenuItem>
                      <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        Find Work
                      </MenuItem>
                      <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Learn Design
                      </MenuItem>
                      <MenuItem icon={<EditIcon />} command='⌘O'>
                        Hire Designers
                      </MenuItem>
                    </MenuList>
                  </Menu>
              </Show> 
        {/* for above medium(850) screen size this will be visible and below that it will be hidden  */}
              <Hide below='md'>
                  <Box p='2'>
                    <Heading size='sm'>
                        <Sidebar />                    
                    </Heading>
                  </Box>
                    <Flex marginLeft='25px' >
              
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                variant="ghost"
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                Inspiration {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton>
                            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>

                        <Box p='2'>
                          <p size='md'>Find Work</p>
                        </Box>
                        <Box p='2'>
                          <p size='md'>Learn Design</p>
                        </Box>
                        <Box p='2'>
                          <p size='md'>Hire Designers</p>
                        </Box>
                    </Flex>
              </Hide>
                      <Spacer />

              <ButtonGroup gap='2'>
                    <Button colorScheme='teal'  _hover={{ bg: '#ed64a6' }} variant='ghost'>
                        Sign Up
                    </Button>
                    <Button colorScheme='teal' _hover={{ bg: '#ed64a6' }} variant='ghost'>
                        Sign Up
                    </Button> 

                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon/>  : <SunIcon/>} 
                    </Button>     
              </ButtonGroup>
          
      </Flex>   
                <Divider />
    </>
  )
}

export default Navbar;
