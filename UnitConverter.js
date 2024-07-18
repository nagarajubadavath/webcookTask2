function displayInput()
{
    data=document.getElementById("selected").value;
    console.log(data);
    const inputContainer=document.getElementById('inputContainer');
    inputContainer.innerHTML = '';
    let inputElement;
    let unitselect;
    let heading=document.createElement('h2');
    let heading2=document.createElement('h2');
    if(data==='length')
    {
        heading.textContent='Meter';
        inputElement=document.createElement('input');
        inputElement.type='number';
        //inputElement.placeholder='enter the length in meter';
        inputElement.value=1;

        heading2.textContent='CentiMeter';
        unitselect=document.createElement('input');
        unitselect.type='number';
        //unitselect.placeholder='enter the length in cm';
        unitselect.value=100
        inputElement.addEventListener('input',()=>{
            unitselect.value=inputElement.value*100;
        });
        
        unitselect.addEventListener('input',()=>{
            inputElement.value=unitselect.value/100;
        });
    }else if(data==='weight')
    {
        heading.textContent='Kilogram';
        inputElement=document.createElement('input');
        inputElement.type='number';
        //inputElement.placeholder='enter the weight in kg';
        inputElement.value=1

        heading2.textContent='Grams';
        unitselect=document.createElement('input');
        unitselect.type='number';
        //unitselect.placeholder='enter the length in grams';
        unitselect.value=1000;

        inputElement.addEventListener('input',()=>{
            unitselect.value=inputElement.value*1000;
        });
        unitselect.addEventListener('input',()=>{
            inputElement.value=unitselect.value/1000;
        });
    }else{
        heading.textContent='Kelvin';
        inputElement=document.createElement('input');
        inputElement.type='number';
        inputElement.placeholder='enter the temperature in kelvin';
        inputElement.value=1;
        
        heading2.textContent='Farenheit';
        unitselect=document.createElement('input');
        unitselect.type='number';
        unitselect.class='box';
        //unitselect.placeholder='enter the length in farenheit';
        unitselect.value=-457.87;

        inputElement.addEventListener('input',()=>{
            unitselect.value=(inputElement.value-273.15)*1.8+32;
        });
        unitselect.addEventListener('input',()=>{
            inputElement.value=(unitselect.value-32)*(5/9)+273.15;
        });
    }
    if(heading)
    {
        inputContainer.appendChild(heading);
    }
    inputContainer.appendChild(inputElement);
    if(heading2)
    {
        inputContainer.appendChild(heading2);
    }
    if(unitselect)
        {
            inputContainer.appendChild(unitselect);
        }
}