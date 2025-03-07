import {createRoot} from 'react-dom/client';

import {useHrmStores} from './useHrmStores';

const App = () => {
  const store = useHrmStores();
  return <h1>hello {store.value}</h1>;
};

createRoot(document.getElementById('root')!).render(<App/>);
