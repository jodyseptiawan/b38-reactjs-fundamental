// code Here
export default function List(props) {
  console.log(props);
  return (
    <div>
      <h1 onClick={props.halooo}>
        {props.name} {props.year}
      </h1>
      <p>{props.year}</p>
    </div>
  );
}
