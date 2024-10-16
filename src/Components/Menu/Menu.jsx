import { Flex, Heading, Highlight, IconButton, Image, useBreakpointValue, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";

const Menu = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    // Detecta el scroll
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
            <Flex
                position={isScrolled ? 'fixed' : 'relative'}
                top="0"
                width="100%"
                height={isScrolled ? '80px' : '100vh'}
                bg={isScrolled ? 'blue.500' : 'blue'}
                alignItems="center"
                justifyContent={isScrolled ? 'space-between' : 'center'}
                padding={isScrolled ? '0 50px' : '0'}
                zIndex="1000"
                transition="all 0.5s ease"
            >
                <Flex
                    direction={isScrolled ? 'row' : 'column'}
                    alignItems="center"
                    justifyContent="center"
                    width={isScrolled ? 'auto' : '100%'}
                >
                    <Image
                        borderRadius="full"
                        boxSize={isScrolled ? '50px' : '300px'}
                        src="public/favicon.svg"
                        alt="Sticker Gaston"
                        transition="all 0.5s ease"
                    />
                    <Heading lineHeight='tall' size={isScrolled ? 'lg' : '4xl'} mt={isScrolled ? '0px' : '50px'} ml={isScrolled ? '15px' : '0px'}>
                        <Highlight query='GASTON' styles={{ px: '5', py: '1', rounded: 'full', bg: 'teal.100', }} >
                            STICKER GASTON
                        </Highlight>
                    </Heading>
                    <Flex
                        mt={isScrolled ? '0' : '50px'}
                        width={isScrolled ? 'auto' : '40%'}
                        alignItems="center"
                        justifyContent={isScrolled ? 'flex-end' : 'space-evenly'}
                    >
                        <IconButton isRound='true' icon={<MdOutlineWhatsapp />} fontSize={isScrolled ? '35px' : '60px'} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<RiInstagramLine />} fontSize={isScrolled ? '35px' : '60px'} color="" bg="" _hover={{ bg:"" }}></IconButton>
                    </Flex>
                </Flex>
            </Flex>
    )
}

export { Menu }