const getGifs = async (category) => {
  const limite = 20;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6hsnbda4O9ZLCVNbVhuNeYyEaS9TqCep&q=${category}&limit=${limite}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  //   console.log(gifs);
  return gifs;
};

export default getGifs;
