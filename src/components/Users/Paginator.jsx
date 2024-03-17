import React from "react";


 export function Paginator({ setPageSelected, pageSelected }) {

   return (
      <ul className="pagination">
         {[...Array(3)].map((_, i) => (
            <li
               onClick={() => setPageSelected(i + 1)}
               className={pageSelected === i + 1 ? 'active' : ""}
            >{i + 1}
            </li>
         ))
         }
      </ul>
   )
   
}