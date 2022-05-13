import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListItem } from "@chakra-ui/layout";

const PlaylistItem = ({ playlist: { name } }) => {
  return (
    <ListItem paddingX="20px">
      <LinkBox>
        <NextLink href="/" passHref>
          <LinkOverlay>{name}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default PlaylistItem;
