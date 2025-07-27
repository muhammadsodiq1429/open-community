import Hero from "./Hero";
import Features from "./Features";
import OneProduct from "./OneProduct";
import Comments from "./Comments";
import SendLetters from "./SendLetters";

const Main = () => {
  return (
    <main className="main" id="main">
      <Hero />
      <Features />
      <OneProduct />
      <Comments />
      <SendLetters />
    </main>
  );
};

export default Main;
