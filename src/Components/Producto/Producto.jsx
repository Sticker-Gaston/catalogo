import React from 'react'
import { VStack, Heading, Flex, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Image } from '@chakra-ui/react'
import * as motion from "framer-motion/client"

const Producto = ({nombre, detalle, imagen}) => {
    return(
        <VStack w="100%" justifyContent="center">
            <SimpleGrid w="90%" h="100%" marginTop="20px" alignItems="stretch" spacing="4" templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Card>
                  <Flex width="100%" height="300px" overflow="hidden" alignItems="center">
                    <Image src={`https://1drv.ms/i/s!${imagen}?embed=1`} alt={nombre} width="100%" height="fit-content"/>
                  </Flex>
                  <CardHeader padding="10px 20px">
                    <Heading size='md'>{nombre}</Heading>
                  </CardHeader>
                  <CardBody padding="10px 20px">
                    <Text>{detalle}</Text>
                  </CardBody>
                  <CardFooter padding="10px 20px">
                  </CardFooter>
                </Card>
              </motion.div>
            </SimpleGrid>
        </VStack>
    )
}

export { Producto }