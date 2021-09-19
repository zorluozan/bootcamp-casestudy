import Search from "./components/Search";
import Category from "./components/Category";
import coffees from "./db/coffees";

export default function App() {
  return (
    <div>
      <Search coffees={coffees} />
      <Category coffees={coffees} />
    </div>
  );
}
