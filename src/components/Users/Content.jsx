import React from "react";
import { Spinner } from './Spinner';
import { Collections } from './Collections'




export function Content({ isLoading, collections, searchValue }) {

   return (
      <div className="content">
         {isLoading
            ? <Spinner />
            : collections.length > 0 ? (collections
               .filter((obj) => {
                  const name = obj.name.toLowerCase();
                  return name.includes(searchValue.toLowerCase())
               })
               .map((obj, index) => (
                  <Collections key={index} name={obj.name} images={obj.photos} />
               ))) : <h2 className="text-info">Тут поки порожньо...</h2>
         }
      </div>
   )
}