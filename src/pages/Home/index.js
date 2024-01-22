import Container from "../../component/atoms/Container";
import Button from "../../component/atoms/Button";
import Card from "../../component/atoms/Card";
import { dataCard } from "../../helper/data";
import BannerCarousel from "../../component/molecules/BannerCarousel";
import CategoryCarousel from "../../component/molecules/CategoryCarousel";
import FilterInput from "../../component/molecules/FilterInput";

function HomePage() {

  return (
    <Container className="pt-[100px]">
      <FilterInput />
      <BannerCarousel className="my-5" />
      <div className="py-[32px]">
        <h2 className="text-xl mb-5">Explore Product</h2>
        <CategoryCarousel />
      </div>
      <div className="pt-[32px]">
        <h2 className="text-xl mb-5">Recommended For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10">
          {dataCard.map((item, id) => (
            <Card key={`item-${id}`} data={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[32px]">
        <Button variant="primary-outlined">Lihat Lebih Banyak</Button>
      </div>
    </Container>
  );
}

export default HomePage;
