export const revalidate =10; //revaldation after 10 seconds
export default async function Notice(){
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store"
    }
  );
  const data = await response.json();
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">Latest posts</h1>
        {data.slice(0, 5).map((post) => (
          <article key={post.id} className="mt-4 border-t pt-4">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="mt-1 text-slate-600">{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}