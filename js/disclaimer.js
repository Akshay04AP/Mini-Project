
// myButton = document.getElementById("recruitment_read");
// myPopup = document.getElementById("recruitment_content");


// myButton.addEventListener("click", function () {
//     myPopup.classList.add("show");
// });
// // closePopup.addEventListener("click", function () {
// //     myPopup.classList.remove("show");
// // });
// window.addEventListener("click", function (event) {
//     if (event.target == myPopup) {
//         myPopup.classList.remove("show");
//     }
// });

function show_detail(cardId){
    let popup = document.getElementById(cardId);
    popup.classList.add("show");
}

function close_detail(cardId){
    let popup = document.getElementById(cardId);
    popup.classList.remove("show");   
}