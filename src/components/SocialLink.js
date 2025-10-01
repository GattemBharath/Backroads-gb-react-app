import React from "react";
import { socialLinks } from "../data";

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, icon, href } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
