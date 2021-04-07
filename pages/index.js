import Page from '../components/Page';
import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function IndexPage() {
  return (
    <>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </>
  );
}
