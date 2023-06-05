resimklasoru='google-web-translate/lang_img/';
ebat=24; //16 , 24 , 32
document.write(`<style type='text/css'> a.flag { text-decoration:none; font-size:`+ebat+`px; padding:1px 0; background-repeat:no-repeat; background-image:url('`+resimklasoru+``+ebat+`.png'); } a.flag img {border:0; height:`+ebat+`px; width:`+ebat+`px;}</style>`);
var diller = [
["tr|tr" , "Türkçe" , "-100px -500px;"],
["tr|en" , "İngilizce" , "-0px -0px;"],
["tr|ru" , "Rusça" , "-500px -200px;"],
["tr|zh-CN" , "Çince" , "-300px -0px;"],
["tr|es" , "İspanyolca" , "-600px -200px;"],
["tr|ar" , "Arabic" , "-100px -0px;"],
];
for (let i = 0; i < diller.length; i++) {
document.write(`<a href="#" onclick="doGTranslate('`+diller[i][0]+`');return false;" title="`+diller[i][1]+`" class="flag nturl" style="background-position:`+diller[i][2]+`"><img src="`+resimklasoru+`blank.png" alt="`+diller[i][1]+`" /></a>`);
}