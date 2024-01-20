import { css } from '../styled-system/css';

const styles = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px'
});

function App() {
  return <main className={styles}>application</main>;
}

export default App;
