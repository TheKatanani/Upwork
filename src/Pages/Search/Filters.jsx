import React from 'react';
import ItemList from '../../components/ui/ItemList';

const mockData = {
  category: [
    { id: 1, text: 'Web Development' },
    { id: 2, text: 'Mobile Development' },
    { id: 3, text: 'Design & Creative' },
    { id: 4, text: 'Writing' },
    { id: 5, text: 'Translation' },
    { id: 6, text: 'Legal' },
    { id: 7, text: 'Admin Support' },
    { id: 8, text: 'Sales & Marketing' },
    { id: 9, text: 'Accounting & Consulting' },
  ],
  experienceLevel: [
    { id: 10, text: 'Entry Level (0-2 years)' },
    { id: 11, text: 'Intermediate (2-5 years)' },
    { id: 12, text: 'Expert (5+ years)' },
  ],
  jobType: [
    { id: 13, text: 'Hourly' },
    { id: 14, text: 'Fixed-Price' },
  ],
  numberOfProposals: [
    { id: 15, text: 'Less than 5 proposals' },
    { id: 16, text: '5 to 10 proposals' },
    { id: 17, text: '10 to 15 proposals' },
    { id: 18, text: '15 to 20 proposals' },
    { id: 19, text: '20 to 50 proposals' },
  ],
  clientInfo: [
    { id: 20, text: 'New client (less than one month)' },
    { id: 21, text: 'Previous client' },
    { id: 22, text: 'Payment verified' },
  ],
  clientHistory: [
    { id: 23, text: 'Less than one month' },
    { id: 24, text: '1 to 3 months' },
    { id: 25, text: '3 to 6 months' },
    { id: 26, text: 'More than 6 months' },
  ],
  projectLength: [
    { id: 27, text: 'Less than one month' },
    { id: 28, text: '1 to 3 months' },
    { id: 29, text: '3 to 6 months' },
    { id: 30, text: 'More than 6 months' },
  ],
};

const Filters = () => {
  return (
    <div className='filters'>
      <h2>Filter By</h2>
      <ItemList title='Category' items={mockData.category} type='checkbox' />
      <ItemList title='Experience level' items={mockData.experienceLevel} type='checkbox' />
      <ItemList title='Job type' items={mockData.jobType} type='checkbox' />
      <ItemList title='Number of proposals' items={mockData.numberOfProposals} type='checkbox' />
      <ItemList title='Client info' items={mockData.clientInfo} type='checkbox' />
      <ItemList title='Client history' items={mockData.clientHistory} type='checkbox' />
      <ItemList title='Project length' items={mockData.projectLength} type='checkbox' />
    </div>
  );
};

export default Filters;
