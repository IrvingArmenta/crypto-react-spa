import { IconNamesType } from '@/icons';
import {
  iconsNavBarWrapStyle,
  iconsNavBarListStyle
} from './IconsNavBar.style';
import { FC } from 'react';
import { SvgIcon } from '..';
import { css } from '@style/css';

export type IconsNavBarLinkType = {
  text: string;
  href: string;
  icon: IconNamesType;
};

type IconsNavBarPropsType = {
  links: IconsNavBarLinkType[];
};

/**
 * Renders a navigation bar with clickable icons and text links.
 *
 * @remarks
 *   - Visually distinguishes disabled links with lighter font weight and opacity.
 *   - Throws an error if no links are provided.
 *
 * @param {IconsNavBarPropsType} props - Component props
 * @prop {Link[]} links - An array of link objects, each containing text, href, and icon properties.
 */
const IconsNavBar: FC<IconsNavBarPropsType> = (props) => {
  const { links } = props;

  if (links.length === 0) {
    throw new Error('IconsNavBar: links need to have at least one item');
  }

  return (
    <nav className={iconsNavBarWrapStyle}>
      <ul className={iconsNavBarListStyle}>
        {links.map((link) => {
          const { text, href, icon } = link;
          return (
            <li key={text}>
              <a
                href={href}
                aria-disabled={href === '#' ? true : undefined}
                className={css({ fontWeight: href === '#' ? 400 : 700 })}
              >
                <SvgIcon
                  cssProp={css.raw({
                    width: { md: '2.5rem', base: '1.3rem', sm: '2rem' },
                    opacity: href === '#' ? 0.5 : 1
                  })}
                  icon={icon}
                />
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default IconsNavBar;
