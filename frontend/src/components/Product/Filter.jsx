import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>Filter</div>
  )
}

export default Filter