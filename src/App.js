import Explorer from "./Explorer";
import jsonData from "./data.json";
import "./styles.css";

export default function App() {
  const sortItems = (data) => {
    if (!data.isFolder || !data.items) return data;

    // Sort the current level of items
    data.items.sort((a, b) => {
      if (a.isFolder !== b.isFolder) {
        // Folders first
        return a.isFolder ? -1 : 1;
      }
      // Sort alphabetically by name
      return a.name.localeCompare(b.name);
    });

    // Recursively sort subfolders
    data.items.forEach(sortItems);
    return data;
  };

  return (
    <div className="App">
      <Explorer entity={sortItems(jsonData)} />
    </div>
  );
}
