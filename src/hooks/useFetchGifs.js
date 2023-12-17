import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifts";

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setGifs(newImages);
    setIsLoading(false);
    // console.log(category);
  };

  useEffect(() => {
    getImages();
    // getGifs(category).then((img) => setGifs(img));
    // console.log(gifs);
  }, []);

  return {
    gifs: gifs,
    isLoading: isLoading,
  };
};

export default useFetchGifs;
