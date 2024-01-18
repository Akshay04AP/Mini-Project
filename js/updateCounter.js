const counter_Updation = [
    {
        counter : "73",
        number_gap : "5",
        endCount : "73+"
    },
    {
        counter : "1100",
        number_gap : "50",
        endCount : "1,100+"
    },
    {
        counter : "10000",
        number_gap : "200",
        endCount : "10,000+"
    },
    {
        counter : "400",
        number_gap : "50",
        endCount : "400+"
    },
    {
        counter : "5000",
        number_gap : "100",
        endCount : "5,000+"
    },
    {
        counter : "11000",
        number_gap : "200",
        endCount : "11,000+"
    }
]


    // counterElement.className = "widget-counter";
    // counterElement.innerHTML = data_counter.counter;

let currentCount = 0;
function updateCounter(counter_Updation, i){
    let counter_id = "widget-counter" + i;
    const counterElement = document.getElementById("counter-content");
    // let end = data_counter.counter;
    let end = counter_Updation.number_gap;

    console.log(counterElement);
    console.log(currentCount);
    counterElement.textContent = currentCount;
    console.log(end);
    // console.log(number_gap);
    // console.log(end);
    if(currentCount < end){
        currentCount += 10;
        requestAnimationFrame(updateCounter);
        console.log(currentCount);
    }
    else{
        counterElement.textContent = counter_Updation.endCount;
    }
    
        // const counterElement = document.getElementById('counter');
        
        //   const endCount = 500000000000000000500;
        //   counterElement.textContent = currentCount;
        //   if (currentCount < endCount) {
        //     currentCount += 1;
        //     requestAnimationFrame(updateCounter);
        //   } else {
        //     counterElement.textContent = endCount;
        //   }
    }

    // window.addEventListener('load', updateCounter);
// window.addEventListener('load', updateCounter);

// updateCounter(data_counter[0], "widget-counter" + 0);
// updateCounter(data_counter[i], "widget-counter" + i);

const onCounterUpdate = () =>{
    for(let i = 0; i < 1; i++){
        updateCounter(counter_Updation[i], i);
    }
}

onCounterUpdate();
