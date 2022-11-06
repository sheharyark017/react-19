import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  { id: 'b1', price: 6, title: 'first', description: 'My first book' },
  { id: 'b2', price: 7, title: 'second', description: 'My second book' },
  { id: 'b3', price: 8, title: 'third', description: 'My third book' },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map(product => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
