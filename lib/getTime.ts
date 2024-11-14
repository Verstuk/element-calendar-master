
import dayjs from "dayjs";
import "dayjs/locale/ru"; // Импортируем русский локаль 
import weekOfYear from "dayjs/plugin/weekOfYear"; 

dayjs.locale('ru'); // Устанавливаем русский язык 
dayjs.extend(weekOfYear); 

export const isCurrentDay = (day: dayjs.Dayjs) => {
    return day.isSame(dayjs(), "day")
};

export const getMonth = (month = dayjs().month()) => {
    dayjs.locale('ru');  
    const year = dayjs().year()
    const firstDayofMonth = dayjs().set("month", month).startOf("month").day()

    // Чтобы неделя начиналась с понедельника, переводим значение:  
    // Если день 0 (воскресенье), то это 6, а для остальных просто уменьшаем на 1  
    const adjustment = firstDayofMonth === 0 ? 6 : firstDayofMonth - 1;  

    let dayCounter = -adjustment; // Начинаем с корректированного значения  

    return Array.from({length: 5}, () => 
        Array.from({length: 7}, () => dayjs(new Date(year, month, ++dayCounter)))
    );
};   

export const getWeekDays = (date: dayjs.Dayjs) => {


    const startOfWeek = date.startOf("week"); 
    const weekDates = [];

    for (let i = 0; i < 7; i++) {

        const currentDate = startOfWeek.add(i, "day");
        weekDates.push({
            currentDate,
            today:
                currentDate.toDate().toDateString() === dayjs().toDate().toDateString(),
            isCurrentDay,
        });
    };

    return weekDates;
};

export const getHours = Array.from({ length: 24 }, (_, i) =>
    dayjs().startOf("day").add(i, "hour"),
  );

  // Function to generate weeks of the month dynamically
  export const getWeeks  = (monthIndex: number) => {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, monthIndex, 1));
    const lastDayOfMonth = dayjs(new Date(year, monthIndex + 1, 0)); // Last day of the month
  
    const weeks: number[] = [];
  
    // Loop from the first day to the last day of the month
    let currentDay = firstDayOfMonth;
    while (
      currentDay.isBefore(lastDayOfMonth) ||
      currentDay.isSame(lastDayOfMonth)
    ) {
      const weekNumber = currentDay.week();   //This requires the WeekOfYear plugin to work as imported above
      if (!weeks.includes(weekNumber)) {
        weeks.push(weekNumber);
      }
      currentDay = currentDay.add(1, "day"); // Move to the next day
    }
  
    return weeks;
  }