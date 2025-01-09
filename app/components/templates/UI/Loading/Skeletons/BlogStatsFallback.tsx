export default function BlogStatsFallback({ title }: { title: string }) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
      <div className="text-sm py-4 bg-gradient-to-t from-[#2E2291] to-[#8F5CE1] text-center">
        {title}
      </div>
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <div className="flex justify-between items-center p-4 bg-[#131332] rounded-lg animate-pulse">
            <span className="text-xs"> </span>
            <span className="text-[10px]"> </span>
          </div>
        </li>
        <li>
          <div className="flex justify-between items-center p-4 bg-[#131332] rounded-lg animate-pulse">
            <span className="text-xs"> </span>
            <span className="text-[10px]"> </span>
          </div>
        </li>
        <li>
          <div className="flex justify-between items-center p-4 bg-[#131332] rounded-lg animate-pulse">
            <span className="text-xs"> </span>
            <span className="text-[10px]"> </span>
          </div>
        </li>
        {/* <li>
            <Link
              href={"/"}
              className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
            >
              <span className="text-xs">url : login : pass</span>
              <span className="text-[10px]">(3)</span>
            </Link>
          </li> */}
      </ul>
    </div>
  );
}
