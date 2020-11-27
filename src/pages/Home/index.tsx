import React, { useState, useEffect, useRef } from 'react';
import { Main } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import Chart from '../../components/Chart';

import arrow from '../../assets/arrow.png';

import slidesJSON from '../../assets/slide.json';
import noticiasJSON from '../../assets/noticias.json';

interface Noticia {
  Foto: string;
  Título: string;
  Texto: string;
  'Data de publica\u00E7\u00E3o': string;
  editoria?: string;
}

interface Editoria {
  nome: string;
  quantidade: number;
}

const Home: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('Nada');
  const [sorter, setSorter] = useState<string>('Título');
  const [categorias, setCategorias] = useState<string[]>([]);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [editorias, setEditorias] = useState<Editoria[]>([]);

  useEffect(() => {
    setSlides(slidesJSON[0].imagens);
  }, []);

  useEffect(() => {
    const editoriasData = [
      { nome: 'governo', quantidade: 75 },
      { nome: 'carnaval', quantidade: 50 },
      { nome: 'esporte', quantidade: 45 },
      { nome: 'ferias', quantidade: 30 },
      { nome: 'outros', quantidade: 25 },
    ];

    setEditorias(editoriasData);
  }, []);

  useEffect(() => {
    setCategorias(
      noticiasJSON[0].Editorias.map(editoria => {
        return editoria.Editoria;
      }),
    );
  }, []);

  useEffect(() => {
    setNoticias([]);
    if (filter !== 'Nada') {
      const [filteredEditoria] = noticiasJSON[0].Editorias.filter(
        editoria => editoria.Editoria === filter,
      );

      const mappedNoticias = filteredEditoria.Notícias.map(noticia => {
        return { ...noticia, editoria: filteredEditoria.Editoria };
      });

      let sortedNoticias = mappedNoticias;

      if (sorter === 'Título') {
        sortedNoticias = mappedNoticias.sort((a, b) =>
          a.Título.localeCompare(b.Título),
        );
      } else if (sorter === 'Data') {
        sortedNoticias = mappedNoticias
          .sort((a, b) => {
            const dateA = new Date(
              a['Data de publicação'].split('-').reverse().join('-'),
            );

            const dateB = new Date(
              b['Data de publicação'].split('-').reverse().join('-'),
            );

            return +dateA - +dateB;
          })
          .reverse();
      }

      setNoticias(sortedNoticias);
    } else {
      const mappedEditorias = [...noticiasJSON[0].Editorias];
      let arrNoticias: Noticia[] = [];

      mappedEditorias.forEach(singleEditoria => {
        arrNoticias = [
          ...arrNoticias,
          ...singleEditoria.Notícias.map(noticia => {
            return {
              ...noticia,
              editoria: singleEditoria.Editoria,
            };
          }),
        ];
      });

      let sortedNoticias = arrNoticias;

      if (sorter === 'Título') {
        sortedNoticias = arrNoticias.sort((a, b) =>
          a.Título.localeCompare(b.Título),
        );
      } else if (sorter === 'Data') {
        sortedNoticias = arrNoticias
          .sort((a, b) => {
            const dateA = new Date(
              a['Data de publicação'].split('-').reverse().join('-'),
            );

            const dateB = new Date(
              b['Data de publicação'].split('-').reverse().join('-'),
            );

            return +dateA - +dateB;
          })
          .reverse();
      }

      setNoticias(sortedNoticias);
    }
  }, [filter, sorter]);

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  const handleSorting = (value: string) => {
    setSorter(value);
  };

  const slidesRef = useRef<HTMLUListElement>(null);

  const slideLeft = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollLeft -= slidesRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollLeft += slidesRef.current.offsetWidth;
    }
  };

  return (
    <>
      <Header />
      <Main>
        <section id="hero">
          <div className="slider">
            <ul className="slider__selectors">
              {slides.map(() => {
                return <li className="selector" />;
              })}
            </ul>

            <img
              className="arrow arrow--left"
              src={arrow}
              alt="Ícone de seta"
              onClick={slideLeft}
              onKeyDown={slideLeft}
            />
            <img
              className="arrow arrow--right"
              src={arrow}
              alt="Ícone de seta"
              onClick={slideRight}
              onKeyDown={slideRight}
            />

            <ul className="slides" ref={slidesRef}>
              {slides.map(slide => {
                return (
                  <li className="slide">
                    <img alt="Placeholder" src={`/slides/${slide}`} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section id="editorias">
          <header>
            <h1>Editorias</h1>
            <div>
              <div>
                <p>Ordenar por:</p>
                <select onChange={e => handleSorting(e.target.value)}>
                  <option>Título</option>
                  <option>Data</option>
                </select>
              </div>
              <div>
                <p>Filtar por:</p>
                <select onChange={e => handleFilter(e.target.value)}>
                  <option>Nada</option>
                  {categorias.map(categoria => {
                    return <option>{categoria}</option>;
                  })}
                </select>
              </div>
            </div>
          </header>

          <ul className="editorias">
            {noticias.map(noticia => {
              return (
                <li className="editoria">
                  <div className="meta">
                    <p>{noticia['Data de publicação'].replaceAll('-', '/')}</p>
                    <p>{noticia.editoria}</p>
                  </div>
                  <img src={`/news/${noticia.Foto}`} alt="Placeholder" />
                  <h1>{noticia.Título}</h1>
                  <p>{noticia.Texto}</p>

                  <a href="http://example.com">Saiba mais</a>
                </li>
              );
            })}
          </ul>
        </section>
        <hr />
        <section id="editorias-mais-acessadas">
          <header>
            <h1>Editorias mais acessadas</h1>
          </header>
          <div>
            <Chart editorias={editorias} />
            <div className="mais-acessadas__texto">
              <h1>Título aqui</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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
          <div className="frame--info">
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

              <a href="mailto:contato@minutonews.com.br">
                contato@minutonews.com.br
              </a>

              <p>Aberto de segunda a sexta das 09h as 19h</p>
            </div>
          </div>

          <div className="frame--form">
            <ContactForm />
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
