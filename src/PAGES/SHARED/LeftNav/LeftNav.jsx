import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          className="fs-2 fw-semibold mb-1 border-1 border p-3 text-dark text-dark"
          key={categorie.id}
        >
          <Link style={{ color: "#101010" }} to={`/categorie/${categorie.id}`}>
            {categorie.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
