import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { image, name, price, id: productId } = product;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="object-cover w-full rounded group-hover:scale-110 transition-transform duration-500"
                    ></Image>
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="capitalize text-xl tracking-wider">
                      {name}
                    </h2>
                    <p className="capitalize text-md mt-2 z-5">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute right-6 top-6">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
