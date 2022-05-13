import { Box, List } from "@chakra-ui/layout";
import { MdPlaylistAdd, MdFavorite } from "react-icons/md";
import MenuItem from "./menuItem";

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const MusicMenu = () => {
  return (
    <Box marginBottom="20px">
      <List spacing={2}>
        {musicMenu.map((menuItem) => (
          <MenuItem
            name={menuItem.name}
            icon={menuItem.icon}
            route={menuItem.route}
            key={menuItem.name}
          />
        ))}
      </List>
    </Box>
  );
};

export default MusicMenu;
