



function initFeatures(settings) {


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




    addLink('bug_files/css/formStyles.css',"stylesheet")
    addLink('bug_files/css/popups.css',"stylesheet")
    addLink('bug_files/css/wheel.css',"stylesheet")
    addScript('',`$("a[href^='#']").on("click", function () {let href = $(this).attr("href"); $("html, body").animate({scrollTop: $(href).offset().top}); return false;});`)
    addScript('bug_files/build/js/intlTelInput.js','')
    addScript('build/js/validationName.js','')
    addScript('build/js/validationPhone.js','')
    addScript('build/js/disabled.js','')
    addScript('',`function numberValidation(num) {sendBtn[num].addEventListener('click', (event) => {inputValidName(num);validName(num);disabled(num);(iti[num].isValidNumber()) ? "" : event.preventDefault(); + errorShow(num); + phoneInputFun(num); + selectChecker(num);})}for (var i = 0; i < sendBtn.length; ++i) {numberValidation(i);}')`)
  










    var cpaecomScript = document.createElement('script');
    cpaecomScript.src = 'https://app.cpaecom.com/tracker/analytics.js';
    cpaecomScript.async = true; 
    cpaecomScript.defer = true; 
    cpaecomScript.data-steam = 'XTT1N7sH6R';
    document.body.insertBefore(cpaecomScript , document.getElementById('mainScript'));











  var featuresFilesSrc = {
    formStyles: 'features_files/css/formStyles.css'
  } ; 
  
     
        function genLocalForm () {
          settings.form.subs = ` 
          <input type="hidden" name="utm_content" value="{utm_content}" />
          <input type="hidden" name="utm_source" value="{utm_source}" />
          <input type="hidden" name="utm_campaign" value="{utm_campaign}" />
          <input type="hidden" name="mbid" id="mbid" value="{mb_id}" />
          <input type="hidden" name="subid" id="subid" value="{subid}" />
          <input type="hidden" name="pixel" id="pixel" value="{pixel}" />`
                settings.form.orderScript="bug_files/api.php";
            var localForms = {
                'en' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Discount!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Make an order before the discount is given to another reader. <br>Offer expires in:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + '  <label for="name" class="data_label">Write your name:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="John Smith"><label for="phone" class="data_label">Write your phone number:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" > <button class="main-link send-btn" type="submit">Buy ' + settings.product + ' with discount 50%!</button> </form> </div><center> <h2 class="time_remains_title">The last day of discount giveaway: <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
















                'en_sg' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Discount!</span> <s><span class="js_old_price price_old">' + settings.priceMain       + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Make an order before the discount is given to another reader. <br>Offer expires in:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + '  <label for="name" class="data_label">Write your name:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="John Smith"><label for="phone" class="data_label">Write your phone number:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+65 123456789"> <button class="main-link send-btn" type="submit">Buy ' + settings.product + ' with discount 50%!</button> </form> </div><center> <h2 class="time_remains_title">The last day of discount giveaway: <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                




















                'pt' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">É rentável!</span> <s><span class="js_old_price price_old">' + settings.priceMain    + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Corra para pedir um desconto até que a oferta seja transferida para o próximo leitor! <br> A oferta ficará inválida em:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  +  '<label for="name" class="data_label">Seu nome:</label><input class="wheel_input name-valid" type="text" name="firstName" id="name" placeholder="Miguel Castro "><label for="phone" class="data_label">Telefone:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   placeholder="+351....."> <input type="hidden" name="landing" value="' + window.location.host + '"> <button class="main-link send-btn" type="submit">Encomendar ' + settings.product + ' com 50% de desconto!</button> </form> </div><center> <h2 class="time_remains_title">Oferta válida até (inclusive): <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                

















                'ph': '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Diskwento!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Umorder na  bago maibigay ang diskwento sa ibang mambabasa.  <br>Ang alok ay ma tatapos sa loob ng:    <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Isulat ang pangalan:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Pangalan"><label for="phone" class="data_label">Isulat ang numero ng telepono</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Telepono"> <button class="main-link send-btn" type="submit">Order ' + settings.product + ' na may 50% na diskwento!</button> </form> </div><center> <h2 class="time_remains_title">Ang huling araw ng pagbibigay ng diskwento:  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                


















                'ru' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Выгодно!</span> <s><span class="js_old_price price_old">' + settings.priceMain + "руб"   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain   + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Успейте заказать со скидкой, пока предложение не будет передано следующему читателю!<br>Предложение станет недействительным через:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Ваше имя:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Юрий Петров "><label for="phone" class="data_label">Номер телефона:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" > <button class="main-link send-btn" type="submit">Заказать ' + settings.product + ' со скидкой 50%!</button> </form> </div><center> <h2 class="time_remains_title">Пропозиція діє до (включно):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
                'ua' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Вигiдно!</span> <s><span class="js_old_price price_old">' + settings.priceMain + "грн"   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain  + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Встигніть замовити зі знижкою, поки пропозицію не буде передано наступному читачеві! <br>Пропозиція стане недійсною через: <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Ваше ім`я:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Ваше ім`я"><label for="phone" class="data_label">Номер телефона:</label> <input class="wheel_input phone-valid" type="tel" id="phone"  autocomplete="tel" required=""> <button class="main-link send-btn" type="submit">Замовити ' + settings.product + ' зі знижкою 50%!</button> </form> </div><center> <h2 class="time_remains_title">Пропозиція діє до (включно):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',

                
                
                
                
                
                
                
                
                
                
                
                'my' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Diskaun!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Buat pesanan sebelum diskaun diberikan kepada pembaca lain.<br>Tawaran tamat tempoh dalam:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Nama awak:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Pedro Lopez"><label for="phone" class="data_label">Nombor telefon:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+60 0321450435"> <button class="main-link send-btn" type="submit">Pesan ' + settings.product + ' dengan diskaun 50%!</button> </form> </div><center> <h2 class="time_remains_title">Hari terakhir pemberian diskaun:  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
    
                
                
                
                
                
                
                
                
                
                
                
                'mk' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Поволно!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Искористете ја можноста за попуст, дури тоа не му е понудено на наредниот читател! <br> Понудата ќе престане да важи по:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Вашето име:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Јован Ѓорѓиев "><label for="phone" class="data_label">Номер телефона:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+389 70 123 456"> <button class="main-link send-btn" type="submit">Нарачај ' + settings.product + ' со попуст 50%!</button> </form> </div><center> <h2 class="time_remains_title">Понудата важи до вклучително): <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
               
                'si' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Ugodno je!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Utegnite naročiti po nižji ceni, dokler ni ponudba šla za naslednjega bralca! <br>Ponudba je veljavna do:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Vaše ime:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Jure Slavič"><label for="phone" class="data_label">Telefonska številka:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+7 ......."> <button class="main-link send-btn" type="submit">Naročiti ' + settings.product + ' s popustom 50%!</button> </form> </div><center> <h2 class="time_remains_title">Ponudba velja do (vključujoč):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                'rs' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Попуст!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Пожурите да наручите пре него што попуст буде прослеђен следећем читаоцу, <br>ваша јединствена понуда завршава за:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Име и презиме:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Име и презиме"><label for="phone" class="data_label">Телефон:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+381 123456789"><button class="main-link send-btn" type="submit">Наручите ' + settings.product + ' са 50% попуста!</button> </form> </div><center> <h2 class="time_remains_title">Понуда важи пре:  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                'ar' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">سودآور!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST">' + (!!settings.form.subs?settings.form.subs:'') +'  <div style="margin-top:20px"><span class="js_old_price price_old" style="font-size: 50px;display: inline-block;text-decoration: line-through;margin-right: 10px;">' + settings.priceMain  + settings.currencyMain + '</span><b class="new_price js_new_price" style="font-size: 50px;color:red">' +  settings.currencyMain + '</b> <br></div> '  + ' <label for="name" class="data_label">اسمك:\n</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="يوري بيتروف\n"><label for="phone" class="data_label">رقم الهاتف:\n</label> <input class="wheel_input" type="text" id="phone"   autocomplete="tel" required="" placeholder=""> <button class="main-link send-btn" type="submit">اطلباطلب ' + settings.product + ' بخصم 50%!</button> </form> </div><center> <h2 class="time_remains_title">العرض سارٍ حتى:\n  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
             
                
    
                
                'lt' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Pelninga!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Paskubėkite užsakyti su nuolaida, kol pasiūlymas bus perkeltas į kitą skaitytoją! <br>Pasiūlymas pasibaigs po to, kai:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Jūsų vardas:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Gokhan Karakoc"><label for="phone" class="data_label">Telefono numeris:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+370 123456789"> <button class="main-link send-btn" type="submit">UŽSAKYTI ' + settings.product + ' su 50% nuolaida!</button> </form> </div><center> <h2 class="time_remains_title">Pasiūlymas galioja iki (imtinai):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
















               'pl' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Opłacalne!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Pospiesz się, aby zamówić z rabatem, aż oferta zostanie przekazana do następnego czytelnika! <br>Oferta straci ważność po:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Twoje imię i nazwisko:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Tom Czerniak "><label for="phone" class="data_label">Numer telefonu:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+48 123456789"> <button class="main-link send-btn" type="submit">ZAMÓWIĆ ' + settings.product + ' z 50% zniżką!</button> </form> </div><center> <h2 class="time_remains_title">Oferta ważna do (włącznie):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
              
               














                'hu' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Nyereséges!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Sietj megrendelésre kedvezménnyel, amíg az ajánlat át nem kerül a következő olvasónak! <br>Az ajánlat érvénytelen lesz, miután:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Az Ön neve:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Tóth Vera "><label for="phone" class="data_label">Telefonszám:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+36 12345678"> <button class="main-link send-btn" type="submit">RENDELÉS ' + settings.product + ' kedvezményes áron 50%!</button> </form> </div><center> <h2 class="time_remains_title">Ajánlat (egészen):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
               
               
               
               
               
               
               
               
               
               
               
               
               
                'lv' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Izdevīgi!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Pasteidzieties, lai pasūtītu ar atlaidi, līdz piedāvājums tiek nodots nākamajam lasītājam! <br>Piedāvājums kļūs nederīgs pēc:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Jūsu vārds:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder=" Aivars Janis "><label for="phone" class="data_label">Tālruņa numurs:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+371 0123456789"> <button class="main-link send-btn" type="submit">PASŪTĪT ' + settings.product + ' ar atlaidi 50%!</button> </form> </div><center> <h2 class="time_remains_title">Piedāvājums ir spēkā līdz (ieskaitot):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
                
                
                
                
                
                
                
                
                
                
                
                'sk' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Ziskový!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Ponáhľajte sa na objednávku so zľavou, kým sa ponuka neprevedie na ďalšiu čitateľku! <br> Ponuka bude neplatná po:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Vaše meno:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Vladimir Gordik "><label for="phone" class="data_label">Telefónne číslo:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+421 123456789"> <button class="main-link send-btn" type="submit">Objednať ' + settings.product + ' s 50% zľavou!</button> </form> </div><center> <h2 class="time_remains_title">Ponuka je platná do (vrátane):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
              
              
              
              
              
                'sg' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">贏利！</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">快點訂購，直到優惠轉移到下一位讀者! <br>優惠將在以下情況後失效：  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">你的名字：</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="王心><label for="phone" class="data_label">电话号码:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="电话号码"> <button class="main-link send-btn" type="submit">訂購' + settings.product + '享受50％的折扣！</button> </form> </div><center> <h2 class="time_remains_title">優惠有效期至： <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
                'bg' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Изгодно!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Успейте да поръчате с отстъпка, докато офертата не се предаде на следващия читател! <br>Офертата ще стане невалидна след:    <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Вашето име:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Име"><label for="phone" class="data_label">Телефонен номер:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Телефон"> <button class="main-link send-btn" type="submit">Поръчайте ' + settings.product + ' с 50% отстъпка!</button> </form> </div><center> <h2 class="time_remains_title">Офертата е валидна до (включително):  <span class="time_remains"> ' + outputDat(0, false) + '</span></h2> <br> </center>',
                
                
                
                
                
                
                
                'hr' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Ovo je korisno!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Požurite na narudžbu uz popust dok se ponuda ne prenese na sljedeći čitatelj! <br>Ponuda će postati nevažeća:    <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Vaše ime:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Ime "><label for="phone" class="data_label">Telefonski broj:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Telefon"> <button class="main-link send-btn" type="submit">Naručiti ' + settings.product + ' popustom 50%!</button> </form> </div><center> <h2 class="time_remains_title">Ponuda vrijedi do (uključivo):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
                'al' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Çmim i ulët!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Arrini ta porositni me zbritje përpara se oferta ti kalojë një lexuesi tjetër! <br>Oferta do të jetë e pavlefshme pas:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Emri i plote:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Florjan Fejzollari"><label for="phone" class="data_label">Numri i celularit:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="ex: +355 1234567890"> <button class="main-link send-btn" type="submit">Porositeni ' + settings.product + ' me një zbritje prej 50%!</button> </form> </div><center> <h2 class="time_remains_title"> Oferta është e vlefshme deri në (përfshirë):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
               
                'id' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' +  settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Menguntungkan!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Punya wakti untuk memesan dengan harga diskon,<br>sampai penawaran akan ditransfer ke pembaca lain!<br>Diskon akan tidak aktif setelah:<br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Masukkan nama:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Nama"><label for="phone" class="data_label">Masukkan nomor telepon:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Misalnya +62 12345678"> <button class="main-link send-btn" type="submit">Beli dengan diskon 50%!</button> </form> </div><center> <h2 class="time_remains_title">Penawaran ini berlaku hingga (inklusif): <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
              
              
              
              
              
              
                'vn' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"> <span class="discountс">Giảm giá!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Hãy đặt với giá khuyến mãi trước khi ưu đãi này được chuyển qua cho người đọc tiếp theo! Mức giá ưu đãi của bạn sẽ kết thúc sau:<br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Xin hãy nhập tên:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Chung Đình Toản"><label for="phone" class="data_label">Xin hãy nhập số điện thoại:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+84 123456789"> <button class="main-link send-btn" type="submit">Đặt hàng ' + settings.product + ' với giảm giá 50%!</button> </form> </div><center> <h2 class="time_remains_title">Xin lưu ý! Chương trình khuyến mãi đặc biệt chỉ có hiệu lực đến hết ngày: <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
               
               
                'it' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"> <span class="discountс">Conveniente!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Affrettatevi a fare l\'ordine prima che lo sconto passi al prossimo lettore, la vostra offerta unica termina tra: <br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Nome e cognome:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Francesco Rossi"><label for="phone" class="data_label">Telefono cellulare:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Per esempio, +39 0123456789"> <button class="main-link send-btn" type="submit">Ordinare ' + settings.product + ' con lo sconto 50%!</button> </form> </div><center> <h2 class="time_remains_title">Ricordate, l\'offerta speciale è valida fino al: <span class="time_remains">' + outputDat(0, false) + '</span> (compreso)</h2> <br> </center>',
                
              
              
              
              
                'es' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">DESCUENTO</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Reserve con el precio de promoción antes de que la oferta se pase al siguiente lector! <br>Su tarifa promocional finalizará después de:<br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Nome/Cognome</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Alejandro Rodriguez"><label for="phone" class="data_label">Mob.telefono</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder=""> <button class="main-link send-btn" type="submit">Ordene ' + settings.product + ' con 50% de descuento!</button> </form> </div><center> <h2 class="time_remains_title">EL NÚMERO DE PRODUCTOS DE OFERTA ES LIMITADO. LOS DESCUENTOS TODAVÍA ESTÁN DISPONIBLES <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
               
               
                'co' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">DESCUENTO</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Reserve con el precio de promoción antes de que la oferta se pase al siguiente lector! <br>Su tarifa promocional finalizará después de:<br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Nome/Cognome</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Alejandro Rodriguez"><label for="phone" class="data_label">Mob.telefono</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+57 123456789"> <button class="main-link send-btn" type="submit">Ordene ' + settings.product + ' con 50% de descuento!</button> </form> </div><center> <h2 class="time_remains_title">EL NÚMERO DE PRODUCTOS DE OFERTA ES LIMITADO. LOS DESCUENTOS TODAVÍA ESTÁN DISPONIBLES <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
              
              
              
              
              
              
              
              
              
                'ro' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Reducere!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Cantitatea produsului este limitata, grăbiți-vă să comandați până nu e prea târziu!<br>Reducerea dvs. expiră peste: <br>  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Introduceți numele dvs </label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Mihai Orbulescu"><label for="phone" class="data_label">Introduceți numarul dvs de telefon </label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+40 123456789"> <button class="main-link send-btn" type="submit">COMANDĂ ' + settings.product + '</button> </form> </div><center> <h2 class="time_remains_title">Fiți atenți, oferta este limitată și e valabilă până <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
               
               
               
               
               
               
               
               
               
               
               
               
                'cz' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Speciální nabídka</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Stíhnete si objednat se slevou, zatím nabídka nepřešla k jinému čtenářovi! <br>Nabídka vyprší za:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Uveďte jméno a příjmení</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Pavel Smejkal"><label for="phone" class="data_label">Uveďte tel.číslo</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+420 123456789"> <button class="main-link send-btn" type="submit">OBJEDNAT ' + settings.product + ' SE SLEVOU 50%!</button> </form> </div><center> <h2 class="time_remains_title">Pozor, akce se speciální slevou trvá pouze do  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
              
              
              
              
              
              
                'th' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">ราคาถูก!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">จนกว่าสินค้าจะสิ้นสุดโปรโมชั่น  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">ชื่อเต็ม </label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="ทวีเดช หยาดทอง"><label for="phone" class="data_label">ใส่หมายเลขโทรศัพท์</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+66 123456789"> <button class="main-link send-btn" type="submit">สั่งซื้อ ' + settings.product + ' พร้อมส่วนลด 50%!</button> </form> </div><center> <h2 class="time_remains_title">มองหาโปรโมชั่นด้วยราคาพิเศษ ไม่เกิน - 50%  <span class="time_remains">' + outputDat(0, false) + '</span> (รวมทั้ง)</h2> <br> </center>',
                
              
              
              
              
              
              
              
              
              
              
                'gr' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Κερδοφόρα!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Έχετε χρόνο για παραγγελία με έκπτωση, έως ότου η προσφορά μεταφερθεί σε άλλους αναγνώστες! <br>Οι εκπτώσεις θα είναι ανενεργές μετά από:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Εισαγάγετε ένα όνομα</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Πλήρες όνομα"><label for="phone" class="data_label">Εισαγάγετε το τηλέφωνο</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Τηλέφωνο"> <button class="main-link send-btn" type="submit">Αγορά με έκπτωση 50%!</button> </form> </div><center> <h2 class="time_remains_title">Αυτή η προσφορά ισχύει μέχρι (συμπεριλαμβάνεται):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
              
              
              
              
              
              
                'de' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Rabatt!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Beeilen Sie sich, um die Bestellung mit einem Rabatt abzuschließen, bis das Angebot nicht an einen anderen Leser übergeht! <br>Das Angebot wird ungültig nach:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Name:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Tomas Mann "><label for="phone" class="data_label">Telefonnummer:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+49 151 23456789"> <button class="main-link send-btn" type="submit">BESTELLEN ' + settings.product + ' MIT RABATT 50%!</button> </form> </div><center> <h2 class="time_remains_title">Das Angebot gilt bis (einschließlich):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
             
                
              
              
              
              
              
              
              
                'bg' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Това е изгодно!</span> <s><span class="js_old_price price_old">' + settings.priceMain  + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Имате време да поръчате това лекарство с отстъпка, докато тази оферта не бъде предадена на други читатели! След това отстъпките ще бъдат деактивирани:<br>   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Въведи име</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="ИМЕ "><label for="phone" class="data_label">Въведи телефонен номер</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Телефон"> <button class="main-link send-btn" type="submit">Вземи с отстъпка от 50%!</button> </form> </div><center> <h2 class="time_remains_title">Тази оферта е валидна до (включително):<span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
               
                











                'fr' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Réduction!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Dépêchez-vous de faire une commande un rabais, jusqu\'à ce que l\'offre soit transmise à un autre lecteur! <br>L\'offre sera            invalide dans:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Nom:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Élise Mercier"><label for="phone" class="data_label">Numéro de téléphone:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+33 6 12 345678"><button class="main-link send-btn" type="submit">Commandez ' + settings.product + ' avec 50% de réduction!</button> </form> </div><center> <h2 class="time_remains_title"> L\'offre est valable jusqu\'au (y compris):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>'
        }; 
            
            return localForms[settings.lang] + (!!settings.form.showSelect ? '<style>@import url("' + featuresFilesSrc.formStyles + '");\n.country_select {display: block!important} \n  </style>' : '<style>@import url("' + featuresFilesSrc.formStyles + '");\n </style>') + ((!!settings.wheel && settings.wheel.isNeeded) ? '<style>.order_block {display: none;}</style>' : '') + (settings.form.untilExpire == 0 ? '<style>.order_block h3 {display: none;}</style>' : '') + (settings.form.priceBrFix = 1 ? '<style>.priceс br{display: none;}</style>' : '');
            
            }
        //Блок формы
        if (!!settings.form && settings.form.isNeeded) {
    
            if ($('.order_form').length == 0) {
                $('.features-wrapper').prepend(genLocalForm());
                
                var timerFlag = 0;
                $(window).scroll(function () {
                    var timerOffset = $('.order_form').offset().top - $(window).height() * 1.5;
                    if ($(this).scrollTop() > timerOffset && timerFlag === 0) {
                        start_timer();
                        ++timerFlag;
                    }
                })
            } 
            if (settings.form.scrollAllLinks){
                      $('a').click(function(e) {
                          var top = $((!!settings.wheel && settings.wheel.isNeeded) ? '.toform' : '.order_block').offset().top;
                          e.preventDefault();
                          $('body,html').animate({
                              scrollTop: top
                          }, 800);
                      });
                }
         }
        
    
            
    
          //ТАЙМЕР
var mv_timer = document.getElementById("mv_timer");
if(mv_timer) {
  setInterval(function() {
   var newDate = new Date();
   var hours = 24 - newDate.getHours();
   var minutes = 60 - newDate.getMinutes();
   var seconds = 60 - newDate.getSeconds();
     if (seconds<10&&minutes<10) {
         mv_timer.innerHTML = hours+":"+0+minutes+":"+0+seconds
       } else if (seconds<10){
         mv_timer.innerHTML = hours+":"+minutes+":"+0+seconds
       } else if (minutes<10){
          mv_timer.innerHTML = hours+":"+0+minutes+":"+seconds
       } else {
       mv_timer.innerHTML = hours+":"+minutes+":"+seconds
     }}, 1000);
} 
var mv_timer_class = document.getElementsByClassName("mv_timer");
if(mv_timer_class) {
  setInterval(function() {
   var newDate = new Date();
   var hours = 24 - newDate.getHours();
   var minutes = 60 - newDate.getMinutes();
   var seconds = 60 - newDate.getSeconds();
   for(i=0; i<mv_timer_class.length; i++){
     if (seconds<10&&minutes<10) {
         mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+0+seconds
       } else if (seconds<10){
         mv_timer_class[i].innerHTML = hours+":"+minutes+":"+0+seconds
       } else if (minutes<10){
          mv_timer_class[i].innerHTML = hours+":"+0+minutes+":"+seconds
       } else {
       mv_timer_class[i].innerHTML = hours+":"+minutes+":"+seconds
     }}}, 1000); 
}               
    
    function outputDat(m, fullM) {
        var d = new Date();
        var p = new Date(d.getTime() - m * 86400000);
        var monthA = (fullM === false) ? '01,02,03,04,05,06,07,08,09,10,11,12'.split(',') : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
        var w = p.getDate();
        var ret = (fullM === false) ? p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear() : p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear();
        return ret;
    }
    var time = settings.form.untilExpire;
    var intr;
    
         function start_timer() {
            intr = setInterval(tick, 1000);
        }
    
    
    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        mins = mins >= 10 ? mins : "0" + mins;
        $("#min").html(mins);
        $("#sec").html(secs);
    }
      
  
    
}
