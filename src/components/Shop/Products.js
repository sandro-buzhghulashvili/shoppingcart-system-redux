import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const items = useSelector((state) => state.items);

  const allItems = items.map((item) => {
    return (
      <ProductItem
        title={item.name}
        price={item.price}
        description={item.description}
        key={item.id}
        id={item.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{allItems}</ul>
    </section>
  );
};

export default Products;
