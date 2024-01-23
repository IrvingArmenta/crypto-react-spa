import { css } from '@style/css';
import { SystemStyleObject } from '@style/types';

/** number in pixels that is being used in multiple calculations for the bars design,
 * BE CAREFUL WHEN EDITING
 * */
export const BARS_MAGIC_NUMBER = 8 as const;

const comparisonBarsSharedStyles: SystemStyleObject = css.raw({
  height: `${BARS_MAGIC_NUMBER + 2}px`,
  position: 'relative'
});

export const comparisonBarWrapStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBlockStart: '6px'
});

export const comparisonNegativeBarStyle = css({
  ...comparisonBarsSharedStyles,
  bgColor: 'negativeRed',
  width: 'var(--negative-bar-width)',
  borderTopRightRadius: `${BARS_MAGIC_NUMBER}px`,
  borderBottomRightRadius: `${BARS_MAGIC_NUMBER}px`,
  _before: {
    content: '""',
    width: '10px',
    aspectRatio: 1,
    bgColor: 'negativeRed',
    transform: 'skew(-16deg) translateY(-50%)',
    position: 'absolute',
    left: `-${BARS_MAGIC_NUMBER / 2}px`,
    top: '50%'
  }
});

export const comparisonPositiveBarStyle = css({
  ...comparisonBarsSharedStyles,
  bgColor: 'positiveGreen',
  width: 'var(--positive-bar-width)',
  borderTopLeftRadius: `${BARS_MAGIC_NUMBER}px`,
  borderBottomLeftRadius: `${BARS_MAGIC_NUMBER}px`,
  _before: {
    content: '""',
    width: '10px',
    aspectRatio: 1,
    bgColor: 'positiveGreen',
    transform: 'skew(-16deg) translateY(-50%)',
    position: 'absolute',
    right: `-${BARS_MAGIC_NUMBER / 2}px`,
    top: '50%'
  }
});

export const comparisonBarLabelsWrapStyle = css({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  '& > label': {
    color: 'negativeRed',
    _first: {
      color: 'positiveGreen'
    }
  }
});
