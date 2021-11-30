import React from "react";

function Card(props) {
  return (
    <div className="border neeto-ui-shadow-s px-3.5 py-4 mb-4">
      {props.children}
    </div>
  );
}
function Header(props) {
  return <>{props.children}</>;
}
function Body(props) {
  return (
    <p className="neeto-ui-text-gray-600 mb-3 pb-3 border-b-2 border-gray-100">
      {props.children}
    </p>
  );
}
function Footer(props) {
  return <>{props.children}</>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
