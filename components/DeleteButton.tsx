"use client";
import { deleteProduct } from "@/actions/serverActions";
import { useTransition } from "react";

// Define the prop types using TypeScript's interface
interface DeleteButtonProps {
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="bg-red-500 p-2 shadow-md"
      onClick={() => startTransition(() => deleteProduct(id))}
    >
      {isPending ? "deleting..." : "delete"}
    </button>
  );
};

export default DeleteButton;
