import { MainRoutes } from './Providers/MainRoutes';
import { Layout } from './components/Layout';
import { provider } from 'react-ioc';
import { BoardsInstance } from './mobx/BoardsInstance';
import { BoardInstance } from './mobx/BoardInstance';
import { ModalInstance } from './mobx/ModalInstance';

function App() {
  return (
    <Layout>
      <MainRoutes />
    </Layout>
  );
}

export default provider(BoardsInstance, BoardInstance, ModalInstance)(App);
