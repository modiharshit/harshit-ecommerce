import { CartState } from "../context/Context";
import Filters from "./Filters";
import Footer from "./Footer";
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

    if (byMobile && byLaptop) {
      sortedProducts = products;
    } else {
      if (byMobile) {
        sortedProducts = sortedProducts.filter((prod) => prod.category === "mobile");
      }

      if (byLaptop) {
        sortedProducts = sortedProducts.filter((prod) => prod.category === "laptop");
      }
    }


    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <><div>
      <Filters />
      <div className="productContainer container-fluid content-align">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;
