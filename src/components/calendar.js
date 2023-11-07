import React from 'react'
import PerformanceTile from './performanceTile'

const Calendar = ({ dates, performanceData, handleCategoryFilter }) => {
  return (
    <div className='calendar-week'>
      {dates.map((date) =>
        performanceData.map((performance) => {
          if (
            performance.performanceDates?.filter(
              (performanceDate) =>
                new Date(performanceDate.startTime).toLocaleString('en-us', {
                  timeZone: 'America/New_York',
                  month: 'short',
                  day: '2-digit',
                }) ===
                new Date(date.replace(/-/g, '/')).toLocaleString('en-us', {
                  timeZone: 'America/New_York',
                  month: 'short',
                  day: '2-digit',
                })
            ).length > 0
          ) {
            return (
              <PerformanceTile
                key={performance.id}
                performanceTile={performance}
                handleCategoryFilter={handleCategoryFilter}
                day={new Date(date.replace(/-/g, '/')).toLocaleDateString(
                  'en-us',
                  {
                    timeZone: 'America/New_York',
                    month: 'short',
                    day: '2-digit',
                  }
                )}
              ></PerformanceTile>
            )
          } else return null
        })
      )}
    </div>
  )
}

export default Calendar
