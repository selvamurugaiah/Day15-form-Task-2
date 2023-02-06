form = document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
 table_data = document.querySelector('.user-data table')
 row = document.createElement('tr')
 arr_data = ['first','last','address','pincode','gender','food','state','country']
 for(let i of arr_data){
    table = document.createElement('td')
    t_data = document.querySelector(`[placeholder*=${i}]`)
    table.innerText = t_data.value
    row.append(table)
    t_data.value = ''
}
table_data.append(row)
 })
 
