import { Link } from "react-router-dom/cjs/react-router-dom";
import { categoryMenu } from "../../../helper/data";
import Carousel from "../../atoms/Carousel";

export default function CategoryCarousel({ className }) {
  return (
    <Carousel classNameContainer="-mx-2">
      {categoryMenu.map((item, index) => (
        <Link
        to={`/list`}
          key={`carousel-category-${index}`}
          className="flex-[0_0_25%] md:flex-[0_0_20%] xl:flex-[0_0_10%] px-2"
        >
          <img
            className="rounded-full w-full aspect-square object-cover"
            src={item.img}
            alt={`category-${item.title}`}
          />
          <p className="text-center mt-3">{item.title}</p>
        </Link>
      ))}
    </Carousel>
  );
}
