import React from "react"
import PerformanceTile from "./performanceTile"

const Calendar = ({ dates, performanceData, handleCategoryFilter }) => {
  return (
    <div className="calendar-week">
      {dates.map((date, index) => {
        const day = new Date(date).toLocaleDateString("en-us", {
          month: "short",
          day: "2-digit",
        })
        return (
          <div key={index} className="day-column">
            <h2>{day}</h2>
            {performanceData.map(performance => {
              const includesDate = performance.performanceDates?.filter(
                performanceDate =>
                  new Date(performanceDate.startTime).toLocaleDateString(
                    "en-us",
                    { month: "short", day: "2-digit" }
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
