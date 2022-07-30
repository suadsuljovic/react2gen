import { useState } from "react";
import { useEffect } from "react";
import api from "../../../api/api";

const Quote = () => {
  const [quote, setQuote] = useState();

  //   useEffect(() => {
  //     api.get("/random").then((result) => {
  //       const data = result.data;

  //       setQuote(data);
  //     });
  //   }, []);

  const fetchQuote = async () => {
    try {
      const result = await api.get("/random");
      const data = result.data;
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <button onClick={() => fetchQuote()}>Fetch new</button>
      {quote && quote.author}
    </div>
  );
};

export default Quote;
