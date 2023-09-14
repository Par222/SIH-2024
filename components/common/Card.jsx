function Card(props) {
  return (
    <div
      className={`rounded-md shadow-md ${props?.className}`}
      onClick={props?.onClick}
    >
      {props?.children}
    </div>
  );
}

export default Card;
