import { useState } from 'react';

import { connect } from 'react-redux';
import { addList } from '../actions';

function ActionButton(props) {
  const [showForm, setShowForm] = useState(false);
  const [story, setStory] = useState({
    title: '',
    description: '',
    priority: '0',
    estimatedHours: 0,
    peopleInCharge: [],
    issues: [],
    comments: []
  });
  const {
    title,
    description,
    priority,
    estimatedHours,
    peopleInCharge
  } = story;

  const handleAddList = () => {
    const { dispatch } = props;
    const requireData = title && description && priority && estimatedHours;

    if (requireData) {

    }
  };

  const renderForm = () => {
    return (
      <div className='card'>
        <div className="card__form">
          <input
            className='card__input'
            type='text'
            name='title'
            placeholder="Enter user's story"
          />
          <textarea
            className='card__description'
            name='description'
            rows='4'
            placeholder='Description'
          ></textarea>
          <select
            className='card__select'
            name='priority'
          >
            <option value='0'>Select priority</option>
            <option value='h'>High</option>
            <option value='m'>Medium</option>
            <option value='l'>Low</option>
          </select>
          <input
            className='card__input'
            type='number'
            name='estimatedHours'
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

export default connect()(ActionButton);
