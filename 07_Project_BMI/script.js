const form=document.querySelector('form')

// const height=parseInt(document.querySelector('#height').value)
// => This use case will give you empty

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===' ' || height<0 || isNaN(height))
    {
        results.innerHTML=`Please Enter valid height ${height}`
    }

    if(weight===' ' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`Please Enter valid weight ${weight}` ;
    }

    else 
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        if(bmi<18.6)
        {
            results.innerHTML=`Your BMI is ${bmi} : You are Underweight`
        }

        else if(bmi>=18.6 && bmi<=24.9)
        {
            results.innerHTML=`Your BMI is ${bmi} : You are Healthy`
        }

        else
        {
            results.innerHTML=`Your BMI is ${bmi} : You are Overweight`
        }
        
    }   
})