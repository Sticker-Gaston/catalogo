import React, { useState } from 'react'
import { VStack, Heading, Flex, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text } from '@chakra-ui/react'
import { Producto } from '../Producto/Producto'
import * as motion from "framer-motion/client"

const Grilla = () => {

    const [productos, setProductos] = useState([
        {
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        },{
            nombre: 'El Jesus de Marvel',
            detalle: 'Calco de 7x5cm',
            imagen: 'AmqbBQymArqLblBO4KN-bcgSWIg'
        },{
            nombre: 'A la grande le puse Cuca',
            detalle: 'Calco de 5x7cm',
            imagen: 'AmqbBQymArqLbMHCmw0T53_d_Ig'
        },{
            nombre: 'Goku con esferas',
            detalle: 'Calco de 15x7cm',
            imagen: 'AmqbBQymArqLdVEzyklYZmlTXJs'
        }
    ]);

    const animacionGrilla = {
        offscreen: {
          y: 100
        },
        onscreen: {
          y: 50,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
          }
        }
      };
      
    return(
        <VStack w="100%" justifyContent="center">
            <SimpleGrid w="90%" spacing="2" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                {productos.map((producto, index) => (
                    <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 1 }}
                    >
                        <motion.div variants={animacionGrilla}>
                            <Producto key={index} nombre={producto.nombre} detalle={producto.detalle} imagen={producto.imagen} />
                        </motion.div>
                    </motion.div>
                ))}
            </SimpleGrid>
        </VStack>
    )
}

export { Grilla }