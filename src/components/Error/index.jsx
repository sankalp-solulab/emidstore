import React from "react";
export const Page404 = ({ location }) => (
   <div className="top-container v-grid-container" >
    <h2 style={{marginTop:"100px"}}>
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);
