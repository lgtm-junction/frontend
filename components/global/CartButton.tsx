import { useCart } from "@/context/useCart";
import Link from "next/link";
import { BsCart } from "react-icons/bs";

export default function CartButton() {
  const { cart } = useCart();
  return (
    <Link
      href={"/cart"}
      className="absolute bottom-8 right-8 rounded-full bg-black w-16 h-16 flex items-center justify-center pointer-events-auto"
    >
      <BsCart size="28px" color="white" />
      {cart.length > 0 && (
        <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-white border border-black rounded-full">
          {cart.length}
        </div>
      )}
    </Link>
  );
}
