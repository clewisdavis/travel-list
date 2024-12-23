import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
      setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item=>item.id !== id));
  }

  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    // console.log(confirmed);

    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    // map method to update an object in an array
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}






