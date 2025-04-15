const Pizza = (props) => {
  return (
    <div className="pizza">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <img src={props.image} alt={props.alt} />
    </div>
  )
};

export default Pizza;