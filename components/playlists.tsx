import { Box, List } from "@chakra-ui/layout";
import PlaylistItem from "./playlistItem";

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Playlists = () => {
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
          <PlaylistItem playlist={playlist} key={playlist} />
        ))}
      </List>
    </Box>
  );
};

export default Playlists;
