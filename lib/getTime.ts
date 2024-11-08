
import dayjs from "dayjs";

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
