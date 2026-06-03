import { Theme } from './settings/types';
import { AnahitPortfolio } from './components/generated/AnahitPortfolio';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <AnahitPortfolio />;
}

export default App;
