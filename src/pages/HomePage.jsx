import Search from "components/modules/Search";
import TableCoin from "components/modules/TableCoin";
import Pagination from "components/modules/Pagination";

function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search />
      <TableCoin />
      <Pagination />
    </div>
  );
}

export default HomePage;
