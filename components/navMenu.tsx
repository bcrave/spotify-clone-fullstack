import { Box, List } from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md";
import MenuItem from "./menuItem";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const NavMenu = () => {
  return (
    <Box marginBottom="30px">
      <List spacing={2}>
        {navMenu.map((menuItem) => (
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

export default NavMenu;
