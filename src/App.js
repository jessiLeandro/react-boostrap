import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-gradient-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#conteudoNavbarSuportado"
          aria-controls="conteudoNavbarSuportado"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(página atual)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Ação
                </a>
                <a className="dropdown-item" href="#">
                  Outra ação
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Algo mais aqui
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Desativado
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </nav>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="controledemodulos-01.png"
              alt="Primeiro Slide"
            />

            <div className="carousel-caption text-dark d-none d-md-block">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="controledemodulos-01.png"
              alt="Primeiro Slide"
            />
            <div className="carousel-caption text-dark d-none d-md-block">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="controledemodulos-01.png"
              alt="Primeiro Slide"
            />
            <div className="carousel-caption text-dark d-none d-md-block">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>

      <div className="container justify-content-center">
        <div className="row justify-content-center justify-content-sm-center justify-content-md-center">
          <div className="col-md my-3">
            <div className="card w-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="controledemodulos-01.png"
                alt="Imagem de capa do card"
              />
              <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">
                  Um exemplo de texto rápido para construir o título do card e
                  fazer preencher o conteúdo do card.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md my-3">
            <div className="card w-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="controledemodulos-01.png"
                alt="Imagem de capa do card"
              />
              <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">
                  Um exemplo de texto rápido para construir o título do card e
                  fazer preencher o conteúdo do card.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md my-3">
            <div className="card w-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="controledemodulos-01.png"
                alt="Imagem de capa do card"
              />
              <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">
                  Um exemplo de texto rápido para construir o título do card e
                  fazer preencher o conteúdo do card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
