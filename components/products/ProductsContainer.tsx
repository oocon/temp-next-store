import { MdGridView, MdList } from "react-icons/md";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";
// import { useState } from "react";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";
  const products = await fetchAllProducts({ search });

  return (
    <>
      <div className="flex justify-between mb-4">
        <h3 className="text-xl leading-none self-end">
          {products.length} {`product${products.length !== 1 ? "s" : ""}`}
        </h3>
        <div className="flex gap-2">
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link
              href={`/products?layout=grid&${searchTerm}`}
              className="w-10 h10"
            >
              <MdGridView className="w-10 h-10" />
            </Link>
          </Button>
          <Button
            variant={layout === "list" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list&search=${search}`}>
              <MdList />
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
      {products.length === 0 ? (
        <h5 className="text-2xl mt-10">No products found</h5>
      ) : layout === "list" ? (
        <ProductsList products={products} />
      ) : (
        <ProductsGrid products={products} />
      )}
    </>
  );
}

export default ProductsContainer;
