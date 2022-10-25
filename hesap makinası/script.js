'use strict'

let sonuçekranı = document.querySelector(".sonuç");
let tuşalanı = document.querySelector(".tuşalanı");
let yukardakisayı = document.querySelector(".küçükişlemler");

let basılacakSayı = "0";
let kaydedilenDeğer = null;
let oparatör = null;
let ikinciDeğerBekleniyormu = false;

yazıyıGüncelle();

function yazıyıGüncelle(){
  
 sonuçekranı.textContent = basılacakSayı;     // sonuç ekranının <p> kısmına basılacaksayıyı (butona basıldığında gelen sayı) basar.
 yukardakisayı.textContent = kaydedilenDeğer + oparatör;
}


tuşalanı.addEventListener("click", function(e){       //tuş alanına tıklandığında function'un içindeki e parametresi çalışır.
    let element = e.target;                           // element değişkeni e.target yani tuş alanında neye basarsan e parametresi onun değerini alır.


// if(element.matches("button")) {            // eğer tıkladığımız yer buttonsa aşağıdakileri yap. Bu komutda buton dışında birşeye basarsan undefined hatası verebilir.
//     console.log(element.value);
// }

if(!element.matches("button")) return;             // eğer tıkladığımız yer buton değilse geri dön. Yani butona basana işlem yapmazke.
    


if(element.classList.contains("aritmetikler")){   // eğer tıkladığımız yerin class isminde aritmetikler varsa aşağıdakileri yap.
    işlemler(element.value);
    yazıyıGüncelle();
    return;
}

if(element.classList.contains("cbuton")){   // eğer tıkladığımız yerin class isminde cbuton varsa aşağıdakileri yap.
    silme();
    yazıyıGüncelle();
    return;
}

if(element.classList.contains("birsil")){   // eğer tıkladığımız yerin class isminde cbuton varsa aşağıdakileri yap.
    console.log("bu bir tane silme butonu");
    birsilme();
    return;
}
    

inputNumber(element.value);
yazıyıGüncelle();
});



function işlemler(nextoparatör){

    const değer = parseFloat(basılacakSayı);

    if(oparatör && ikinciDeğerBekleniyormu){
        oparatör = nextoparatör;
        return;
    }

    if(kaydedilenDeğer === null){
        kaydedilenDeğer = değer;
    }
    else if (oparatör){
        let işlemsonuç = hesapla(kaydedilenDeğer, değer, oparatör);
        basılacakSayı = `${parseFloat(işlemsonuç.toFixed(7))}`;
        kaydedilenDeğer = işlemsonuç;
    }
    ikinciDeğerBekleniyormu = true;
    oparatör = nextoparatör;

    console.log(basılacakSayı, kaydedilenDeğer , oparatör ,ikinciDeğerBekleniyormu);
}


function hesapla(birinci,ikinci,oparatör){
    if(oparatör === "+"){
        return birinci + ikinci;
    }
    
    else if(oparatör === "-"){
        return birinci - ikinci;
    }
    
    else if(oparatör === "*"){
        return birinci * ikinci;
    }
    else if(oparatör === "%"){
        return birinci / ikinci;
    }
    
    return ikinci;
    
    }



function inputNumber(num){
if(ikinciDeğerBekleniyormu==true){
    basılacakSayı = num;
    ikinciDeğerBekleniyormu = false;
}
else{
    basılacakSayı = basılacakSayı === "0"? num : basılacakSayı + num ; // basılacak sayı eşittir = basılacak sayı 0 ise "num" u yazdır değilse basılacaksayı + num yazdır.
}
console.log(basılacakSayı, kaydedilenDeğer , oparatör ,ikinciDeğerBekleniyormu);
}



function silme(){
    basılacakSayı = "0" ;
}

function birsilme(){
    basılacakSayı = sonuçekranı.textContent.slice(0,-1);             // son basılan rakamı siler.
    sonuçekranı.textContent = sonuçekranı.textContent.slice(0,-1);   // son basılan sayıyı ekrandan siler.
}







// document.querySelector(".eşittir").addEventListener("click",function(){
//     let işlemsonuç = hesapla(kaydedilenDeğer, oparatör);
//     basılacakSayı = String(işlemsonuç);
//     kaydedilenDeğer = işlemsonuç;
//     document.querySelector(".sonuç").textContent(işlemsonuç);
// });