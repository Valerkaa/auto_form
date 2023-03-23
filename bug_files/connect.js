const jqScript = document.createElement('script');
jqScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js';
jqScript.id = 'formBlockGenerated';
document.head.appendChild(jqScript);





jqScript.onload = function(){
  const mainScript = document.createElement('script');
mainScript.src = 'bug_files/valerkinOlegkin.js';
mainScript.id = 'mainScript';
document.body.appendChild(mainScript);
function addScript(src,innerHTML){
  var script = document.createElement('script');
  script.src = src;
  script.innerHTML = innerHTML;
  script.async = false; 
  document.body.insertBefore(script , document.getElementById('mainScript'));
}
function addLink(href,rel){
  var link = document.createElement('link');
  link.type = "text/css";
  link.href = href;
  link.rel = rel;
  
  document.head.appendChild(link);
}


addScript('bug_files/build/js/intlTelInput.js','')
addScript('bug_files/build/js/init.js',``)
addScript('bug_files/build/js/validationName.js','')
addScript('bug_files/build/js/validationPhone.js','')
addScript('bug_files/build/js/disabled.js','')




mainScript.onload = function(){

console.log("mainScript");



scriptiks({



  //Тут глобальные настройки!!
lang : 'ua', //список доступных языков - vn,it,es,co,hr,en,de,fr,ph,cz,id,th,gr,bg,al,ro,sg,en_sg,mk,si,sk,lv,hu,pl,lt,pt,ua
product : 'Erom', //название продукта на нужном языке
priceMain: 550 + "грн", // цена первоначальная + "валюта которая нужна"
currencyMain: 25 + "грн", // цена со скидкой  + "валюта которая нужна"
genderTargetting : 'all', // пол целевой аудитории - all, male, female
      // Настройки формы
    form : {
    isNeeded : 1, // 1-включить форму, 0-выключить    
    img: 'img/product.png', // путь до картинки продукта
    price : true, // Показывать цену на продукте, если нет false
    pp: "CPAecom", //Укажи пп DrCash || CPAecom
    stream_key: "XyuZalupa",// Стрим кей из пп
    id_offer : 54, // Ввести айди офера
    },

    //Настройки колеса

    //popup настройки
    popups: {
      isNeeded: 1, // 1-включить попы, 0-выключить
      bgColor: 'rgba(87, 86, 141, 0.8)', // цвет фона сообщения
      textColor: '#fff', // цвет основного текста сообщения
      emphColor: 'cyan', // цвет выделений в сообщениях 
      blackIcons: false // черные или белые иконки, значения true или false
  },


  //Настройки колеса
  wheel: {
    isNeeded: 1, // 1-включить колесо, 0-выключить
    customWheel: 'bug_files/img/prizewheel11.png'  // ссылка на свое колесо, либо fals
}

});
}
}