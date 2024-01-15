data_hospitalBranch = [
    {
        iconImg : "..//images//widget//bangalore.jpg",
        text : "Bangalore",
        address : "154 / 11, Bannerghatta Road Opp. I.I.M Bangalore",
        phone : "+(91)-80-2630 4050",
        buildingImg : "..//images//hospital-image//"
    },
    {
        iconImg : "..//images//widget//delhi.jpg",
        text : "Delhi",
        address : "Sarita Vihar Delhi Mathura Road, New Delhi",
        phone : "+(91)-11-71791090"
    },
    {
        iconImg : "..//images//widget//hyderabad.jpg",
        text : "Hyderabad",
        address : "Film Nagar, Jubilee Hills, Hyderabad, Telangana",
        phone : "+(91)-40-2360 7777"
    },
    {
        iconImg : "..//images//widget//jaipur.jpg",
        text : "Jaipur",
        address : "Plot No. 251, Old Sainik School Road, Jaipur",
        phone : "+(91)-80-2630 4050"
    },
    {
        iconImg : "..//images//widget//kolkata.jpg",
        text : "Kolkata",
        address : "58, Canal Circular Road Kolkata",
        phone : "+(91)-33-2320 3040",
        buildingImg : "..//images//hospital-image//kolkata.jpg"
    },
    {
        iconImg : "..//images//widget//mumbai.jpg",
        text : "Mumbai",
        address : "Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai",
        phone : "+(91)-22 3350 3350"
    },
    {
        iconImg : "..//images//widget//mysore.jpg",
        text : "Mysore",
        address : "Adhichunchanagiri Road Kuvempunagar, Mysore",
        phone : "+(91)0821-2568888"
    },
    {
        iconImg : "..//images//widget//noida.png",
        text : "Noida",
        address : "E 2, WellSpring Hospitals Rd, Block E, Sector 26, Noida",
        phone : "+(91)0120-401200"
    },
    {
        iconImg : "..//images//widget//chennai.png",
        text : "Chennai",
        address : "21, Greams Lane, Off Greams Road, Chennai",
        phone : "+(91)-44-40401066"
    },
]

function createWidget_hospital(data_hospitalBranch, i){
    let widDiv = document.createElement("div");
    widDiv.className = "hospital-widget";
    widDiv.id = "hospital-widget" + i;

    if(i==1){
        widDiv.className = "hospital-widget active-tab-button";
    }

    let hospitalImg = document.createElement("img");
    hospitalImg.className = "hospitalImg";
    hospitalImg.src = data_hospitalBranch.iconImg;

    

    let hospitalName = document.createElement("div");
    hospitalName.className = "hospitalName";
    hospitalName.id = "hospitalName";
    hospitalName.textContent = data_hospitalBranch.text;

    widDiv.appendChild(hospitalImg);
    widDiv.append(hospitalName);
    document.getElementById("hospital-widget").append(widDiv);
}

const onLoadPageProcedure = () =>{
    for(let i = 1; i <= data_hospitalBranch.length; i++){
        createWidget_hospital(data_hospitalBranch[i], i);
    }    
}

onLoadPageProcedure();

function openHospitaltab(){
    let widTab = document.getElementById("hospital-widget");

    widTab.onclick = function(){
        const nameTab = widTab.querySelector("#hospital-widget #hospitalName");
        document.getElementById("city").innerHTML = "Hospitals IN " + nameTab.innerHTML;
        // document.getElementById("address").textContent = data_hospitalBranch.address;
        console.log(nameTab);
   
        // document.getElementById("phone").textContent = data_hospitalBranch.phone;
    }
    // object.addEventListener("click", help);
    console.log(widTab);
}

openHospitaltab();