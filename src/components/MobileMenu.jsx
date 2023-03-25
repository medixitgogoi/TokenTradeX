import React from 'react';
import {BiMenu} from "react-icons/bi";
import {useDisclosure} from "@chakra-ui/react";

const MobileMenu = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        top={'2'}
        left={'2'}
        pos={'fixed'}
        p={'0'}
        colorScheme={'green'}
        w={'5'}
        zIndex={'overlay'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>STREAM RAY</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'green'}>
                <Link to={'/upload'}>Upload video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'green'} variant={'solid'}>
                <Link to={'/login'}>LogIn</Link>
              </Button>
              <Button onClick={onClose} variant={'outline'}>
                <Link to={'/signup'}>SignUp</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};


export default MobileMenu;
