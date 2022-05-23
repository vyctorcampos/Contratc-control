/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Tables, TBody, TBodyTR, TD, TH, THead, THeadTR } from './styles';

const Table = ({ data }: any) => {
  const keys = Object.keys(data[0]);
  return (
    <Tables>
      <THead>
        <THeadTR>
          {[...keys].map((item, index) => (
            <TH key={`item-${index}-${item}`}>{item}</TH>
          ))}
        </THeadTR>
      </THead>
      <TBody>
        {data.map((obj: any, index: any) => (
          <TBodyTR key={`item-${index}-${obj}`}>
            {keys.map(item => {
              const value = obj[item];
              return <TD key={`item-${item}`}>{value}</TD>;
            })}
          </TBodyTR>
        ))}
      </TBody>
    </Tables>
  );
};

export default Table;
