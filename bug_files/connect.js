const jqScript = document.createElement('script');
jqScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js';
jqScript.id = 'formBlockGenerated';
document.head.appendChild(jqScript);

jqScript.onload = function(){
  const mainScript = document.createElement('script');
mainScript.src = 'bug_files/valerkinOlegkin.js';
mainScript.id = 'mainScript';
document.body.appendChild(mainScript);
mainScript.onload = function(){


initFeatures({
lang : 'ua', //список доступных языков - vn,it,es,co,hr,en,de,fr,ph,cz,id,th,gr,bg,al,ro,sg,en_sg,mk,si,sk,lv,hu,pl,lt,pt
product : 'Eromax', //название продукта
priceMain: 25 + "грн",
currencyMain: 2.5 + "грн",

    form : {
    isNeeded : 1, // 1-включить форму, 0-выключить    
    img: 'img/product.png', // путь до картинки продукта
    price : true, // плашка с ценой
    }
});
}
}