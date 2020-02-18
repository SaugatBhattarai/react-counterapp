import React from "react";

// const NavBar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar{" "}
//         <span className="badge badge-pill badge-secondary">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

//Props with object destructuring
const NavBar = ({ totalCounters }) => {
  console.log(" NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
