import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";

export const FormControlC = ({ children, name, formLabel, formHelperText, formErrorMessage }) =>
  <FormControl fontFamily='Quicksand'>
    <FormLabel
      fontSize='xs'
      color='adobe.11'
      htmlFor={ name }
      fontWeight='700'
    >
      { formLabel?.toUpperCase() }
    </FormLabel>
    { children }
    { formHelperText &&
      <FormHelperText
        fontSize='xs'
        color='adobe.4'
        fontWeight='600'
      >
        { formHelperText }
      </FormHelperText> 
    }
    <FormErrorMessage color='coolors.3'>
      { formErrorMessage }
    </FormErrorMessage>
  </FormControl>