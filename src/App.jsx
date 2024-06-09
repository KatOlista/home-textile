import {
  About,
  Best,
  Comfort,
  Fans,
  Faq,
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

        <Faq />
      </main>
    </>
  )
};
