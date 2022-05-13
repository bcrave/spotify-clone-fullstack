import NextImage from "next/image";
import { Box, Center, Divider } from "@chakra-ui/layout";

import NavMenu from "./navMenu";
import MusicMenu from "./musicMenu";
import Playlists from "./playlists";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/spotif.svg" height={60} width={120} />
        </Box>
        <NavMenu />
        <MusicMenu />
        <Divider color="gray.800" />
        <Playlists />
      </Box>
    </Box>
  );
};

export default Sidebar;
