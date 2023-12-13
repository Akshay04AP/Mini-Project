const data_specialities = [
    {
        imgSrc : "..//images//widget//cardiology.png",
        text : "Cardiology"
    },
    {
        imgSrc : "..//images//widget//neurology.png",
        text : "Neurology"
    },
    {
        imgSrc : "..//images//widget//gasenterology.png",
        text : "Gasenterology"
    },
    {
        imgSrc : "..//images//widget//orthopaedics.png",
        text : "Orthopaedics"
    },
    {
        imgSrc : "..//images//widget//oncology.png",
        text : "Oncology"
    },
    {
        imgSrc : "..//images//widget//gynecology.png",
        text : "Gynecology"
    },
    {
        imgSrc : "..//images//widget//skin.png",
        text : "Dermatology"
    },
    {
        imgSrc : "..//images//widget//ophthalmology.png",
        text : "Ophthalmology"
    },
    {
        imgSrc : "..//images//widget//pediatrics.png",
        text : "Pediatrics"
    },
    {
        imgSrc : "..//images//widget//thyroid.png",
        text : "Endocrinology"
    },
    {
        imgSrc : "..//images//widget//kidney.png",
        text : "Urology"
    },
    {
        imgSrc : "..//images//widget//nephrology.png",
        text : "Nephrology"
    },
    {
        imgSrc : "..//images//widget//pulmonology.png",
        text : "Pulmonology"
    },
    {
        imgSrc : "..//images//widget//rheumatology.png",
        text : "Rheumatology"
    },
    {
        imgSrc : "..//images//widget//neurosurgery.png",
        text : "Neurosurgery"
    },
    {
        imgSrc : "..//images//widget//x-ray.png",
        text : "Radiology"
    },
    {
        imgSrc : "..//images//widget//surgery.png",
        text : "Plastic Surgery"
    },
    {
        imgSrc : "..//images//widget//neonatalogy.png",
        text : "Neonatology"
    },
    {
        imgSrc : "..//images//widget//vascular.png",
        text : "Vascular Surgery"
    },
    {
        imgSrc : "..//images//widget//psychiatry.png",
        text : "Psychiatry"
    },
    {
        imgSrc : "..//images//widget//teeth.png",
        text : "Dentistry"
    },
    {
        imgSrc : "..//images//widget//ent.png",
        text : "ENT(Ear, Nose,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThroat)"
    }
]

function createWidget_specialities(data_specialities){
    let widDiv = document.createElement("div");
    widDiv.className = "widget-special"; 

    widImg = document.createElement("img");
    widImg.className = "widget-img";
    widImg.src = data_specialities.imgSrc;
    widDiv.appendChild(widImg);

    widText = document.createElement("p");
    widText.innerHTML = data_specialities.text;
    widDiv.append(widText);
 

    document.getElementById("widgetContainer_specialities").appendChild(widDiv);
}

const onLoadPage = () => {
    for(let i = 0; i < data_specialities.length; i++) { 
        createWidget_specialities(data_specialities[i]);
    }
}

onLoadPage();