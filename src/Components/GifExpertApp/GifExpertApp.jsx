import React, { useState } from "react";
import { GifGrid, AddCategory } from "../index";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (e) => {
    const category = "Kimetsu no yaiba";

    const val = categories.filter((ex) => ex === e);

    if (val[0] == undefined) {
      setCategories([e, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={onAddCategory} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* {categories.map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))} */}
      {/* <GifGrid categories={categories}></GifGrid> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};

export default GifExpertApp;
