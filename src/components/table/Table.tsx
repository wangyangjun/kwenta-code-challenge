import { ColumnDef, Row, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const TableContainer = styled.div`
  border-radius: 3px;
  overflow: hidden;
  margin-top: 20px;
`;

const ReactTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #313131;
`;

type TableRowProps = {
  inheritBackground?: boolean;
  highlightRowsOnHover?: boolean;
};

const TableRow = styled.tr<TableRowProps>`
  height: 45px;
  ${props =>
    props.highlightRowsOnHover &&
    `
    &:hover {
      background-color: #313131;
    }
  `}
  ${props =>
    !props.inheritBackground &&
    `
    :nth-child(even) {
      background: #1a1a1a;
    }
    :nth-child(odd) {
      background: #212121;
    }
  `}
  ${props =>
    props.inheritBackground &&
    `
    background: inherit;
  `}
`;

type CellProps = {
  bold?: boolean;
};

const TableHeaderCell = styled.th<CellProps>`
  padding: 12px 15px;
  text-align: left;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: black;
  padding: 8px 0;
  text-align: left;
  color: #ffffff;
`;

const LoadingContainer = styled.div`
  padding: 100px 0;
  text-align: center;
`;

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  title?: React.ReactNode;
  onTableRowClick?: (row: Row<T>) => void;
  isLoading?: boolean;
  highlightRowsOnHover?: boolean;
};

export const Table = <T,>({
  columns = [],
  data = [],
  title,
  onTableRowClick = undefined,
  isLoading = false,
  highlightRowsOnHover
}: TableProps<T>) => {
  const table = useReactTable<T>({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel()
  });
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    setShowLoading(isLoading);
  }, [isLoading]);

  const handleRowClick = useCallback(
    (row: Row<T>) => () => {
      onTableRowClick?.(row);
    },
    [onTableRowClick]
  );

  return (
    <div>
      {title}
      <TableContainer>
        <ReactTable>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} inheritBackground>
                {headerGroup.headers.map(header => (
                  <TableHeaderCell key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <tbody>
            {showLoading && <LoadingContainer>Loading...</LoadingContainer>}
            {!showLoading &&
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} onClick={onTableRowClick ? handleRowClick(row) : undefined}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))}
          </tbody>
        </ReactTable>
      </TableContainer>
    </div>
  );
};
