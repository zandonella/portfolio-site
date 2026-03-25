export default function SkillBox({ className, skillName }) {
  return (
    <>
      <div
        className={`group bg-foreground z-0 rounded-xl p-3 text-center shadow-none outline-1 outline-gray-700 transition-colors duration-200 hover:z-50 hover:bg-emerald-900/40 hover:shadow-[0px_0px_60px_30px] hover:ring-2 hover:shadow-emerald-950/50 hover:ring-emerald-900`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="icon mt-2">
            <i
              className={`${className} colored inline-block scale-100 text-4xl text-slate-600 transition-all duration-200 ease-in-out group-hover:scale-120`}
            />
          </div>
          <p className="text-sm font-medium whitespace-nowrap text-white transition-colors">
            {skillName}
          </p>
        </div>
      </div>
    </>
  );
}
