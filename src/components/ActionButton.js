import { useState } from 'react';

export default function ActionButton() {
  const [showForm, setShowForm] = useState(false);

  const renderForm = () => {
    return (
      <div className='card'>
        <div className="card__form">
          <input className='card__input' type='text' placeholder="Enter user's story" />
          <textarea
            className='card__description'
            name=''
            rows='4'
            placeholder='Description'
          ></textarea>
          <select className='card__select'>
            <option value='0'>Select priority</option>
            <option value='h'>High</option>
            <option value='m'>Medium</option>
            <option value='l'>Low</option>
          </select>
          <input
            className='card__input'
            type='number'
            placeholder='Enter hours aprox'
          />
          <button
            className='card__btn--default'
          >
            <span>Assign</span>
          </button>
          </div>
        <button
          className='card__btn--primary'
        >
          Add Story
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className='actionButton'
        onClick={() => setShowForm(!showForm)}
      >
        { showForm ? <span>Discard</span> : <span>Add Story</span> }
      </button>
      { showForm && renderForm() }
    </div>
  );
}
