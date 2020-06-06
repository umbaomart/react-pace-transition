import React from 'react';
import './App.scss';
// eslint-disable-next-line
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header';
import gsap from 'gsap';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Home
  },
  {
    path: '/about',
    name: 'About',
    Component: About
  }
]

console.log(CSSTransition);



function App () {
  const onEnter = node => {
    console.log(node.children);

    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    console.log(node.children[0]);
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        {
          routes.map(({ name, path, Component }) => (
            <Route
              key={name}
              path={path} exact
            >
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  onExit={onExit}
                  onEntering={onEnter}
                  classNames="page"
                  unmountOnExit>
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}

            </Route>
          ))
        }
      </div>
    </>
  );
}

export default App;
