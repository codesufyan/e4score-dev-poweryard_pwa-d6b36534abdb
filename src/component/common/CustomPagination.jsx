
import React from 'react';
import { TablePagination, Button } from '@mui/material';

const CustomPaginationActions = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onChangeRowsPerPage,
}) => {
  const handleFirstPageButtonClick = () => {
    onPageChange(0);
  };

  const handleBackButtonClick = () => {
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div>
      <Button onClick={handleFirstPageButtonClick} disabled={page === 0}>
        First Page
      </Button>
      <Button onClick={handleBackButtonClick} disabled={page === 0}>
        Previous Page
      </Button>
      <Button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        Next Page
      </Button>
      <Button
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        Last Page
      </Button>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </div>
  );
};

export default CustomPaginationActions;