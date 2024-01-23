import { type FC } from 'react';
import { linkStyle, navStyle } from './TopNavBar.style';
import { Link, useLocation } from 'wouter';

type TopNavBarLinkType = { href: string; text: string };

export type TopNavBarPropsType = {
  links: [TopNavBarLinkType, TopNavBarLinkType, TopNavBarLinkType];
};

const TopNavBar: FC<TopNavBarPropsType> = (props) => {
  const { links } = props;
  const location = useLocation();

  return (
    <nav className={navStyle}>
      {links.map((link) => {
        const { text, href } = link;

        return (
          <Link
            aria-current={location[0] === href ? 'page' : undefined}
            key={text}
            href={href}
            aria-disabled={href === '#' ? true : undefined}
            className={linkStyle}
            tabIndex={href === '#' ? -1 : undefined}
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default TopNavBar;
