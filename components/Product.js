import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

function Product({ product }) {
  const { title, price, image, slug } = product.attributes;
  console.log(product);

  return (
    <ProductStyle>
      <Link href={`product/${slug}`}>
        <div>
          <img
            src={image?.data?.attributes?.formats?.thumbnail?.url || ""}
            alt={title}
          />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{`Rs. ${price}`}</h3>
    </ProductStyle>
  );
}

export default Product;
