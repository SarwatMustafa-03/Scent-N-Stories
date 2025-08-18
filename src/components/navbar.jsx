import React from "react";  
function Navbar() {
    const navList=["Home","Azadi Sell","Oud","Gifting","Less Than 1500"]
    return (
         <>
      <nav className="Navbar" >
         <div className="logo">Scent n Stories</div>
         <ul className="nav-list"  text-color="grey" background-color="black" display="flex" justify-content="space-between" align-items="center">
               {navList.map((item, index) => (
                 <li key={index} className="nav-item">{item}</li>
              ))}
          </ul>
         </nav>
     </>
    )
}

export default Navbar;







