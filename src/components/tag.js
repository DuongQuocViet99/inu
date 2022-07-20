import { Tag } from "@chakra-ui/react";
import { forwardRef } from "react";

export const MemberTagName = forwardRef(({ children, ...rest }, ref ) =>
  <Tag
    ref={ ref }
    p={ 1 }
    w='max'
    rounded='sm'
    color='white'
    bg='adobe.10'
    fontSize='xs'
    fontWeight='700'
    fontFamily='Quicksand'
    { ...rest }
  >
    { children }
  </Tag>
)