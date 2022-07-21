import useSWR from "swr";

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json());

export default function useProject ( projectId = '' ) {
  const { data, error } = useSWR(`http://localhost:3001/project/${ projectId }`, fetcher )

  return {
    project: data,
    isProjectLoading: !error && !data,
    isProjectError: error
  }
}