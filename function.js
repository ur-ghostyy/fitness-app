const notifbtn = document.querySelector(".notif-btn")
const notifdetails = document.querySelector(".notif-details")
notifbtn.addEventListener("click", ()=> {
    notifdetails.classList.toggle("show")
})