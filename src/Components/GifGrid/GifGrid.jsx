import { GifItem } from "../index";
import useFetchGifs from "../../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  // const [gifs, setGifs] = useState([]);
  // useEffect(() => {
  //   getGifs(category).then((img) => setGifs(img));
  //   // console.log(gifs);
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Cargando....</h2> : null}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
          // <li key={gif.id}>{gif.title}</li>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
