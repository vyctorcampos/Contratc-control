import React, { useState } from 'react';

function usePagination(data: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(oldCurrent => Math.min(oldCurrent + 1, maxPage));
  }

  function prev() {
    setCurrentPage(oldCurrent => Math.max(oldCurrent - 1, 1));
  }

  function jump(page: any) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(oldCurrent => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
