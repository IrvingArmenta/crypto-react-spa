import {
  coinPriceBoxBTCStyle,
  coinPriceBoxETHStyle,
  coinHeatPricesWrapperStyle,
  coinHeatPricesLoadingStyle
} from './CointHeatPrices.style';
import { LoadingSvg } from '@/components';
import { css } from '@style/css';
import { useGetSimplePrice } from '@/api/hooks';

const CoinHeatPrices = () => {
  const { data, isLoading } = useGetSimplePrice();

  if (!data && isLoading) {
    return (
      <div className={coinHeatPricesLoadingStyle}>
        <LoadingSvg />
        <p className={css({ marginInlineStart: '16px' })}>
          Getting the latest prices...
        </p>
      </div>
    );
  }

  return (
    <div className={coinHeatPricesWrapperStyle}>
      <article className={coinPriceBoxBTCStyle}>
        <h3>BTC</h3>
        <p className="price">{data?.btc.price}</p>
        <span className="diff">{data?.btc.percentageDiff24h}</span>
      </article>
      <article className={coinPriceBoxETHStyle}>
        <h3>ETH</h3>
        <p className="price">{data?.eth.price}</p>
        <span className="diff">{data?.eth.percentageDiff24h}</span>
      </article>
    </div>
  );
};

export default CoinHeatPrices;
