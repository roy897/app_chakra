import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  Stack,
  RadioGroup,
  Button,
  useDisclosure,
  ButtonGroup,
  IconButton,
  
} from '@chakra-ui/react'

const Sidebar  = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('left')


  return (
    <>
    <RadioGroup defaultValue={placement} onChange={setPlacement}>
      
    </RadioGroup>
    <Button colorScheme='teal'  _hover={{ bg: 'transparent' }} variant='ghost' onClick={onOpen}>
         Logo
    </Button>
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Logo</DrawerHeader>
        <DrawerBody>
        <Button colorScheme='teal' _hover={{ bg: 'skyblue' }} variant='ghost'>
           Home
         </Button> <br /><br />
         <Button colorScheme='teal' _hover={{ bg: 'skyblue' }} variant='ghost'>
           Trending
         </Button> <br /> <br />
         <Button colorScheme='teal' _hover={{ bg: 'skyblue' }} variant='ghost'>
           Explore
         </Button> <br /> <br />

         <Button colorScheme='teal' _hover={{ bg: 'skyblue' }} variant='ghost'>
           Favourites
         </Button> <br /><br />
         <Button colorScheme='teal' _hover={{ bg: 'skyblue' }} variant='ghost'>
           Setting
         </Button>
          {/* <Button leftIcon={<MdBuild/>} colorScheme='pink' variant='solid'>
              Settings
          </Button> */}
          
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  
  )
}

export default Sidebar ;
