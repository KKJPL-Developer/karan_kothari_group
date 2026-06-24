import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-[#101828]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center gap-2 px-8 py-4 text-center"
          >
            <span
              className="text-4xl text-[#C9A84C]"
              style={{ fontFamily: "sans-serif" }}
            >
              {s.value}
            </span>
            <span className="text-sm text-zinc-400">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
