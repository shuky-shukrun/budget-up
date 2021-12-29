import CategoryCard from "../components/CategoryCard";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import BalanceInfoBar from "../components/BalanceInfoBar";

const HomePage = ({ setCurrCategory }) => {
  const { categoriesInfo, categoriesIcons } = useContext(GlobalContext);

  return (
    <>
      <BalanceInfoBar backgroundColor="bg-light" barColor="bg-success" />
      {/* <Prediction /> */}
      <section className="bg-white">
        <div className="container" style={{ padding: "0 30px" }}>
          <div className={"row"}>
            {categoriesInfo.map((cat, index) => {
              if (index % 3 === 0)
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <CategoryCard
                      title={cat.category}
                      currBalance={
                        cat.monthlySums.currYear[new Date().getMonth()]
                      }
                      totalExpected={parseInt(cat.expected)}
                      icon={categoriesIcons[cat.category]}
                      setCurrCategory={setCurrCategory}
                    />
                  </div>
                );
            })}
            {categoriesInfo.map((cat, index) => {
              if (index % 3 === 1)
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <CategoryCard
                      title={cat.category}
                      currBalance={
                        cat.monthlySums.currYear[new Date().getMonth()]
                      }
                      totalExpected={parseInt(cat.expected)}
                      icon={categoriesIcons[cat.category]}
                      setCurrCategory={setCurrCategory}
                    />
                  </div>
                );
            })}
            {categoriesInfo.map((cat, index) => {
              if (index % 3 === 2)
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <CategoryCard
                      title={cat.category}
                      currBalance={
                        cat.monthlySums.currYear[new Date().getMonth()]
                      }
                      totalExpected={parseInt(cat.expected)}
                      icon={categoriesIcons[cat.category]}
                      setCurrCategory={setCurrCategory}
                    />
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
