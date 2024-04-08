import { Box, Center, Container, Heading, SimpleGrid, Stack, Text, Image, VStack } from "@chakra-ui/react";
import { FaCloud, FaSun, FaUmbrella, FaWind } from "react-icons/fa";

const weatherData = [
  { day: "Mon", icon: <FaSun />, tempHigh: 76, tempLow: 68 },
  { day: "Tue", icon: <FaCloud />, tempHigh: 71, tempLow: 66 },
  { day: "Wed", icon: <FaUmbrella />, tempHigh: 65, tempLow: 60 },
  { day: "Thu", icon: <FaCloud />, tempHigh: 70, tempLow: 64 },
  { day: "Fri", icon: <FaWind />, tempHigh: 75, tempLow: 62 },
  { day: "Sat", icon: <FaSun />, tempHigh: 80, tempLow: 70 },
  { day: "Sun", icon: <FaSun />, tempHigh: 85, tempLow: 74 },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack>
        <Heading size="2xl" mb={4}>
          Weather
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhciUyMHNreXxlbnwwfHx8fDE3MTI1Mzk3NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather Icon" />
        <Text fontSize="5xl">Sunny</Text>
        <Text fontSize="3xl" mb={8}>
          72°F
        </Text>
        <SimpleGrid columns={7} spacing={4}>
          {weatherData.map((day) => (
            <Stack key={day.day} align="center">
              <Text fontSize="lg">{day.day}</Text>
              <Center boxSize="50px" bg="gray.200" borderRadius="md">
                {day.icon}
              </Center>
              <Text fontSize="sm">{day.tempHigh}°</Text>
              <Text fontSize="sm" color="gray.500">
                {day.tempLow}°
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
