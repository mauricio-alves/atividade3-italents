import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { NotFound } from "../../components/NotFound";
import dataBase from "./../../mock-db/data.json";

export function Home() {
  const [data, setData] = useState(dataBase);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header />
      <div className="main">
        <div id="form">
          <h2>Catálogo de Filmes</h2>
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>
      <div class="content">
        <div>
          {data.filter((movie) => {
            return movie.Title.toLowerCase().includes(search.toLowerCase());
          }).length === 0 ? (
            <NotFound />
          ) : (
            <div id="resultado">
              {data
                .filter((movie) => {
                  return movie.Title.toLowerCase().includes(
                    search.toLowerCase()
                  );
                })
                .map((movie) => {
                  return (
                    <div key={movie.Title}>
                      <Card movie={movie} />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
