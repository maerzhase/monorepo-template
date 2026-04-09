import { Button } from "@acme/ui";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-8 px-6 py-16">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-700">
          pnpm + Turbo template
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Start with a publishable UI package and a private app wired together.
        </h1>
        <p className="text-lg leading-8 text-slate-700">
          This app imports a Button from <code>@acme/ui</code> using a workspace
          dependency and shared stylesheet export.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary action</Button>
      </div>
    </main>
  );
}
