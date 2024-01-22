import type { FC } from 'react';
import { SvgIcon } from '@/components';
import {
  chevronTitleIconWrapStyle,
  chevronTitleWrapStyle
} from './ChevronTitle.style';
import { css } from '@style/css';
import type { SystemStyleObject } from '@style/types';

export type ChevronTitlePropsType = {
  text: string;
  altText?: string;
  cssProp?: SystemStyleObject;
};

/**
 * Renders a title with a chevron icon and optional alternative text.
 *
 * @param {ChevronTitlePropsType} props Component props
 * @prop {string} text: The main title text.
 * @prop {string} altText: Alternative text to display next to the chevron icon.
 * @prop {SystemStyleObject} cssProp: Additional CSS classes to apply to the component.
 */
const ChevronTitle: FC<ChevronTitlePropsType> = (props) => {
  const { text, altText, cssProp } = props;

  return (
    <div className={css(chevronTitleWrapStyle, cssProp)}>
      <span>{text}</span>
      <span className={chevronTitleIconWrapStyle}>
        {altText}
        <SvgIcon icon="chevron" />
      </span>
    </div>
  );
};

export default ChevronTitle;
