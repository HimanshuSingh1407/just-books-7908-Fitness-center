import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import passArray from "../../assets/storeData/passData";
import Epass from "../../Components/store/Epass";
import giftArray from "../../assets/storeData/giftData";
import Gift from "../../Components/store/Gift";

const Store = () => {
  return (
    <>
      <Container bgColor={"gray.100"} maxW="100%" border={"1px solid white"}>
        <Center>
          <Box>
            <Stack
              textAlign={"left"}
              marginTop="20"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Heading p={"1"} m={"1"}>
                FB Plus Passes
              </Heading>
              <Text p={"1"} m={"1"} fontSize="17">
                Passes give you full access to everything FB Plus has to offer,
                without a long-term subscription. Choose a pass that fits your
                budget and your schedule, and extend your access with another
                pass at any time. Multiple passes can be purchased at once for
                longer access.
              </Text>
              <Text p={"1"} m={"1"}>
                Note: Passes cannot be used at the same time as a monthly or
                yearly FB Plus subscription.
              </Text>
            </Stack>
            <Stack
              marginTop="8"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
              marginBottom={"20"}
            >
              <Grid templateColumns={"repeat(4, 1fr)"} gap="2">
                {passArray.map((el, index) => (
                  <Epass
                    key={index}
                    image={el.images}
                    day={el.day}
                    para={el.para}
                    price={el.price}
                  />
                ))}
              </Grid>
            </Stack>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"gray.100"} maxW="100%" border={"1px solid white"}>
        <Center>
          <Box>
            <Stack
              textAlign={"left"}
              marginTop="20"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Heading p={"1"} m={"1"}>
                Fitness Blender eGift Cards
              </Heading>
              <Text p={"1"} m={"1"} fontSize="17">
                Give the gift of health and fitness with Fitness Blender eGift
                Cards. Send an electronic card via email and the recipient can
                log in, redeem your gift and buy any of our Workout Programs,
                calendar-based Meal Plans, or a membership to FB Plus!
              </Text>
              <Text p={"1"} m={"1"}>
                Fitness Blender eGift Cards can only be used on
                fitnessblender.com.
              </Text>
            </Stack>
            <Stack
              marginTop="8"
              maxW="80%"
              marginLeft="auto"
              marginRight="auto"
              marginBottom={"20"}
            >
              <Grid templateColumns={"repeat(4, 1fr)"} gap="2">
                {giftArray.map((el, index) => (
                  <Gift key={index} image={el.images} price={el.price} />
                ))}
              </Grid>
            </Stack>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"white"} maxW="100%" marginTop={"70px"}>
        <Center>
          <Box>
            <Flex gap={"2"}>
              <img
                width={"50%"}
                src="https://cloudfront.fitnessblender.com/assets/img/workout-complete/shirts-20200224.jpg"
                alt="cloths"
              />
              <Stack textAlign={"left"}>
                <Heading marginBottom={"2"} p="4" fontWeight="400" size={"2xl"}>
                  Fitness Blender Gear
                </Heading>
                <Text fontSize={"20"} p="4">
                  NOVEMBER 2020 UPDATE
                </Text>
                <Text p="4" fontSize={"xl"} fontWeight="100">
                  New Fitness Blender gear and clothing are still in the works,
                  but as you might suspect, COVID significantly impacted our
                  original plans. Unfortunately, we still don't have a solid
                  timeline we can share, but we'll keep you up-to-date as the
                  situation changes.
                </Text>
                <Text p="4" fontSize={"xl"} fontWeight="100">
                  We intend to re-launch starting with casual clothing,
                  following up with gear and other apparel if all goes well. If
                  you've already filled out the gear survey, thank you! If not,
                  it only takes about two minutes and will let us know what is
                  most important to you.
                </Text>
                <Text p="4" size={"xl"} color="blue">
                  Tell us what gear you'd like.
                </Text>

              </Stack>
            </Flex>
          </Box>
        </Center>
      </Container>

      <Container bgColor={"#e6f0f8"} maxW="100%">
        <Center>
          <Stack marginTop={"100px"} spacing="8" marginBottom={'80px'}>
            <Heading>Other Shopping Options</Heading>
            <Text>
              Explore Workout Programs, Meal Plans, and FB Plus memberships.
            </Text>
            <Flex gap={"3"}>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                PROGRAMS
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                MEAL PLANS
              </Button>
              <Button
                paddingX={"5rem"}
                bgColor="blue.500"
                fontSize={"xs"}
                fontWeight="600"
                color={"white"}
              >
                FB PLUS
              </Button>
            </Flex>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Store;