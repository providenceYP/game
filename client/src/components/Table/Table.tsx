import React from 'react';

import { Props } from './types';

const Table = ({ headers, rows }: Props): JSX.Element => (
  <table className="table-auto">
    {headers && (
      <thead className="text-gray-700">
        <tr>
          {headers.map((header) => (
            <th key={header} className="px-4 py-10">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    )}
    <tbody className="text-gray-500">
      {rows.map((row) => (
        <tr key={row.toString()}>
          {row.map((col, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <td key={index} className="px-4 py-2">
              {col}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
