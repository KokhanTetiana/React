import { useTransition, animated } from 'react-spring';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import Team from './pages/Team';

function getNestingLevel(pathname) {
  return pathname.split('/').filter(Boolean).length;
}

function App() {
  const location = useLocation();

  const nestingLevel = getNestingLevel(location.pathname);

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform:
        nestingLevel < 2
          ? 'translateX(100%)'
          : 'rotateX(90deg)',
    },
    enter: {
      opacity: 1,
      transform:
        nestingLevel < 2
          ? 'translateX(0%)'
          : 'rotateX(0deg)',
    },
    leave: {
      opacity: 0,
      transform:
        nestingLevel < 2
          ? 'translateX(-100%)'
          : 'rotateX(-90deg)',
    },
    keys: [location.key],
  });

  return (
    <>
      <Header />
      <main
        className="container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          perspective: '1000px',
        }}
      >
        {transitions((style, item) => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }} key={item.key}>
            <Routes location={item}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />}>
                <Route path="team" element={<Team />} />
              </Route>
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
