import Navigation from "../Navigation";

export default function About() 
{
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <Navigation />
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-10 shadow-lg shadow-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          About this project
        </p>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-5 leading-7 text-slate-600">
          This small Next.js app demonstrates client-side navigation and a
          counter that updates instantly in the browser.
        </p>

      </section>
    </main>
  );
}



