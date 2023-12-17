const GifItem = ({ id, title, url }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
      {/* <img>{img.url}</img> */}
    </>
  );
};

export default GifItem;
