const initialState = [
  {
    id: 0,
    status: 'TD',
    title: 'TODO',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'L',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 1,
    status: 'IP',
    title: 'In Progress',
    type: 'process',
    wipLimits: 10,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'M',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 2,
    status: 'PRR',
    title: 'Pull Request Review',
    type: 'process',
    wipLimits: 5,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'M',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 3,
    status: 'RFT',
    title: 'Ready For Testing',
    type: 'process',
    wipLimits: 10,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'H',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 4,
    status: 'C',
    title: 'Completed',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'L',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 5,
    status: 'R',
    title: 'Rejected',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        priority: 'M',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
];

export default function listsReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}


