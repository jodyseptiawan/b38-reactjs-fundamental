// import component Header
import Header from "./components/header";

function Component() {
  return (
    //   Code Here
    <>
      <Header />
      <h3>halo</h3>
      <Content />
    </>
  );
}

function Content() {
  return <div>ini content</div>;
}

export default Component;
