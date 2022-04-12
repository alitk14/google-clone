import React , { useEffect , useState} from 'react'
import { Links } from './Links'
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
export const Search = () => {
  return (
    <div>Search
      <Links />
    </div>
  )
}
