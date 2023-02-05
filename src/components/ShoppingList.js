import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //const [items, setItems] = useState(items)
  const [selectedCategory, setFilter] = useState("All")
  
   

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return true
    } else {
      return item.category === selectedCategory
    }
  
})

  const itemList = itemsToDisplay.map((item)=>(
    <Item key={item.id} name={item.name} category={item.category} />

  ))

  function handleFilter(e){
    setFilter(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
