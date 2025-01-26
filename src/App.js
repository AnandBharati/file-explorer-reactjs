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
      <h1> File Explorer</h1>
      <Explorer entity={sortItems(jsonData)} />
      <h5
        style={{
          fontStyle: "italic",
          position: "absolute",
          bottom: 0,
          left: "50%",
          translate: "-50%",
          color: "GrayText",
        }}
      >
        A sample application using React js
      </h5>
    </div>
  );
}
