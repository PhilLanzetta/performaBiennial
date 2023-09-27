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
      {filteredDates.map((date, index) => {
        const day = new Date(date).toLocaleDateString('en-us', {
          month: 'short',
          day: '2-digit',
        })
        return (
          <div key={index} className='day-column'>
            <h2>{day}</h2>
            {performanceData.map((performance) => {
              const includesDate = performance.performanceDates?.filter(
                (performanceDate) =>
                  new Date(performanceDate.startTime).toLocaleDateString(
                    'en-us',
                    { month: 'short', day: '2-digit' }
                  ) === day
              )
              if (includesDate?.length) {
                return (
                  <PerformanceTile
                    performanceTile={performance}
                    key={performance.id}
                    day={day}
                    handleCategoryFilter={handleCategoryFilter}
                  ></PerformanceTile>
                )
              } else return null
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Calendar
