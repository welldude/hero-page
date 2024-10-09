export default function List() {
  return (
    <div className="grid grid-cols-sm sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll">
      {new Array(12).fill(0).map((i, idx) => {
        return (
          <div
            className={`bg-cyan-400 border rounded-2xl aspect-video`}
            key={idx}
          >
            <span>{idx}</span>
          </div>
        );
      })}
    </div>
  );
}
