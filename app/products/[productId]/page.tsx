import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

async function page({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params;
  const product = await fetchSingleProduct(resolvedParams.productId);
  const { name, company, description, image, price, id: productId } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs productName={name} />
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-16 py-4 mt-8">
        <div className="relative h-96 lg:h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="md:max-w-[50%] lg:max-w-full rounded-lg object-cover"
          />
        </div>
        <div className="">
          <div className="flex gap-x-8 items-center">
            <h2 className="capitalize font-bold tracking-tight text-3xl">
              {name}
            </h2>
            <FavoriteToggleButton productId={resolvedParams.productId} />
          </div>
          <ProductRating id={productId} />
          <h3 className="font-semibold text-xl mt-4">{company}</h3>
          <h4 className="mt-6">
            <span className="bg-muted p-2 rounded">{dollarAmount}</span>
          </h4>
          <p className="text-muted-foreground tracking-wide leading-loose mt-8">
            {description}
          </p>
          <div className="mt-8">
            <AddToCart productId={resolvedParams.productId} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default page;
