let day = document.getElementById('day')
let dayError = document.getElementById('dayError')
let month = document.getElementById('month')
let monthError = document.getElementById('monthError')
let year = document.getElementById('year')
let yearError = document.getElementById('yearError')
let arrow = document.getElementById('arrow')
let years = document.getElementById('years')
let months = document.getElementById('months')
let days = document.getElementById('days')
let today = new Date()
let currentYear = today.getFullYear()
let currentMonth = today.getMonth()+1
let currentDay = today.getDate()

arrow.addEventListener('click',()=>{
    if(year.value>currentYear){
        return
    }else if(year.value==currentYear && month.value>currentMonth){
        return
    }else if(day.value>currentDay && month.value==currentMonth){
        return
    }


    if(currentDay<day.value){
        days.textContent=currentDay+31-(day.value)
        if(currentMonth<month.value){
            months.textContent=currentMonth+12-(month.value)-1
            if((year.value-currentYear)>=0){
                yearError.style.display='inline'
                }
                else{
                    yearError.style.display='none'
                    years.textContent = currentYear-1-(year.value)
                }
        }
        else{
            months.textContent = currentMonth-month.value
        }        
    }
    else{
        if(currentMonth<month.value){
            months.textContent = currentMonth+12-(month.value)-1
        }
        else{
           months.textContent = currentMonth-month.value 
        }
        years.textContent = currentYear-year.value
        
        days.textContent = currentDay-day.value
    }
    

    console.log(today)
    console.log(currentDay)
    console.log(currentMonth)
    console.log(currentYear)
    console.log(day.value)

})

day.addEventListener('keydown',()=>{
    if(day.value<=0 || day.value>31){
    dayError.style.display='inline'
    }
    else{
        dayError.style.display='none'
    }
})

month.addEventListener('keydown',()=>{
    if(month.value<0 || month.value>13){
    monthError.style.display='inline'
    }
    else{
        monthError.style.display='none'
    }
})

year.addEventListener('keydown',()=>{
    if((year.value-currentYear)>=0){
    yearError.style.display='inline'
    }
    else{
        yearError.style.display='none'
    }
})
