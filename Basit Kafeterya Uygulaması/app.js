const hesapla=document.querySelector(".Hesapla"),
menu=document.getElementsByName("menu"),
köfte=document.querySelector(".köfte"),
patates=document.querySelector(".patates"),
öğrenci=document.querySelector(".öğrenci"),
kola=document.querySelector(".kola"),
indirim=document.querySelector(".indirim"),
tablo=document.querySelector(".tablo"),
Masalar=document.querySelector(".Masalar"),
ödeme=document.querySelector(".ödeme");
let t=0,i=null,Masa;
const Hesap=()=>{
  let Mtd=document.createElement("td");
  let Kftd=document.createElement("td");
  let Ptd=document.createElement("td");
  let Ktd=document.createElement("td");
  let İtd=document.createElement("td");
  let Ötd=document.createElement("td");
  Mtd.textContent="-";
  Kftd.textContent="-";
  Ptd.textContent="-";
  Ktd.textContent="-";
  Ötd.textContent="-";
  let tSil = document.createElement("td");
  let silBtn =document.createElement("button");
  silBtn.textContent="Sil";
  tSil.appendChild(silBtn); 
  silBtn.onclick=function(e){
      tablo.removeChild(this.parentNode.parentNode);
  }
  let tr=document.createElement("tr");
  for(i=0;i<Masalar.length;i++){
    if(Masalar.options[i].selected){
      Masa=Masalar.options[i].value;
    }
   }
   Mtd.textContent=Masa;
if(köfte.checked)
{
  Kftd.textContent="Köfte";
    t+=20;
}
if(patates.checked)
{
    Ptd.textContent="Patates";
  t+=10;
}
if(kola.checked)
{
    Ktd.textContent="Kola";
  t+=15;
}
if(öğrenci.checked)
{
  İtd.textContent="-";
 i=t*0.05
 t-=i;
 İtd.textContent=i;
 indirim.textContent=i;
}
if(!öğrenci.checked)
{
 indirim.textContent="";
}
Ötd.textContent=t;
ödeme.textContent=t;
t=0;
i=null;
tr.appendChild(Mtd);
tr.appendChild(Kftd);
tr.appendChild(Ptd);
tr.appendChild(Ktd);
tr.appendChild(İtd);
tr.appendChild(Ötd);
tr.appendChild(tSil);
tablo.appendChild(tr);
}
hesapla.addEventListener("click",Hesap);