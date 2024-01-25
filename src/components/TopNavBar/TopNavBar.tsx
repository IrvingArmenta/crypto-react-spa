import { type FC } from 'react';
import { linkStyle, navStyle } from './TopNavBar.style';
import { Link, useLocation } from 'wouter';

type TopNavBarLinkType = { href: string; text: string };

export type TopNavBarPropsType = {
  links: [TopNavBarLinkType, TopNavBarLinkType, TopNavBarLinkType];
};

/**
 * Renders a top navigation bar with accessible links and active link highlighting.
 *
 * @remarks
 *   - Leverages wouter `useLocation` hook for active link detection.
 *   - Handles disabled links appropriately for screen readers and keyboard navigation.
 *   - Applies appropriate ARIA attributes for clear navigation context.
 *
 * @param {TopNavBarPropsType} props - Component props
 * @prop {Link[]} links - An array of link objects, each containing text and href properties.
 */
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
