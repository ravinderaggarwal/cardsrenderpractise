import React, { useEffect, useState } from "react";
const App = () => {
  const [array, changearray] = useState([]);
  const [query, changequery] = useState("");
  const [page, changepage] = useState(0);
  const [counter, changecounter] = useState(1);
  const apiUrl = `https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/?size=100&title=${query}`;
  useEffect(() => {
    fetch(apiUrl).then((response) => {
      response.json().then((result) => {
        const r = result.results;
        changearray(r);
      });
    });
  }, [apiUrl]);
  return (
    <>
      <div className="base">
        <h1 className="heading"> Facts </h1>
        <p>
          {" "}
          <input
            className="input"
            placeholder="Search here..."
            onChange={(event) => {
              const val = event.target.value;
              changecounter(1);
              changepage(0);
              changequery(val);
            }}
            value={query}
          />{" "}
        </p>
        <p>
          {" "}
          <button
            className="button"
            onClick={() => {
              if (page > 4) {
                changepage(page - 5);
                changecounter(counter - 1);
              }
            }}
          >
            Left
          </button>{" "}
          <span className="span">{counter}</span>
          <button
            className="button"
            onClick={() => {
              if (page < array.length - 5) {
                changecounter(counter + 1);
                changepage(page + 5);
              }
            }}
          >
            Right
          </button>
        </p>
        {array.slice(page, page + 5).map((arr) => {
          return (
            <div className="outer-box">
              <div>
                {" "}
                <img className="img" src={arr.image.url} />
              </div>
              <div className="box">
                <h1>{arr.title} </h1>
                <p> Author : {arr.author.name} </p>
                <p> Name : {arr.categories[0].name} </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
