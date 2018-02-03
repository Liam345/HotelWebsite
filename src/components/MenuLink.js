import Link from "gatsby-link";
import React from "react";

const MenuLink = (props) => (
<Link to={props.to} style={{ display:`inline-block`, textDecoration:`none`, text:'red' }}> 
{props.children}
</Link>
);

export default MenuLink;


