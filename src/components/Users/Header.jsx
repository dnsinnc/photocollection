import React from "react";


export function Header({ catsSelected, setCats, search }) {

   const cats = [
      { "name": "Всі" },
      { "name": "Море" },
      { "name": "Гори" },
      { "name": "Архітектура" },
      { "name": "Місто" }
   ]

   return (
      <>
         <h1>Моя колекція фотографій</h1>
         <div className="top">
            <ul className="tags">
               {
                  cats.map((obj, i) =>
                  (<li
                     onClick={() => setCats(i)}
                     className={catsSelected === i ? 'active' : ""}>
                     {obj.name}
                  </li>
                  ))
               }
            </ul>
            <input onChange={search} className="search-input" placeholder="Пошук за назвою" />
         </div>

      </>
   )
}