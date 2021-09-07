import { connect } from 'react-redux';

import Header from './Header';
import Kanban from './Kanban';

function App(props) {
  const { lists } = props;

  return (
    <div className='h-screen w-screen bg-gray-50'>
      <Header />
      <Kanban lists={lists} />
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
