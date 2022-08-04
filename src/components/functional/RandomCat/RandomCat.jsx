import { useState } from "react";
import { useEffect } from "react";
import { catApi } from "../../../api/api";

const RandomCat = () => {
  const [randomCat, setRandomCat] = useState({});

  const fetchRandomCat = async () => {
    try {
      const result = await catApi.get("/v1/images/search");
      const data = result.data;
      setRandomCat(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  return <div>{randomCat.url}</div>;
};

export default RandomCat;
