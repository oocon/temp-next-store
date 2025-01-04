import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { Button } from "../ui/button";

async function CartButton() {
  //temp
  const numItemsInCart = 5;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="cart">
        <BsCart2 className="h-6 w-6" />
        <span className="rounded-full w-6 h-6 flex items-center justify-center text-xs bg-primary text-white absolute -top-3 -right-3 ">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
