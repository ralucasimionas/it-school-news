import BootstrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

export function Pagination(props) {
  let { active, pageUrl } = props;
  const navigate = useNavigate();

  if (!active) {
    active = 1;
  }

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <BootstrapPagination.Item
        key={number}
        active={number === Number(active)}
        id={active ? styles.paginationActive : null}
        onClick={() => {
          navigate(`${pageUrl}?page=${number}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <BootstrapPagination className={styles.Pagination}>
        {items}
      </BootstrapPagination>
    </div>
  );
}
