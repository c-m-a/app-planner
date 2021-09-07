import List from './List';

export default function Kanban({ lists }) {
  return (
    <div className='kanban'>
      { lists.map(list => (
          <List
            key={list.id}
            title={list.title}
            cards={list.userStories}
            wipLimits={list.wipLimits}
          />
      )) }
    </div>
  );
}

