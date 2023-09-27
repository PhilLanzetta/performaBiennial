import React from 'react'
import PerformanceTile from './performanceTile'

const Calendar = ({ dates, performanceData, handleCategoryFilter }) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
  }

  const performanceDates = performanceData
    .map((performance) =>
      performance.performanceDates?.map((perfDate) =>
        new Date(perfDate.startTime).toLocaleDateString('en-us', {
          month: 'short',
          day: '2-digit',
        })
      )
    )
    .reduce((a, b) => a.concat(b), [])
    .filter(onlyUnique)
  console.log(performanceDates)
  const filteredDates = dates.filter((date) =>
    performanceDates.includes(
      new Date(date).toLocaleDateString('en-us', {
        month: 'short',
        day: '2-digit',
      })
    )
  )

  console.log(filteredDates)

  return (
    <div className='calendar-week'>
      {filteredDates.map((date) =>
        performanceData.map((performance) => {
          if (
            performance.performanceDates?.filter(
              (performanceDate) =>
                new Date(performanceDate.startTime).toLocaleDateString(
                  'en-us',
                  {
                    month: 'short',
                    day: '2-digit',
                  }
                ) ===
                new Date(date).toLocaleDateString('en-us', {
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
                day={new Date(date).toLocaleDateString('en-us', {
                  month: 'short',
                  day: '2-digit',
                })}
              ></PerformanceTile>
            )
          } else return null
        })
      )}
    </div>
  )
}

export default Calendar
