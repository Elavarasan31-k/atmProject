function amt(){
    const amount=100000
    const amnt=document.getElementById('amt-in').value
    const amtpin=2727
    const pin=document.getElementById('pin-in').value
    if(amtpin==pin){
        if(amnt<=amount){
            let result=document.getElementById("result")
            result.innerHTML="Withdrawal Successfull🤑🤑..." 
            let balance=document.getElementById("bal")
            balance.innerHTML="Available balance "+(amount-amnt)    
        }
        else{
            const error=document.getElementById('amt-error')
            error.innerHTML="Enter the correct amount"
            result.innerHTML="The amount is not found🤕🤕..." 
            let balance=document.getElementById("bal")
            balance.innerHTML="Available balance "+amount
        }
        var img = document.getElementById('amt-img');
        img.style.visibility = 'hidden';
    }
    else{
        const error=document.getElementById('pin-error')
        error.innerHTML="Enter the vaild pin"
    }
  
}

