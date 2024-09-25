import "./Pagination.css";

const ITEMS_PER_PAGE = 20;

interface IProps {
  itemsCount: number;
  currentPage: number;
  setCurrentPage: (pageIndex: number) => void;
}

export default function Pagination(props: IProps) {
  const numberOfPages = Math.ceil(props.itemsCount / ITEMS_PER_PAGE);
  const pages = [];
  for (let index = 0; index < numberOfPages; index++) {
    pages.push(index + 1);
  }
  function handleSetCurrentPage(pageIndex: number) {
    props.setCurrentPage(pageIndex);
  }
  return (
    <div className="page">
      <div>
        {pages.map((item) => (
          <button
            className={
              props.currentPage === item - 1 ? "selected-page-number" : ""
            }
            onClick={() => handleSetCurrentPage(item - 1)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
