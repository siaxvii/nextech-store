import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import DiscountProducts from "@/components/discount-products";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0cd12195-c351-4513-8728-856638f389ad");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="rounded-xl md:aspect overflow-hidden text-black bg-cover"> <Billboard data={billboard} aria-label="Welcome to NexTech!"/> </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8" aria-label="Discounted Products">
          <DiscountProducts title="Discounted Products" items={products}/>
          <hr className="my-4" />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8" aria-label="Featured Products" tabIndex={0}>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;