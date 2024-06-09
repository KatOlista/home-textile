import {
  About,
  Best,
  Comfort,
  Fans,
  Faq,
  Footer,
  Header,
  Impact,
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

        <Impact />
      </main>

      <Footer />
    </>
  )
};
