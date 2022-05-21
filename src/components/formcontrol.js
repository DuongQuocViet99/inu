import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";

export default function FormControlS({ children, name, formLabel, formHelperText, formErrorMessage }) {
  return (
    <>
      <FormControl fontFamily='Quicksand'>
        <FormLabel
          fontSize='xs'
          color='adobe.5'
          htmlFor={ name }
          fontWeight='600'
        >
          { formLabel?.toUpperCase() }
        </FormLabel>
        { children }
        { formHelperText &&
          <FormHelperText
            fontSize='xs'
            color='adobe.6'
            fontWeight='600'
          >
            { formHelperText }
          </FormHelperText> 
        }
        <FormErrorMessage color='coolors.3'>
          { formErrorMessage }
        </FormErrorMessage>
      </FormControl>
    </>
  );
}