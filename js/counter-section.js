const data_counter = [
    {
        imgSrc : "..//images//widget//counter-image3.png",
        counter : "73",
        text : "Largest private healthcare network of Hospitals",
        number_gap : "5",
        endCount : "73+"
    },
    {
        imgSrc : "..//images//widget//counter-image1.png",
        counter : "1100",
        text : "Diagnostic centres across India",
        number_gap : "50",
        endCount : "1,100+"
    },
    {
        imgSrc : "..//images//widget//counter-image2.png",
        counter : "10000",
        text : "Pin codes Served across India",
        number_gap : "200",
        endCount : "10,000+"
    },
    {
        imgSrc : "..//images//widget//counter-image2.png",
        counter : "400",
        text : "Largest private network of clinics across India",
        number_gap : "50",
        endCount : "400+"
    },
    {
        imgSrc : "..//images//widget//counter-image2.png",
        counter : "5000",
        text : "Pharmacies",
        number_gap : "100",
        endCount : "5,000+"
    },
    {
        imgSrc : "..//images//widget//counter-image2.png",
        counter : "11000",
        text : "Doctors",
        number_gap : "200",
        endCount : "11,000+"
    }
]

function createWidget_counter(data_counter, i){
    let widDiv = document.createElement("div");
    widDiv.className = "counter-div";

    let countImg = document.createElement("img");
    countImg.className = "widget-img_counter";
    countImg.src = data_counter.imgSrc;


    let counter = document.createElement("div");
    counter.className = "widget-counter";
    counter.id = "widget-counter" + i;
    counter.textContent = data_counter.endCount;

    let countContent = document.createElement("div");
    countContent.className = "widget-content";
    countContent.innerHTML = data_counter.text;

    let combine = document.createElement("div");
    combine.className = "combine-counterContent";

    combine.append(counter);
    combine.append(countContent);

    widDiv.appendChild(countImg);
    widDiv.append(combine);

    document.getElementById("counter-content").append(widDiv);
}


const onLoadPageProcedure = () =>{
    for(let i = 0; i < data_counter.length; i++){
        createWidget_counter(data_counter[i], i);
    }
}

onLoadPageProcedure();
