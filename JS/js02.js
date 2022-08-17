const Month = window.prompt("Nhap thang: ")
const Year = window.prompt("Nhap nam: ")
const DateTime = document.getElementById("date")
const NowDate = document.getElementById("now-date")
const Btn = document.getElementById("btn") 

let date =  new Date(Year, Month, 0).getDate()


DateTime.textContent = "Thang " + Month +" nam "+ Year +" co " + date + " ngay" 

Btn.addEventListener("click", () => {

    date = new Date()
    NowDate.textContent = "Hom nay, thu " + (date.getDay()+1) + " ngay " + date.getDate() +"/"+ date.getMonth() +"/"+ date.getFullYear() +
    " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

})