import React, { useEffect, useState } from 'react';
import { sortArrayOfObjects } from '../../utils/helpers';
import Table from '../Table';
import ArrowSvg from '../ArrowSvg';
import './tableSorted.css';

interface Props {
  data: KeyValueObject[];
  formatData: (data: KeyValueObject[]) => any[][];
  properties: string[];
  initialSortProperty: string;
  loading: boolean;
  horizontal?: boolean;
}

const TableSorted: React.FC<Props> = ({
  data, // data should have same keys in every object in the array
  formatData,
  properties, // properties should be of the same length and in the same order as the formatted data
  initialSortProperty,
  loading,
  horizontal,
}) => {
  const [reverse, setReverse] = useState(true);
  const [sortProperty, setSortProperty] = useState(initialSortProperty);
  const [tableData, setTableData] = useState<any[][]>([]);

  useEffect(() => {
    let newData = formatData(sortArrayOfObjects(data, sortProperty, reverse));

    const handleClick = (property: string) => {
      setSortProperty(property);
      setReverse((prev) => !prev);
    };

    if (horizontal) {
      newData.map((row, i) => {
        const isSortProperty = properties[i] === sortProperty;

        row.unshift(
          <button
            className='table-sorted__btn'
            style={{ textDecoration: isSortProperty ? 'underline' : '' }}
            onClick={() => handleClick(properties[i])}
          >
            {row.shift()}
            {isSortProperty && (
              <ArrowSvg
                className='table-sorted__arrow'
                style={{ transform: `rotate(${reverse ? 90 : 270}deg)` }}
              />
            )}
          </button>
        );

        return row;
      });
    } else {
      if (newData[0])
        newData[0].forEach((heading, i) => {
          const isSortProperty = properties[i] === sortProperty;

          newData[0][i] = (
            <button
              className='table-sorted__btn'
              style={{ textDecoration: isSortProperty ? 'underline' : '' }}
              onClick={() => handleClick(properties[i])}
            >
              {newData[0][i]}
              {isSortProperty && (
                <ArrowSvg
                  style={{ transform: `rotate(${reverse ? 0 : 180}deg)` }}
                />
              )}
            </button>
          );
        });
    }

    setTableData(newData);
    //eslint-disable-next-line
  }, [data, sortProperty, reverse]);

  return <Table data={tableData} loading={loading} horizontal={horizontal} />;
};

export default TableSorted;
