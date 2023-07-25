import { addProductToDatabase } from "@/actions/serverActions";
import DeleteButton from "@/components/DeleteButton";
import { Product } from "@/typings";

export default async function Home() {
  const res = await fetch(
    "https://64be4acb5ee688b6250c2412.mockapi.io/products",
    {
      cache: "no-cache",
      next: { tags: ["products"] },
    }
  );

  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products warehouse</h1>
      <form
        className="flex flex-col gap-5 mx-auto p-5 max-w-xl"
        action={addProductToDatabase}
      >
        <input
          name="product"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input name="price" className="border border-gray-300 p-2 rounded-md" />
        <button className="border bg-blue-500 text-white rounded-md p-2">
          Add Product
        </button>
      </form>
      <h2 className="font-bold p-2 capitalize">list of products</h2>
      <div className="flex flex-wrap gap-5 p-10">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow-md border">
            <p>{product.product}</p>
            <p>${product.price}</p>
            {product.id !== undefined && <DeleteButton id={product.id} />}
          </div>
        ))}
      </div>
    </main>
  );
}
