/*JSX only returns html markup and other react components. To solve this problem, we introduce braces{} 
 True && 'Mosh' gives Mosh; False && 'Mosh' gives False */

import { useState } from "react";
// import styled from "styled-components";

// const List = styled.ul`
//   list-style: none;
//   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   background: orange;
// `;

// interface ListItemProps {
//   active: boolean;
// }
// const ListItem = styled.li<ListItemProps>`
//   padding: 5px 0;
//   background: ${props => props.active ? 'blue' : 'none'}`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul style={{listStyle: 'none'}}>
        {items.map((item, index) => (
          <li
            // active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
