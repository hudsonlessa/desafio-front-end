import React from 'react';
import { Main } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const Home: React.FC = () => (
  <>
    <Header />
    <Main>
      <section id="hero">
        <div className="slider">
          <div className="slide" />
        </div>
      </section>
      <section id="editorias">
        <header>
          <h1>Editorias</h1>
          <div>
            <div>
              <p>Ordenar por:</p>
              <select>
                <option>Data</option>
              </select>
            </div>
            <div>
              <p>Filtar por:</p>
              <select>
                <option>Editoria</option>
              </select>
            </div>
          </div>
        </header>
        <ul className="editorias">
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
          <li className="editoria">
            <div className="meta">
              <p>20/03/2017</p>
              <p>Governo</p>
            </div>
            <img src="../../assets/slides/1.png" alt="Placeholder alt" />
            <h1>Votação encerrada</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum viverra diam ut venenatis.
            </p>

            <a href="http://example.com">Saiba mais</a>
          </li>
        </ul>
      </section>
      <hr />
      <section id="editorias-mais-acessadas">
        <header>
          <h1>Editorias mais acessadas</h1>
        </header>
        <div>
          <div>Gráfico</div>
          <div>
            <h1>Título aqui</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <iframe
          title="Minuto News"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2577.7921132900447!2d-0.15814783309122915!3d51.521127174621085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79ac8c8b4ce3a65d!2sNando&#39;s%20Baker%20Street!5e0!3m2!1sen!2sbr!4v1606253013148!5m2!1sen!2sbr"
        />
      </section>
      <section id="contato">
        <div className="frame">
          <div className="wrapper">
            <header>
              <h1>Entre em contato</h1>
            </header>

            <h2>Onde nos achar</h2>
            <div className="endereco">
              <p>Rua dos Alfeneiros, número 4</p>
              <p>00-91102</p>
              <p>Little Whitning</p>
              <p>Londres/Inglatera</p>
            </div>

            <div className="telefones">
              <p>(21) 4004 - 1234</p>
              <p>(21) 4004 - 4321</p>
            </div>

            <p>contato@minutonews.com.br</p>

            <p>Aberto de segunda a sexta das 09h as 19h</p>
          </div>
        </div>
        <div className="frame">
          <ContactForm />
        </div>
      </section>
    </Main>
    <Footer />
  </>
);

export default Home;
