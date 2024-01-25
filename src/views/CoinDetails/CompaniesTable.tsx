import { useGetCompaniesData } from '@/api/hooks';
import type { CoinIdType } from '@/global-types';
import { css } from '@style/css';
import type { FC } from 'react';

const TableStyle = css({
  width: '100%',
  '& tr': { _odd: { bgColor: 'gray.200' } },
  '& td': {
    padding: { md: '0.5rem', sm: '0.2rem' },
    textAlign: 'center'
  },
  height: '100%'
});

const CompaniesTable: FC<{
  coinId: CoinIdType;
}> = (props) => {
  const { coinId } = props;
  const { data: companiesData } = useGetCompaniesData(coinId);

  if (!companiesData || !companiesData.companies.length) {
    return <p>no data...</p>;
  }

  return (
    <>
      <h2 className={css({ fontWeight: 'bold' })}>
        Top Public companies {coinId === 'btc' ? 'Bitcoin' : 'Ethereum'}
        holdings
      </h2>
      <div className={css({ flex: 1, overflow: 'hidden', padding: '1.5rem' })}>
        <table className={TableStyle}>
          <thead>
            <th>Company</th>
            <th>Total Holdings</th>
            <th>Total Value in Currency USD</th>
            <th>Country</th>
          </thead>
          <tbody>
            {companiesData.companies.map((company) => (
              <tr key={company.name}>
                <td>{company.name}</td>
                <td>{company.totalHoldings}</td>
                <td>{company.totalCurrentValueUsd}</td>
                <td>{company.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompaniesTable;
