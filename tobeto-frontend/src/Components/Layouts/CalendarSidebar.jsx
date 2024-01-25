import React, { useState } from 'react';

const CalendarSidebar = () => {
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [educationStatus, setEducationStatus] = useState('');

  return (
    <div className="sidebar">
      <div className="search-section ms-5 mt-5 ">
        <div htmlFor="course-search" className='mb-2'>Eğitim Arama:</div>
        <input type="text" id="course-search" placeholder="Eğitim ara..." />
      </div>

      <div className="instructor-section ms-5 mt-3 ">
        <div htmlFor="instructor-select">Eğitmen:</div>
        <select
          className='mt-2'
          id="instructor-select" 
          value={selectedInstructor} 
          onChange={e => setSelectedInstructor(e.target.value)}
        >
          <option value="">Eğitmen Seç...</option>
          {/* Buraya eğitmenlerinizi ekleyin */}
          <option value="egitmen1">Eğitmen 1</option>
          <option value="egitmen2">Eğitmen 2</option>
          {/* Diğer eğitmenler */}
        </select>
      </div>

      <div className="education-status-section ms-5 mt-4">
        <p>Eğitim Durumu:</p>
        <div>
          <input 
            type="radio" 
            name="educationStatus" 
            value="completed" 
            checked={educationStatus === 'completed'}
            onChange={() => setEducationStatus('completed')}
          />
          Bitmiş Dersler
        </div>
        <div>
          <input 
            type="radio" 
            name="educationStatus" 
            value="ongoing" 
            checked={educationStatus === 'ongoing'}
            onChange={() => setEducationStatus('ongoing')}
          />
          Devam Eden Dersler
        </div>
        <div>
          <input 
            type="radio" 
            name="educationStatus" 
            value="purchased" 
            checked={educationStatus === 'purchased'}
            onChange={() => setEducationStatus('purchased')}
          />
          Satın Alınmış Dersler
        </div>
        <div>
          <input 
            type="radio" 
            name="educationStatus" 
            value="notStarted" 
            checked={educationStatus === 'notStarted'}
            onChange={() => setEducationStatus('notStarted')}
          />
          Başlamamış Dersler
        </div>
      </div>
    </div>
  );
};

export default CalendarSidebar;
