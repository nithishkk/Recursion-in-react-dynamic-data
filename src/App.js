import React from "react";
import "./style.css";

const items = [
  {
    id: 1,
    label: 'Item 1',
    children: [
      { id: 2, label: 'Item 1.1', children: [] },
      { id: 3, label: 'Item 1.2', children: [
        { id: 4, label: 'Item 1.2.1', children: [] },
        { id: 5, label: 'Item 1.2.2', children: [] },
      ]},
    ],
  },
  {
    id: 6,
    label: 'Item 2',
    children: [
      { id: 7, label: 'Item 2.1', children: [] },
      { id: 8, label: 'Item 2.2', children: [] },
    ],
  },
];

function NestedList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <li>
      {item.label}
      {item.children && (
        <ul>
          {item.children.map(child => (
            <ListItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function App() {
  return (
    <div>
      <NestedList items={items} />
    </div>
  );
}
