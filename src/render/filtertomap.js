export const FilterToMap = ({ data, condition, render }) =>
  <>
    { data?.filter( condition  ).map(( i, k ) => render( i, k )) }
  </>