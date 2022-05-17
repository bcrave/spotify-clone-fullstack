import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Artists = ({ artists }) => {
  return (
    <Box color="white" paddingX="40px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">
          Top artist this month
        </Text>
        <Text fontSize="md">Only visible to you</Text>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <Box paddingX="10px" width="20%" key={artist.id}>
            <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
              <Image
                src="https://placekitten.com/300/300"
                borderRadius="100%"
              />
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="x-small">Artist</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Artists;
