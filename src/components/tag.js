import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

export default function MemberTag({ children }) {
  return (
    <>
      <Tag
        p={ 1 }
        rounded='sm'
        color='white'
        bg='adobe.10'
        fontSize='xs'
        fontWeight='700'
        fontFamily='Quicksand'
      >
        <TagLabel>{ children }</TagLabel>
        <TagCloseButton _focus />
      </Tag>
    </>
  );
}