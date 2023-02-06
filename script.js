function getData(event){
    event.preventDefault();
  
    let fname = event.target.firstName.value;
    let lname = event.target.lastName.value;
    let address = event.target.address.value;
    let pin = event.target.pinCode.value;
    let state = event.target.state.value; 
    let country = event.target.country.value;
    let gender= event.target.gender.value;
    let checkCount=0;
    let foods =checkedFoods();
  
    updateDatabase();
  
  
    function checkedFoods(){
      let food1= event.target.food1;
      let food2= event.target.food2;
      let food3= event.target.food3;
      let food4= event.target.food4;
      let food5= event.target.food5;
      let foods=[food1,food2,food3,food4,food5]
      let checkedFood='';
  
      for(let food of foods){
        if(food.checked){
          checkedFood+=food.value+', ';
          checkCount++;
        }
      }
      return checkedFood.slice(0,-2)
    }
    
    function updateDatabase(){
      let check = [fname,lname,address,pin,gender,country,state,foods]
      console.log(checkCount)
      if(!check.includes('') && checkCount>1){
        createNewRow();
        document.getElementById('warning').innerText = ''
        window.scrollTo(0,0)
        document.getElementById('form').reset();
      }
      else{
        document.getElementById('warning').innerText = '*Need to fill all the Fields'
        if(checkCount<2)
          document.getElementById('foodReq').style.color ='Red' ; 
        setTimeout(()=>{
          document.getElementById('warning').innerText = '';
          document.getElementById('foodReq').style.color ='black';
        },2000)
  
      }
    }
    
    function createNewRow(){
      let tbody= document.getElementById('tbody')
      let tr = document.createElement('tr')
      tr.innerHTML = `
                      <td>${fname}</td>
                      <td>${lname}</td>
                      <td>${address}</td>
                      <td>${pin}</td>
                      <td>${gender}</td>
                      <td>${foods}</td>
                      <td>${state}</td>
                      <td>${country}</td>
                      `
      tbody.append(tr);
    }
  
  }