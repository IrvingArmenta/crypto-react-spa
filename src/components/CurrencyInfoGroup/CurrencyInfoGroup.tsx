import { FC } from 'react';
import CurrencyInfoBlock, {
  CurrencyInfoBlockPropsType
} from './CurrencyInfoBlock';
import { currencyInfoGroupWrapStyle } from './CurrencyInfoGroup.style';
import type { SystemStyleObject } from '@style/types';
import { css } from '@style/css';

type CurrencyInfoGroupPropsType = {
  currencyDataBlocks: CurrencyInfoBlockPropsType[];
  cssProp?: SystemStyleObject;
};

/**
 * Renders a group of currency information blocks, ensuring a maximum of 3 blocks.
 *
 * @remarks
 *   - Validates the provided `currencyDataBlocks` array for length requirements.
 *   - Throws errors for invalid input to prevent unexpected rendering issues.
 *
 * @param {CurrencyInfoGroupPropsType} props - Component props
 * @prop {CurrencyInfoBlockPropsType[]} currencyDataBlocks - Array of props for individual CurrencyInfoBlock components.
 * @prop {SystemStyleObject} cssProp - Additional CSS classes to apply to the component.
 */
const CurrencyInfoGroup: FC<CurrencyInfoGroupPropsType> = (props) => {
  const { currencyDataBlocks, cssProp } = props;

  if (!currencyDataBlocks.length) {
    throw new Error('CurrencyInfoGroup: currencyDataBlocks array is empty');
  }

  if (currencyDataBlocks.length > 3) {
    throw new Error(
      'CurrencyInfoGroup: currencyDataBlocks array length cannot be more than 3'
    );
  }

  return (
    <div className={css(currencyInfoGroupWrapStyle, cssProp)}>
      {currencyDataBlocks.map((infoBlockProps) => {
        return (
          <CurrencyInfoBlock key={infoBlockProps.title} {...infoBlockProps} />
        );
      })}
    </div>
  );
};

export default CurrencyInfoGroup;
