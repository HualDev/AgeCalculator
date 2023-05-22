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

day.addEventListener('keydown',()=>{
    if(day.value<=0 || day.value>31){
    dayError.style.display='inline'
    return
    }
    else{
        dayError.style.display='none'
    }
})

arrow.addEventListener('click',()=>{
    if(year.value>currentYear || year.value===''){
        yearError.style.display='inline'
        return
    }else if(year.value==currentYear && month.value>currentMonth || month.value==='' || month.value>12 || month.value<0){
        monthError.style.display='inline'
        return
    }else if(day.value>currentDay && month.value==currentMonth && year.value==currentYear || day.value==='' || day.value>31 || day.value<0){
        dayError.style.display='inline'
        return
    }


    if(currentDay<=day.value){
        

        if(currentMonth<=month.value){
            calculateDay()
            months.textContent=currentMonth+12-(month.value)-1
            years.textContent=currentYear-(year.value)-1
           
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

// day.addEventListener('keydown',()=>{
//     if(day.value<=0 || day.value>31){
//     dayError.style.display='inline'
//     return
//     }
//     else{
//         dayError.style.display='none'
//     }
// })

// month.addEventListener('keydown',()=>{
//     if(month.value<=0 || month.value>13){
//     monthError.style.display='inline'
//     return
//     }
//     else{
//         monthError.style.display='none'
//     }
// })

// year.addEventListener('keydown',()=>{
//     if((year.value-currentYear)>=0){
//     yearError.style.display='inline'
//     }
//     else{
//         yearError.style.display='none'
//     }
// })
