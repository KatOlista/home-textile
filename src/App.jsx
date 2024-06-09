import {
  About,
  Best,
  Comfort,
  Fans,
  Header,
  Loungewear,
} from "./components";

export const App = () => {

  return (
    <>
      <Header />

      <main>
        <About />

        <Loungewear />

        <Best />

        <Comfort />

        <Fans />
      </main>
    </>
  )
};
