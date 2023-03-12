import { useLayoutEffect } from 'react';
import "./App.css"
import { Paralax } from './components/Paralax';



const App = () => {
  useLayoutEffect(() => {
    const loader = document.getElementById("loader");

    loader.classList.add("loaded");

    setTimeout(() => {
      document.body.removeChild(loader);
    }, 300);
  }, []);

  return (
    <main>    
      <Paralax />
    <br />
      <p>
      Parallax é a diferença na posição de objetos vistos em diferentes faixas de visão, medido pelo ângulo de inclinação entre as faixas. Com isso, objetos próximos têm uma maior Parallax que objetos mais distantes, quando observado de posições diferentes. Dessa forma, podemos dizer que o Parallax é o que nos dá a noção de profundidade em nosso campo de visão.
      </p>
      
      <br />

      <p>
      Na computação gráfica, o efeito Parallax costuma ser simulado com a técnica de mover imagens de fundo em uma velocidade mais lenta do que as imagens de primeiro plano, criando no nosso cérebro a ilusão de profundidade em planos 2D. Muito usada em jogos, essa técnica foi popularizada por volta de 1982 no jogo Moon Patrol.
      </p>

      <br /> <br />
      <h3>O Parallax na web</h3>
      <p>
      Já faz um tempo que o efeito Parallax saltou dos jogos para os sites, e através de diferentes técnicas se tornou uma das tendências mais atraentes no design para web. Com o uso principalmente de Javascript, e por vezes de HTML5 e CSS3, muitos sites criaram efeitos bem interessantes e criativos, que proporcionam belas experiências e aumentam a imersão do usuário. Normalmente, esse efeito está atrelado a rolagem da página.
      </p>
    </main>
  );
}

export default App;
