import React from "react";

interface Props {
  activePage: number;
  setActivePage: Function;
  numberOfPage: number;
}

const Pagination: React.FC<Props> = ({
  activePage,
  setActivePage,
  numberOfPage,
}) => {
  const handleClick = (page: number) => {
    console.log(page);
    setActivePage(page);
  };
  const handleBefore = () => {
    if (activePage !== 1) {
      setActivePage(activePage - 1);
    }
  };
  const handleAfter = () => {
    if (activePage !== numberOfPage) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="pagination">
      <a href="#" onClick={handleBefore}>
        &laquo;
      </a>
      {Array.from({length: numberOfPage}, (_, i) => i + 1).map((page) =>
        page === activePage ? (
          <a key={page} href="#" className="active">
            {page}
          </a>
        ) : (
          <a key={page} href="#" onClick={() => handleClick(page)}>
            {page}
          </a>
        )
      )}
      <a href="#" onClick={handleAfter}>
        &raquo;
      </a>
    </div>
  );
};

export default Pagination;
