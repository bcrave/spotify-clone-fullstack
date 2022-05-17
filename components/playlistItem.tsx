import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListItem } from "@chakra-ui/layout";

const PlaylistItem = ({ playlist: { name, id } }) => {
  return (
    <ListItem paddingX="20px">
      <LinkBox>
        <NextLink
          href={{
            pathname: "/playlist/[id]",
            query: { id },
          }}
          passHref
        >
          <LinkOverlay>{name}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default PlaylistItem;
