import { css } from '@style/css';
import error404Svg from '../assets/error404.svg';
import { Link } from 'wouter';
import { setTestProps } from '@/utils/setTestProps';

const Error404 = () => {
  return (
    <div
      {...setTestProps({ testid: 'error-404-wrap' })}
      className={css({
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        animation: 'fadeIn'
      })}
    >
      <h1>
        Oops, missing page{' '}
        <span className={css({ srOnly: true })}>error 404</span>
      </h1>
      <img
        className={css({
          aspectRatio: 1,
          width: '30%',
          maxW: '640px',
          minW: '250px',
          animation: 'floating'
        })}
        src={error404Svg}
        alt="error 404"
      />
      <h2>Homeward bound?</h2>
      <Link href="/">
        <a
          href="/"
          className={css({
            fontSize: { base: '4vw', sm: '2rem' },
            border: '1px solid',
            borderColor: 'positiveGreen',
            borderRadius: '16px',
            padding: '1rem'
          })}
        >
          Go Home
        </a>
      </Link>
    </div>
  );
};

export default Error404;
