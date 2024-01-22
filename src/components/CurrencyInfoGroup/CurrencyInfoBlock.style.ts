import { css } from '@style/css';

const currencyInfoBlockWrap = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const currencyInfoBlockTitle = css({
  fontSize: { sm: '0.8rem', md: '1.2rem' },
  color: '#8d919b'
});

const currencyInfoBlockValue = css({
  color: '#333',
  fontSize: { sm: '1rem', md: '1.5rem' }
});

const currencyInfoBlockPercentage = css.raw({
  fontSize: { sm: '0.8rem', md: '1.2rem' }
});

const currencyInfoBlockStyle = {
  title: currencyInfoBlockTitle,
  value: currencyInfoBlockValue,
  wrap: currencyInfoBlockWrap,
  percentage: currencyInfoBlockPercentage
};

export { currencyInfoBlockStyle };
