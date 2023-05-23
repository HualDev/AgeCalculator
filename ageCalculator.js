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
const dayLabel = document.getElementById('dayLabel')
const monthLabel = document.getElementById('monthLabel')
const yearLabel = document.getElementById('yearLabel')


day.addEventListener('keydown',()=>{
    if(day.value<=0 || day.value>31){
    dayError.style.display='inline'
    dayLabel.style.color ='hsl(0, 100%, 67%)'
    day.style.borderColor='hsl(0, 100%, 67%)'
    return
    }
    else{
        dayError.style.display='none'
        dayLabel.style.color ='hsl(0, 1%, 44%)'
        day.style.borderColor='hsl(0, 1%, 44%)'
    }
})

month.addEventListener('keydown',()=>{
    if(month.value<=0 || month.value>12){
    monthError.style.display='inline'
    monthLabel.style.color='hsl(0, 100%, 67%)'
    month.style.borderColor='hsl(0, 100%, 67%)'
    return
    }
    else{
        monthError.style.display='none'
        monthLabel.style.color='hsl(0, 1%, 44%)'
        month.style.borderColor='hsl(0, 1%, 44%)'
    }
})

year.addEventListener('keydown',()=>{
    if((year.value-currentYear)>=0){
    yearError.style.display='inline'
    yearLabel.style.color='hsl(0, 100%, 67%)'
    year.style.borderColor='hsl(0, 100%, 67%)'
    }
    else{
        yearError.style.display='none'
        yearLabel.style.color='hsl(0, 1%, 44%)'
        year.style.borderColor='hsl(0, 1%, 44%)'
    }
})

arrow.addEventListener('click',()=>{
    if(year.value>currentYear || year.value===''){
        yearError.style.display='inline'
        yearLabel.style.color='hsl(0, 100%, 67%)'
        return
    }else if(year.value==currentYear && month.value>currentMonth || month.value==='' || month.value>12){
        monthError.style.display='inline'
        monthLabel.style.color='hsl(0, 100%, 67%)'
        return
    }else if(day.value>currentDay && month.value==currentMonth && year.value==currentYear || day.value==='' || day.value>31){
        dayError.style.display='inline'
        dayLabel.style.color ='hsl(0, 100%, 67%)'
        return
    }


    if(currentDay<=day.value){
        

        if(currentMonth<=month.value){
            calculateDay()
            months.textContent=currentMonth+12-(month.value)-1
            years.textContent=currentYear-(year.value)-1
           
            if(currentYear<=year.value){
                yearError.style.display='inline'
                yearLabel.style.color='hsl(0, 100%, 67%)'
            }
        }
        else{
            calculateDay()
            months.textContent = currentMonth-month.value-1
            years.textContent = currentYear-(year.value)
        }        
    }
    else{
        if(currentMonth<month.value){
            days.textContent = currentDay-day.value
            months.textContent = currentMonth+12-(month.value)
            years.textContent = currentYear-(year.value)-1
        }
        else{
            days.textContent = currentDay-day.value
            months.textContent = currentMonth-month.value
            years.textContent = currentYear-year.value 
        }
       
    }

})

function calculateDay(){
     if(month.value==1 || month.value==3 || month.value==5 || month.value==7 || month.value==8 || month.value==10 || month.value==12){
             days.textContent=currentDay+31-(day.value)
         }else if(month.value==4 || month.value==6 || month.value==9 || month.value==11){
             days.textContent=currentDay+30-(day.value)
         }else if(month.value==2){
             days.textContent=currentDay+28-(day.value)
         }
         days.textContent=currentDay+30-(day.value)
}




