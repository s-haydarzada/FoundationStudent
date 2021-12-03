let task01=90
let task02=110
let project=true


let ortalama=(task01 + task02)/2
if(ortalama<90) {
    alert("false");
} else {
    if(ortalama>90 && project==false) {
        alert("qizil mezun");
    } else{
        alert("siz kecmediz");
    }
}
