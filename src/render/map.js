export const Map = ({ data, render }) => 
  <>
    { data?.map(( i, k ) => render( i, k )) }
  </>