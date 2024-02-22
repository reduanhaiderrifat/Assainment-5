function getAnyWhere(take){
  const place = document.getElementById(take);
  place.scrollIntoView({behavior:"smooth"})
}

const allBtn = document.getElementsByClassName('btn-all');
let count = 0;
  let coount1 = 40;
for(const btn of allBtn){
  
  btn.addEventListener('click',function(event){
    
   

   count+=1;
   coount1-=1;
   setInnerValue('seat-select',count)
   setInnerValue('seat-left',coount1)
   event.target.style.backgroundColor = '#1DD100';
   event.target.style.color = '#FFF'; 
   event.target.setAttribute('disabled','true')


   const seat = event.target.innerText;
   const clas = 'Economy';
   const price = 550;
   setAnotherSection(seat,clas,price);
   updatePrice(price)
   updateGrand()
 
   const apply = document.getElementById('apply');
   if(count === 4){
    for(const btn of allBtn){
      btn.setAttribute('disabled',true)
    } 
    apply.removeAttribute('disabled')   
   } else{
    apply.setAttribute('disabled',true)
   }
    })  
    const phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.addEventListener('input', function() {
      const next = document.getElementById('next');
      if(count && phoneNumberInput.value !== "") {
        next.removeAttribute('disabled');
      } else {
        next.setAttribute('disabled', true);
      }
    });
     
}
function updatePrice(elementId){
  const totalCost = parseInt(document.getElementById('total-price').innerText);
  const sum = totalCost + parseInt(elementId);
  document.getElementById('total-price').innerText = sum
}
function updateGrand(status){
  const totalCost = parseInt(document.getElementById('total-price').innerText);
  if(status === undefined){
    document.getElementById('grand-price').innerText = totalCost;    
  } else{
    const secret = document.getElementById('cupon').value;
    if(secret === 'NEW15'){
      const discountPrice = totalCost * 0.15;
      document.getElementById('grand-price').innerText = totalCost - discountPrice;
    } else if (secret === "Couple 20"){
      const discountPrice = totalCost * 0.2;
      document.getElementById('grand-price').innerText = totalCost - discountPrice;
    }
  }
}

function setAnotherSection(seat,clas,price){
  const container = document.getElementById('booked-seat');

  const div = document.createElement('div')
div.classList.add('flex', 'justify-between','p-2')
div.style.listStyle = 'none'
  const li1 = document.createElement('li')
  li1.innerText = seat
  const li2 = document.createElement('li')
  li2.innerText = clas
  const li3 = document.createElement('li')
 li3.innerText = price
  div.appendChild(li1)
  div.appendChild(li2)
  div.appendChild(li3)
  container.appendChild(div)
}
function setInnerValue(id,value){
  const element = document.getElementById(id);
  element.innerText = value;
}


