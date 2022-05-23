import React, { useEffect, useState } from 'react';

const Pagination = ({ count, page, handleChange }: any) => {
  const [pages, setPages] = useState<any>([]);

  useEffect(() => {
    for (let i = 1; i <= count; i += 1) {
      setPages((oldPages: any) => [...oldPages, i]);
    }
  }, [count]);

  return (
    <div className=" text-center row d-flex justify-content-center">
      <nav>
        <ul className="pagination table-responsive text-center">
          <li className="page-link">Anterior</li>

          {pages.map((pagearray: any) => (
            <li className="page-item desabled">
              <span className="page-link">{pagearray}</span>
            </li>
          ))}

          <li className="page-item desabled">
            <span className="page-link">1</span>
          </li>

          <li className="page-link disabled">Próxima</li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
