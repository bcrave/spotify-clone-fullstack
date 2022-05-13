import NextLink from "next/link";
import { LinkBox, ListItem, LinkOverlay, ListIcon } from "@chakra-ui/layout";

const MenuItem = ({ name, icon, route }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px">
      <LinkBox>
        <NextLink href={route} passHref>
          <LinkOverlay>
            <ListIcon as={icon} color="white" marginRight="20px" />
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
