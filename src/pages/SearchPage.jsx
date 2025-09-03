import Filter from "../components/Filter/SearchFilter";
import SearchContent from "../components/SearchMain/SearchContent";

export default function SearchPage({ className }) {
  return (
    <div className={`flex flex-1 h-full ${className}`}>
      <aside className="sidebar-container max-w-[23%] h-full flex flex-col">
        <Filter />
      </aside>
      <main className="flex-1 p-2 overflow-y-auto">
        <SearchContent />
      </main>
    </div>
  );
}
