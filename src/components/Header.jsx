import { Button, IconButton, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Flex bgColor={"#fff"} shadow={'lg'} p={'2'} justifyContent={'space-between'} alignItems={"center"} px={10}>

      <Flex
        fontSize={{ base: "2xl", lg: '2xl' }}
        color={"#25274D"}
      >
        <strong>TokenTradeX</strong>
      </Flex>

      <Flex display={{ base: "none", lg: "flex" }}>
        <Button variant={'unstyled'} fontSize='xl' color={"#25274D"} mr={3} >
          <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} fontSize='xl' color={"#25274D"} mr={3}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} fontSize='xl' color={"#25274D"} >
          <Link to="/coins">Coins</Link>
        </Button>
      </Flex>

      <IconButton
        display={{ base: "flex", lg: "none" }}
        bgColor={"#C1C8E4"}
        variant='outline'
        colorScheme='#25274D'
        aria-label='Call Sage'
        transition={'all 0.25s'}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        fontSize='20px'
        onClick={() => setToggleMenu(true)}
        icon={<BiMenu />}
      />

      {toggleMenu && (
        <Flex
          display={{ base: "flex", lg: "none" }}
          flexDirection={"column"}
          w={"100vw"}
          h={"100vh"}
          bgColor={"#e5e7eb"}
          zIndex={20}
          pos={"fixed"}
          top={0}
          left={0}
          overflowY={"auto"}
        >
          <Flex
            justifyContent={'flex-end'}
          >
            <IconButton
              mt={2}
              mr={2}
              variant='ghost'
              bgColor={"#C1C8E4"}
              colorScheme='#25274D'
              aria-label='Close Button'
              fontSize={25}
              icon={<AiOutlineCloseCircle />}
              onClick={() => setToggleMenu(false)}
            />
          </Flex>

          <Flex
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button variant={'unstyled'} fontSize='2xl' color={"#25274D"} mr={3} onClick={() => setToggleMenu(false)} >
              <Link to="/">Home</Link>
            </Button>
            <Button variant={'unstyled'} fontSize='2xl' color={"#25274D"} mr={3} onClick={() => setToggleMenu(false)}>
              <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={'unstyled'} fontSize='2xl' color={"#25274D"} onClick={() => setToggleMenu(false)} >
              <Link to="/coins">Coins</Link>
            </Button>
          </Flex>

        </Flex>
      )
      }

    </Flex>
  )
}

{/* <BiMenu ref={btnRef} onClick={onOpen} fontSize={27} color={"#25274D"} /> */ }

{/* 
<Box display={{base: "revert", lg: "none"}}>
  <BiMenu fontSize={27} color={"#5AB9EA"} onClick={(prev)=>settoggleMeu(!prev)} />
</Box> */}

{/* 
      function DrawerExample() {
      const {isOpen, onOpen, onClose} = useDisclosure()
      const btnRef = React.useRef()

      return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      )
} */}


{/* <Box display={{ base: "revert", lg: "none" }}>

        <MobileMenu />

        <Button onClick={() => setToggleMenu(true)} bgColor={"#5AB9EA"}>
          <BiMenu ref={btnRef} onClick={onOpen} fontSize={27} color={"#25274D"} />
        </Button>

        {toggleMenu &&
          (
            <>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent h={"full"} w={"full"} bgColor={"#25274D"} flex flexDirection={'column'} alignItems={"center"} gap={2}>
                  <DrawerCloseButton color={"#5AB9EA"} />
                  <Button variant={'ghost'} fontSize='2xl' color={"#5AB9EA"} mr={3}>
                    <Link to="/">Home</Link>
                  </Button>
                  <Button variant={'ghost'} fontSize='2xl' color={"#5AB9EA"} mr={3}>
                    <Link to="/exchanges">Exchanges</Link>
                  </Button>
                  <Button variant={'ghost'} fontSize='2xl' color={"#5AB9EA"}>
                    <Link to="/coins">Coins</Link>
                  </Button>
                </DrawerContent>
              </Drawer>
            </>
          )
        }

      </Box>  */}

export default Header;
