const data_procedure = [
    {
        imgSrc : "..//images//widget//angioplasty.png",
        text : "Angioplasty"
    },
    {
        imgSrc : "..//images//widget//cabg.png",
        text : "Cabg"
    },
    {
        imgSrc : "..//images//widget//lipoma.png",
        text : "Lipoma"
    },
    {
        imgSrc : "..//images//widget//thyroidectomy.png",
        text : "Thyroidectomy"
    },
    {
        imgSrc : "..//images//widget//endoscopy.png",
        text : "Endoscopy"
    },
    {
        imgSrc : "..//images//widget//cholecystectomy.png",
        text : "Cholecystectomy"
    },
    {
        imgSrc : "..//images//widget//hysterectomy.png",
        text : "Hysterectomy"
    },
    {
        imgSrc : "..//images//widget//neurosurgery.png",
        text : "Neurosurgery"
    },
    {
        imgSrc : "..//images//widget//craniotomy.png",
        text : "Craniotomy"
    },
    {
        imgSrc : "..//images//widget//laminectomy.png",
        text : "Laminectomy"
    },
    {
        imgSrc : "..//images//widget//surgeryForStroke.png",
        text : "Surgery for Stroke"
    },
    {
        imgSrc : "..//images//widget//colonoscopy.png",
        text : "Colonoscopy"
    },
    {
        imgSrc : "..//images//widget//cataract.png",
        text : "Cataract"
    },
    {
        imgSrc : "..//images//widget//kneeReplacement.png",
        text : "Knee replacement"
    },
    {
        imgSrc : "..//images//widget//hipReplacement.png",
        text : "Hip replacement"
    },
    {
        imgSrc : "..//images//widget//circumcision.png",
        text : "Circumcision"
    },
    {
        imgSrc : "..//images//widget//liposuction.png",
        text : "Liposuction"
    },
    {
        imgSrc : "..//images//widget//psychiatry.png",
        text : "Prostatectomy"
    }
]

function createWidget_procedure(data_procedure){
    let widDiv = document.createElement("div");
    widDiv.className = "widget-procedure"; 

    widImg = document.createElement("img");
    widImg.className = "widget-img";
    widImg.src = data_procedure.imgSrc;
    widDiv.appendChild(widImg);

    widText = document.createElement("p");
    widText.innerHTML = data_procedure.text;
    widDiv.append(widText);

 
    document.getElementById("widgetContainer_procedure").appendChild(widDiv);
}

const onLoadPage_procedure = () => {
    for(let i = 0; i < data_procedure.length; i++) { 
        createWidget_procedure(data_procedure[i]);
    }
}

onLoadPage_procedure();

console.log(createWidget_procedure)