function SequenceActor({ data }) {
  return (
    <div>
      <p className="relative -left-[45%] font-bold text-gray-900 dark:text-white m-0">{data.label ?? "Actor"}</p>
      <div className="relative bg-gray-300 left-[2px] w-[2px] rounded" style={{ height: data.height }}></div>
    </div>
  );
}

export default SequenceActor;
