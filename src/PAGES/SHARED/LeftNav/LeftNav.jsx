import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
//   console.log(categories);

  return (
    <div>
      <h1>Left Nav</h1>
      {categories.map((categorie) => (
        <p
          className="fs-2 fw-semibold mb-1 border-1 border p-3 text-dark bg-danger p-3"
          key={categorie.id}
        >
          <NavLink style={{ color: "#101010" }} className={ ({isActive})=> isActive ? "text-white rounded" : ""} to={`/categorie/${categorie.id}`}>
            {categorie.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
