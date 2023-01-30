import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
import './css/styles.css'

function App() {

  return (
    <div className="App">
      <header className="header">
        <a href="" className="header-brand">Galleria</a>
        <nav className="header-navbar">
          <ul>
              <li>
                <a href="#" className="active">Home</a>
              </li>
              <li>
                <a href="#">Fotos</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
        </nav>
        <div className="header-social-media">
          <ul>
            <li>
              <a href="#"><AiFillFacebook/></a>
            </li>
            <li>
              <a href="#"><AiFillTwitterSquare/></a>
            </li>
            <li>
              <a href="#"><AiFillInstagram/></a>
            </li>
            <li>
              <a href="#"><AiFillYoutube/></a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="gallery">
          <div className="gallery-card" id="card-1">
            <h2 className="gallery-card-title">Animais</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-2">
            <h2 className="gallery-card-title">Arquitetura</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-3">
            <h2 className="gallery-card-title">Cidade</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-4">
            <h2 className="gallery-card-title">Decorações</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-5">
            <h2 className="gallery-card-title">Esportes</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-6">
            <h2 className="gallery-card-title">Natureza</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-7">
            <h2 className="gallery-card-title">Paisagem</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-8">
            <h2 className="gallery-card-title">Pessoas</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>

          <div className="gallery-card" id="card-9">
            <h2 className="gallery-card-title">Refeições</h2>
            <a href="" className="gallery-card-btn">Mais Fotos</a>
          </div>
        </div>
      </main>
      <footer>
        <p><span>Galleria</span> &copy; 2023</p>
      </footer>
    </div>
  )
}

export default App
