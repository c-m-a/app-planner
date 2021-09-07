const initialState = [
  {
    id: 0,
    status: 'Backlog',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 1,
    status: 'Approved',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 2,
    status: 'In Progress',
    type: 'process',
    wipLimits: 10,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 3,
    status: 'Ready For Testing',
    type: 'process',
    wipLimits: 10,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 4,
    status: 'Completed',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
        hoursSpent: 0,
        totalEstimatedHours: 30
      }
    ]
  },
  {
    id: 5,
    status: 'Rejected',
    type: 'info',
    wipLimits: 0,
    userStories: [
      {
        id: 0,
        title: 'User Story 1',
        description: 'example',
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


