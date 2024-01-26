import { useGetCompaniesData } from '@/api/hooks';
import type { CoinIdType } from '@/global-types';
import { css } from '@style/css';
import type { FC } from 'react';

const TableStyle = css({
  height: 'auto',
  width: '100%',
  fontSize: { base: '0.8rem', md: '1rem' },
  '& tbody': {
    '& tr': { _odd: { bgColor: 'gray.200' } }
  },
  '& td': {
    padding: { md: '0.8rem', base: '0.5rem' },
    textAlign: 'center'
  }
});

type CompaniesTablePropsType = {
  coinId: CoinIdType;
};

/**
 * Renders a table displaying top public companies with Bitcoin or Ethereum holdings.
    @remarks
    - Fetches data using the useGetCompaniesData hook.
    - Handles cases where data is not yet available or empty.
    - Displays a heading indicating the specific coin type.
    - Presents company data in a tabular format with relevant fields.
    @param {CoinIdType} coinId - The ID of the coin to fetch data for ('btc' or 'eth').
*/
const CompaniesTable: FC<CompaniesTablePropsType> = (props) => {
  const { coinId } = props;
  const { data: companiesData } = useGetCompaniesData(coinId);

  const noData = !companiesData || !companiesData.companies.length;

  return (
    <div
      className={css({
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDir: 'column',
        justifyContent: 'space-evenly',
        overflow: 'auto',
        padding: { base: '0.5rem', md: '1rem' }
      })}
    >
      <h2 className={css({ fontWeight: 'bold' })}>
        Top Public companies {coinId === 'btc' ? 'Bitcoin ' : 'Ethereum '}
        holdings
      </h2>
      {noData ? (
        <p>no data to show</p>
      ) : (
        <table className={TableStyle}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Total Holdings</th>
              <th>Total Value in USD</th>
              <th>Country</th>
            </tr>
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
      )}
    </div>
  );
};

export default CompaniesTable;
