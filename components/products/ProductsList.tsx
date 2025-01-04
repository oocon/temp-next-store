import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => {
        const { image, name, price, id: productId, company } = product;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={productId} className="relative">
            <Link href={`/products/${productId}`}>
              <Card className="rounded hover:shadow-xl transition-shadow duration-500 mt-6">
                <CardContent className="flex p-6 gap-10">
                  <div className="w-1/3  h-32 md:h-48 relative hidden sm:block">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      priority
                      className="object-cover rounded max-w-64"
                    ></Image>
                  </div>
                  <div className="w-1/2 pl-4 lg:pl-0">
                    <h3 className="text-xl capitalize tracking-tight font-semibold">
                      {name}
                    </h3>
                    <p className="text-muted-foreground capitalize">
                      {company}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between content-end ml-auto">
                    <p>{dollarsAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="ml-auto absolute right-8 bottom-8">
              <Link href="/favorites">
                <FavoriteToggleButton productId={productId} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
