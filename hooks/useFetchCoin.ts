import { useEffect, useState } from "react";
import axios from "axios";
import { formatTime } from "../utils/formatTime";

export const useFetchAllCoin = (coinName: String, time: String) => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${time}`
        );
        const dataChart = data.prices.map((value: any) => ({
          date: formatTime(value[0]),
          price: value[1],
        }));

        setCoin(dataChart);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCoins();

    return () => controller.abort();
  }, [coinName]);

  return { coin, loading, error };
};