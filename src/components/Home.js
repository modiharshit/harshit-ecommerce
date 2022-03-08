import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, searchQuery, byMobile, byLaptop },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byMobile) {
      sortedProducts = sortedProducts.filter((prod) => prod.category == "mobile");
    }

    if (byLaptop) {
      sortedProducts = sortedProducts.filter((prod) => prod.category == "laptop");
    }

    // if (byRating) {
    //   sortedProducts = sortedProducts.filter(
    //     (prod) => prod.ratings >= byRating
    //   );
    // }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
