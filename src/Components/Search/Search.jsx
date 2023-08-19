import React, { useContext, useRef } from 'react'
import Context from '../../Context'
import './Search.css'

export default function Search() {

  const { itemList , setItem } = useContext(Context);
  const inputRef = useRef("");

  const serachItem = () => {
    const input = (inputRef.current.value).toLowerCase();
    const filterItems = [...itemList].filter((element) => (element.name.toLowerCase()).includes(input));
    setItem(filterItems);
  }

  const breakSearch = () => {
    inputRef.current.value = "";
    setItem(itemList);
  }

  return (
      <form method='get' className='searchForm'>
        <input ref={inputRef} onChange={()=>serachItem()} type="text" placeholder='Search ...' name='search' form='searchForm'/>
        <button onClick={()=>breakSearch()} type="button" className="btn-close fs-4" aria-label="Close" form='searchForm'></button>
      </form>
  )
}
