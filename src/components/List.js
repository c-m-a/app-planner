import Card from './Card';

export default function List({ cards, title, wipLimits }) {
  return (
    <div className='list'>
      <div>
        <div className='list__header'>
          {title} { wipLimits !== 0 ? `(${wipLimits})` : '' }
        </div>
        { cards.map(userStory => <Card key={userStory.id} />) }
      </div>
    </div>
  );
}
