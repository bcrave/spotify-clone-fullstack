import { Box, List } from "@chakra-ui/layout";
import PlaylistItem from "./playlistItem";

import { usePlaylist } from "../lib/hooks";

const Playlists = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      height="62%"
      overflowY="auto"
      paddingY="20px"
      sx={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          marginBlock: "25px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.600",
          borderRadius: "100vw",
        },
      }}
    >
      <List spacing={2}>
        {playlists.map((playlist) => (
          <PlaylistItem playlist={playlist} key={playlist.id} />
        ))}
      </List>
    </Box>
  );
};

export default Playlists;
