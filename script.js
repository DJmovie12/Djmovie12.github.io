const fromText = document.querySelector('.from-text');
const toText = document.querySelector('.to-text');
const exchange = document.querySelector('.exchange');
const button = document.querySelector('button');
const select = document.querySelectorAll('select');
const icons = document.querySelectorAll('.row .fas');
let speechSynthesisUtterance;
select.forEach((tag,id) => {
     for(let country_code in countries){
          let selected = id === 0 ? country_code == 'en-GB' ? 'selected' : "" : country_code == 'tr-TR' ? 'selected' : "";
          let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
          tag.insertAdjacentHTML('beforeend',option);
     }
});
var yazi1,yazi2,yazi3,yazi4,yazi5,yazi6,yazi7,yazi8,yazi9,yazi10;
function ShowEnter(){
			let textt = document.cevirenform.fromtextt.value;
				yazi1=textt.substr(0,499);
	document.cevirenform.fromtextt.value=textt.substr(0,499);
				}
exchange.addEventListener('click',() => {
     let temporaryText = fromText.value;
     let temporaryLanguage = select[0].value;
     fromText.value = toText.value;
     toText.value = temporaryText;
     select[0].value = select[1].value;
     select[1].value = temporaryLanguage;
});
fromText.addEventListener('keyup',() => {
     if(!fromText.value){
          toText.value = "";
     }
});
button.addEventListener('click',() => {
     let text = document.cevirenform.fromtextt.value;
     let translateFrom = select[0].value;
     let translateTo = select[1].value;
     if(!text) return;
     toText.setAttribute('placeholder','Tercüme ediliyor Lütfen Bekleyin');
     let mainApiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
     fetch(mainApiUrl).then(res => res.json()).then(data => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach(match => {
               if(data.id === 0){
				    var textleng=toText.length;
					var i;
					for(i = 0;i<textleng;i++){
					toText=toText.replace( "\n", " " );
					}
                    toText.value = data.translation;
               }
          });
          toText.setAttribute('placeholder','translation');
     });
});
icons.forEach(icon => {
     icon.addEventListener('click',({target}) => {
          if(!fromText.value || !toText.value) return;
          if(target.classList.contains('fa-copy')){
               if(target.id == 'from'){
                    navigator.clipboard.writeText(fromText.value);
               }else{
                    navigator.clipboard.writeText(toText.value);
               }
          }else{
               if(target.id == 'from'){
                    speechSynthesisUtterance = new SpeechSynthesisUtterance(fromText.value);
                    speechSynthesisUtterance.lang = select[0].value;
               }else{
                    speechSynthesisUtterance = new SpeechSynthesisUtterance(toText.value);
                    speechSynthesisUtterance.lang = select[1].value;
               }
               speechSynthesis.speak(speechSynthesisUtterance);
          }
     });
});