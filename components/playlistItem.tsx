import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListItem } from "@chakra-ui/layout";

const PlaylistItem = ({ playlist }) => {
  return (
    <ListItem paddingX="20px">
      <LinkBox>
        <NextLink href="/" passHref>
          <LinkOverlay>{playlist}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default PlaylistItem;
