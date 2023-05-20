import React from 'react';
import './tableRow.css';


const tableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.id}</td>
      <td>
        <img src={data.image} alt={data.name} width="24" height="24" />
      </td>
      <td>{data.symbol}</td>
      <td>{data.current_price}</td>
      <td>{data.total_volume}</td>
    </tr>
  );
};

export default tableRow;