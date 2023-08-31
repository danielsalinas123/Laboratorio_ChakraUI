import {Box, Button, Flex, Heading, Stack} from "@chakra-ui/react"
import bgImage from "../images/banner-desktop.jpg"

export default function Header()
{
   return (
    <Box
    h="40vh"
    bg="gray"
    bgImage={`url(${bgImage})`}
    bgRepeat="no-repeat"
    bgSize="cover"
    >

        <Flex
            direction="column"
            align="center"
            justify="center"
            h="100%"
            bg="rgb(0 0 0 / 50%)"
            padding={["0 10%",null,"0 20%"]}
            >
            <Heading
                color="white"
                textTransform="uppercase"
                textAlign="center"
                fontWeight="light"
                letterSpacing="5px"
            >
                Domina el Terreno
            </Heading>

                <Stack
                    direction={{base:"column",md:"row"}}
                    width={["100%",null,"auto"]}
                    spacing="40px"
                    marginTop="30px"
                    >
                    <Button
                        variant="outline"
                        size="lg"
                        textTransform="uppercase"
                        fontWeight="light"
                        borderRadius="0"
                        color="white"
                        letterSpacing="1px"
                        _hover={{
                        color:"black",
                        bg:"white"
                        }}
                    >
                        Ver Detalles
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        textTransform="uppercase"
                        fontWeight="light"
                        borderRadius="0"
                        color="white"
                        letterSpacing="1px"
                        _hover={{
                        color:"black",
                        bg:"white"
                        }}
                    >
                        Ver Video
                    </Button>
                </Stack>
        </Flex>

    </Box>);
}