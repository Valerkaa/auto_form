



function scriptiks(settings) {


  










    // var cpaecomScript = document.createElement('script');
    // cpaecomScript.src = 'https://app.cpaecom.com/tracker/analytics.js';
    // cpaecomScript.async = true; 
    // cpaecomScript.defer = true; 
    // // cpaecomScript.data-steam = 'XTT1N7sH6R';
    // document.body.insertBefore(cpaecomScript , document.getElementById('mainScript'));











  var featuresFilesSrc = {
    formStyles: 'bug_files/css/formStyles.css',
    popupsStyles: 'bug_files/css/popups.css',
    popupsIconUser: 'bug_files/img/count-user_black.png',
    popupsIconOrder: 'bug_files/img/count-order-984_black.png',
    prizeWheel: 'bug_files/img/prizewheel.png',
    wheelCursor: 'bug_files/img/wheel-cursor.png',
    wheelStyles: 'bug_files/css/wheel.css',
    validStyle: 'bug_files/build/css/intlTelInput.css',
    erorStyle: 'bug_files/build/css/styleError.css'
  } ; 
  function addLink(href,rel){
    var link = document.createElement('link');
    link.type = "text/css";
    link.href = href;
    link.rel = rel;
    
    document.head.appendChild(link);
  }
  addLink(`${featuresFilesSrc.popupsIconUser}`,"stylesheet")
addLink(`${featuresFilesSrc.formStyles}`,"stylesheet")
addLink(`${featuresFilesSrc.popupsIconUser}`,"stylesheet")
addLink(`${featuresFilesSrc.popupsStyles}`,"stylesheet")
addLink(`${featuresFilesSrc.popupsIconOrder}`,"stylesheet")
addLink(`${featuresFilesSrc.prizeWheel}`,"stylesheet")
addLink(`${featuresFilesSrc.wheelCursor}`,"stylesheet")
addLink(`${featuresFilesSrc.wheelStyles}`,"stylesheet")
addLink(`${featuresFilesSrc.validStyle}`,"stylesheet")
addLink(`${featuresFilesSrc.erorStyle}`,"stylesheet")
        
        function genLocalForm () {
          settings.form.subs = ` 
          <input type="hidden" name="utm_content" value="{utm_content}" />
          <input type="hidden" name="utm_source" value="{utm_source}" />
          <input type="hidden" name="utm_campaign" value="{utm_campaign}" />
          <input type="hidden" name="mbid" id="mbid" value="{mb_id}" />
          <input type="hidden" name="subid" id="subid" value="{subid}" />
          <input type="hidden" name="pixel" id="pixel" value="{pixel}" />
          <input type="hidden" name="stream_key" id="stream_key" value="${settings.form.stream_key}"/>
          <input type="hidden" name="id_offer" id="id_offer" value="${settings.form.id_offer}" />`


            if(settings.form.pp === "DrCash"){
                settings.form.orderScript="bug_files/drcash.php";
            }else if(settings.form.pp === "CPAecom"){
                settings.form.orderScript="bug_files/ecom.php";
            }
                
            var localForms = {
                'en' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Discount!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Make an order before the discount is given to another reader. <br>Offer expires in:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + '  <label for="name" class="data_label">Write your name:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="John Smith"><label for="phone" class="data_label">Write your phone number:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" > <button class="main-link send-btn" type="submit">Buy ' + settings.product + ' with discount 50%!</button> </form> </div><center> <h2 class="time_remains_title">The last day of discount giveaway: <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                
















                'en_sg' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Discount!</span> <s><span class="js_old_price price_old">' + settings.priceMain       + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Make an order before the discount is given to another reader. <br>Offer expires in:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + '  <label for="name" class="data_label">Write your name:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="John Smith"><label for="phone" class="data_label">Write your phone number:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="+65 123456789"> <button class="main-link send-btn" type="submit">Buy ' + settings.product + ' with discount 50%!</button> </form> </div><center> <h2 class="time_remains_title">The last day of discount giveaway: <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                




















                'pt' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">É rentável!</span> <s><span class="js_old_price price_old">' + settings.priceMain    + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Corra para pedir um desconto até que a oferta seja transferida para o próximo leitor! <br> A oferta ficará inválida em:   <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  +  '<label for="name" class="data_label">Seu nome:</label><input class="wheel_input name-valid" type="text" name="firstName" id="name" placeholder="Miguel Castro "><label for="phone" class="data_label">Telefone:</label> <input class="wheel_input phone-valid" type="tel" id="phone"   placeholder="+351....."> <input type="hidden" name="landing" value="' + window.location.host + '"> <button class="main-link send-btn" type="submit">Encomendar ' + settings.product + ' com 50% de desconto!</button> </form> </div><center> <h2 class="time_remains_title">Oferta válida até (inclusive): <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                

















                'ph': '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Diskwento!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Umorder na  bago maibigay ang diskwento sa ibang mambabasa.  <br>Ang alok ay ma tatapos sa loob ng:    <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Isulat ang pangalan:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Pangalan"><label for="phone" class="data_label">Isulat ang numero ng telepono</label> <input class="wheel_input phone-valid" type="tel" id="phone"   autocomplete="tel" required="" placeholder="Telepono"> <button class="main-link send-btn" type="submit">Order ' + settings.product + ' na may 50% na diskwento!</button> </form> </div><center> <h2 class="time_remains_title">Ang huling araw ng pagbibigay ng diskwento:  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
                


















                'ru' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Выгодно!</span> <s><span class="js_old_price price_old">' + settings.priceMain    + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain   + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Успейте заказать со скидкой, пока предложение не будет передано следующему читателю!<br>Предложение станет недействительным через:  <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Ваше имя:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Юрий Петров "><label for="phone" class="data_label">Номер телефона:</label> <input class="wheel_input phone-valid" type="tel" id="phone"  autocomplete="tel" required="" ><input name="phone" class="full_phone" type="hidden"> <button class="main-link send-btn" type="submit">Заказать ' + settings.product + ' со скидкой 50%!</button> </form> </div><center> <h2 class="time_remains_title">Пропозиція діє до (включно):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
                'ua' : '<div class="order_block"> <div class="prod_img_wrapper"> <img src="' + settings.form.img + '" width="300" class="prod_img">' + ((settings.form.price) ? '<div class="priceс"><span class="discountс">Вигiдно!</span> <s><span class="js_old_price price_old">' + settings.priceMain   + '</span></s><br> <b class="new_price js_new_price price_main">' +  settings.currencyMain  + '</b> </div>' : '') + '</div> <center> <h3 style="text-align: center">Встигніть замовити зі знижкою, поки пропозицію не буде передано наступному читачеві! <br>Пропозиція стане недійсною через: <div class="time-to-lose" id="mv_timer"></div> </h3> </center> <form class="order_form form-send" action="'+settings.form.orderScript+'" method="POST"> ' + (!!settings.form.subs?settings.form.subs:'')  + ' <label for="name" class="data_label">Ваше ім`я:</label><input class="wheel_input name-valid" type="text" name="firstName" autocomplete="name" required="" id="name" placeholder="Ваше ім`я"><label for="phone" class="data_label">Номер телефона:</label> <input class="wheel_input phone-valid" type="tel" id="phone"  autocomplete="tel" required=""><input name="phone" class="full_phone" type="hidden"><button class="main-link send-btn" type="submit">Замовити ' + settings.product + ' зі знижкою 50%!</button> </form> </div><center> <h2 class="time_remains_title">Пропозиція діє до (включно):  <span class="time_remains">' + outputDat(0, false) + '</span></h2> <br> </center>',

                
                
                
                
                
                
                
                
                
                
                
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
            
            return localForms[settings.lang] +  ((!!settings.wheel && settings.wheel.isNeeded) ? '<style>.order_block {display: none;}</style>' : '') + (settings.form.untilExpire == 0 ? '<style>.order_block h3 {display: none;}</style>' : '') + (settings.form.priceBrFix = 1 ? '<style>.priceс br{display: none;}</style>' : '');
            
            }












 
    //Блок всплывашек
    if (!!settings.popups && settings.popups.isNeeded) {
    
        
        


      // вставляем стили и блок
      
           var popupsBlock = '<div class="show-message"></div><style>@import url("' + featuresFilesSrc.popupsStyles + '");.show-message__item, .show-message__item-first{background-color:' +  ((!settings.popups.bgColor) ? ' ' : settings.popups.bgColor) + ';}.show-message__info{color: ' + ((!settings.popups.textColor) ? ' ' : settings.popups.textColor) + ';} .show-message__info #js-user-id {color: ' + ((!settings.popups.textColor) ? ' ' : settings.popups.textColor) + '} .show-message__emph { color: ' + ((!settings.popups.emphColor) ? ' ' : settings.popups.emphColor) + '}  ' + ((!settings.popups.blackIcons) ? ' ' : '.show-message__info.icon-box::before {  content: " ";  background-image: url("' + featuresFilesSrc.popupsIconUser + '");} .everad-sprite-bucket+.show-message__info.icon-box::before { background-image: url("' + featuresFilesSrc.popupsIconOrder + '");}') + '</style>';
           
      
      document.body.insertAdjacentHTML('beforeend', popupsBlock);
      count_class = ".count-people";
  
      //функция определения размера скидки (если есть колесо - то будут выводиться разне значения, если нет - то 50%)
      function getDiscount() {
          if (!!settings.wheel && settings.wheel.isNeeded) {
              var discountVal = ['10%', '30%', '15%', '35%'];
              return discountVal[Math.floor(Math.random() * 4)];
          } else {
              var discountVal = '50%';
              return discountVal;
          }
      }
          
          
      lastpack_class = ".lastpack";
      var packages =  Math.ceil(Math.random() * 15 + 15);
  
      function reducePackages() {
           if(packages == 2) {
              return 2;
          }
          
                  --packages;
          return packages;
         
      }
          
          
      // тексты сообщений
      var popupsMsg = {
          'vn': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Số lượng người truy cập trang web:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> vừa đặt mua ' + settings.product + ' <span class="show-message__emph">với giá khuyến mãi ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Còn <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> sản phẩm với giá khuyễn mãi.</span></p></div>'
          },
          'ro': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Utilizatori pe pagină:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> a comandat  ' + settings.product + ' <span class="show-message__emph">cu o reducere de  ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Ambalaje rămase cu reducere: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
          },
          'it': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Utenti sulla pagine:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha ordinato  ' + settings.product + ' <span class="show-message__emph">con lo sconto del ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Confezioni rimanenti in offerta: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
          },
            'pt': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Visitantes online agora:   <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> encomendou  ' + settings.product + ' <span class="show-message__emph"> com desconto  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Sobrou  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  pacotes na promoção</span></p></div>'
          },
          'es': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Usuarios on-line:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha pedido ' + settings.product + ' <span class="show-message__emph">con el descuento de ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Quedan con la oferta especial:  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
          },
          'co': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Usuarios on-line:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ha pedido ' + settings.product + ' <span class="show-message__emph">con el descuento de ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Quedan con la oferta especial:  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
          },
          'id': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Jumlah pengunjung situs ini: <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> telah membeli ' + settings.product + ' <span class="show-message__emph">dengan diskon ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Tersisa  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> buah selama masa promo</span></p></div>'
          },
          'de': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Anzahl der Besucher auf der Webseite:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> bestellte  ' + settings.product + ' <span class="show-message__emph"> mit einem Rabatt von  ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Nur noch  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> St. zum Aktionspreis</span></p></div>'
          },
          'th': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">ผู้เยี่ยมชมเว็บไซต์ในขณะนี้:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> สั่ง  ' + settings.product + ' <span class="show-message__emph"> ได้รับส่วนลด  ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">สินค้าโปรโมชั่นคงเหลือ  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> ชิ้น</span></p></div>'
          },
          'gr': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Ο αριθμός των επισκεπτών στην ιστοσελίδα:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> παρήγγειλα ' + settings.product + ' <span class="show-message__emph">με έκπτωση ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Έμειναν <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> τεμ. με έκπτωση</span></p></div>'
          },
          'bg': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетители на сайта:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> поръча  ' + settings.product + ' <span class="show-message__emph"> с отстъпка ' + getDiscount() + '</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Остават още  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> опаковки в наличност</span></p></div>'
          },
          'ph': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Mga gumagamit:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> Inorder na ' + settings.product + ' <span class="show-message__emph">na may ' + getDiscount() + ' na diskwento</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Natirang pakete na may diskwento: <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span></span></p></div>'
          },
          'cz': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Návštěvníků je teď na webu:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> se slevou   ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Zbývá  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> balení za akční cenu</span></p></div>'
          },
          'ru': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетителей сейчас на сайте:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> со скидкой  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Осталось  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> упаковок по акции</span></p></div>'
          },
          'rs': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">	Posjetitelja online sada:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph">	sa popustom ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Ostalo je <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paketi za promociju</span></p></div>'
          },
          'lt': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Dabar lankytojai lankytojai:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> su nuolaida  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Liko daugiau  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> atsargų paketai</span></p></div>'
          },
          
           'pl': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Odwiedzający teraz online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> ze zniżką  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Pozostało  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> pakiety magazynowe</span></p></div>'
          },
          
              'hu': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Látogatók most online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> kedvezménnyel  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Maradt  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> készletcsomagok</span></p></div>'
          },
          
            'lv': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Apmeklētāji tagad tiešsaistē: <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> ar atlaidi  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Pa kreisi  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> krājumu paketes</span></p></div>'
          },
            'sk': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Návštevníci teraz online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> so zľavou  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Zostáva  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> skladových balíkov</span></p></div>'
          },
          'si': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Zdaj je na spletni strani obiskovalcev:   <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> s popustom ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Ostalo je  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paketov po nižji ceni</span></p></div>'
          },
          'mk': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Посетители на веб-страната сега:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> нарачал   ' + settings.product + ' <span class="show-message__emph"> со попуст  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Останаа  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> пакувања за промоција</span></p></div>'
          },
          'sg': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">網站的訪問者數量:   <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> 訂購' + settings.product + ' 折扣  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">还有   <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> 促销产品</span></p></div>'
          },
          'hr': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Posjetitelji sada online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span>   ' + settings.product + ' <span class="show-message__emph"> s ' + getDiscount() + ' popusta!</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Sada postoji samo  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paketa po dionici.</span></p></div>'
          },
          'fr': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Visiteurs sur le site en ce moment:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> commandé   ' + settings.product + ' <span class="show-message__emph"> avec une réduction de  ' + getDiscount() + ' !</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Il reste  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span> paquets de promotion</span></p></div>'
          },
          'en': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitors Online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ordered  ' + settings.product + ' <span class="show-message__emph"> with a  ' + getDiscount() + ' discount!</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Only  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  packages with a discount left</span></p></div>'
          },
            'en_sg': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitors Online:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ordered  ' + settings.product + ' <span class="show-message__emph"> with a  ' + getDiscount() + ' discount!</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Only  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  packages with a discount left</span></p></div>'
          },
          'al': {
              message02: '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Vizitorët online tani:  <span id="js-user-id"></span></p></div>',
              message03: '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> ka porositur  ' + settings.product + ' <span class="show-message__emph"> me zbritje  ' + getDiscount() + '!</span></p></div>',
              message04: '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;">Kanë mbetur edhe  <span class="pacedNamed"></span><span style="font-size: 20px;font-weight: bold;"><span class="show-message__emph"><span class="js-leftpacks"></span></span></span>  pako me ofertë</span></p></div>'
          },
      }
      
      
      
      flag_phone = true;
      flag_five = true;
      flag_key = true;
      idleTimer = null;
      idleState = false;
      idleWait = 30000;
      if (parseInt($(".price_land_s1:first").text()) > 0) {
          price = parseInt($(".price_land_s1:first").text()) || 990
      } else {
          price = 0
      }
      var d = first_count();
      var c = new Date();
      var e = parseInt(c.getDate());
      var b = "27";
      changeBlink(b);
      var a = [4, 4, 4, 5, 5];
      if (localStorage.getItem("___cp")) {
          tm = parseInt(localStorage.getItem("___tm"));
          if (e - tm == 0) {
              d = localStorage.getItem("___cp");
              b = localStorage.getItem("___lp");
              changeBlink(b);
          } else {
              setLS(e, b, a, d)
          }
      } else {
          setLS(e, b, a, d)
      }
      $(count_class).text(d);
      $(lastpack_class).text(b);
      if ($(window).width() > 991) {
          $(document).bind("keydown", function() {
              if (flag_key) {
                  clearTimeout(idleTimer);
                  idleState = false;
                  idleTimer = setTimeout(function() {
                      flag_key = false;
                      idleState = true
                  }, idleWait)
              }
          });
          $("body").trigger("keydown")
      }
      $(".show-message").on("click", function() {
          $(".show-message__item").fadeOut(100);
          setTimeout(function() {
              $(".show-message").empty()
          }, 200)
      });
      setTimeout(function() {
          popUp()
      }, 8000)
  
      function first_count() {
          var e = new Date();
          var c = e.getHours();
          var a = e.getMinutes();
          var b = 100;
          var f = b + c * 12 + Math.floor(a / 5);
          return f
      }
  
      function popUp() {
          var a = rand(321, 769);
          localStorage.setItem("___rp", a);
          shwMsg(popupsMsg[settings.lang].message02, "", a);
          setTimeout(function() {
              var b = parseInt(localStorage.getItem("___lp"));
              if (b <= 5) {
                  if (flag_five) {
                      shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                      flag_five = false;
                      setTimeout(function() {
                          showPopupEnd()
                      }, 12000)
                  }
              } else {
                  var c = JSON.parse(localStorage.getItem("___sp"));
                  showPopupBegin(b, c)
              }
          }, 12000)
      }
  
      function showPopupBegin(e, b) {
          var a = orderName();
          var g;
          var c;
          var i;
          var f;
          var h;
          var d;
          if ((b.length == 2) && (flag_phone)) {
              shwMsg(popupsMsg[settings.lang].message03, a, 0);
              flag_phone = false;
              setTimeout(function() {
                  h = e;
                  showPopupBegin(h, b)
              }, 13000)
          } else {
              g = Math.floor(Math.random() * (b.length));
              c = b[g];
              i = parseInt(window.price777) * parseInt(c) + window.curr777;
              f = parseInt(localStorage.getItem("___cp")) + 1;
              h = e - c;
              if ((price == 0) || (price == 1)) {
              } else {
                  // d = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name">' + a + '</span></span>, сделал(а) заказ на сумму ' + i + ', заказано <span class="bay">' + c + '</span> <span class="paced">упаковок</span><br><span class="package_left"> Осталось <span class="pacedNamed"></span> по акции <span class="blink_me">' + h + "</span></span></p></div>";
                  changeBlink(h);
              }
              b.splice(g, 1);
              localStorage.setItem("___lp", h);
              localStorage.setItem("___sp", JSON.stringify(b));
              localStorage.setItem("___cp", f);
              $(count_class).text(f);
              $(lastpack_class).text(h);
              shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
              setTimeout(function() {
                  if (h > 5) {
                      showPopupBegin(h, b)
                  } else {
                      if (flag_five) {
                          shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
                          flag_five = false;
                          setTimeout(function() {
                              showPopupEnd()
                          }, 12000)
                      } else {
                          showPopupEnd()
                      }
                  }
              }, 13000)
          }
      }
  
      function showPopupEnd() {
          var b = true;
          var a = "";
          setInterval(function() {
              var c = new Array(0, 1);
              var d = c[Math.floor(Math.random() * (c.length))];
              if (d == 0) {
                  kindx = rand(1, 33);
                  rp = parseInt(localStorage.getItem("___rp"));
                  if (b) {
                      rp = rp + kindx;
                      b = false
                  } else {
                      rp = rp - kindx;
                      b = true
                  }
                  localStorage.setItem("___rp", rp);
                  var nextMsg = Math.round(Math.random());
                  if(nextMsg == 0){
  
                  shwMsg(popupsMsg[settings.lang].message02, "", rp)
              } else {
                  shwMsg(popupsMsg[settings.lang].message04, "", 0, reducePackages());
              }
              } else {
                  a = orderName();
                  shwMsg(popupsMsg[settings.lang].message03, a, 0)
              }
          }, 13000)
      }
  
     
  
      function rand(b, a) {
          b = parseInt(b);
          a = parseInt(a);
          return Math.floor(Math.random() * (a - b + 1)) + b
      }
  
      function shwMsg(c, a, b, x) {
          $(".show-message").append(c);
          if (x != "") {
               $(".js-leftpacks").text(x);
          }
          if (a != "") {
              $(".js-name").text(a)
          }
          if (b != 0) {
              $("#js-user-id").text(b)
          }
          $(".show-message__item").slideDown(500).delay(5000).slideUp(500).delay(5000);
          setTimeout(function() {
              $(".show-message").empty()
          }, 6500)
      }
  
      function setLS(d, b, a, c) {
          localStorage.setItem("___cp", c);
          localStorage.setItem("___tm", d);
          localStorage.setItem("___lp", b);
          localStorage.setItem("___sp", JSON.stringify(a))
      };
  
      function changeBlink(e) {
          var elem = document.body.querySelectorAll('.left.blink');
          for (var i = 0; i < elem.length; i++) {
              elem[i].innerHTML = e;
          };
      }
  }       






//   /Блок рулетки
  if (!!settings.wheel && settings.wheel.isNeeded) {
      
  
  var wheelBlocks = {
      'id': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Mencoba keberuntungan Anda!</b><br>Situs kami memberi Anda peluang untuk mendapatkan diskon -50% pada ' + settings.product + '. Untuk melakukan ini, tekan tombol "SPIN" dan tunggu sampai roda keberuntungan berhenti. Mungkin Anda akan beruntung hari ini! Semoga berhasil!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Selamat!</span> <p class="pop-up-text">Anda memenangkan diskon 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',

      },
      'vn': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Xin chú ý!</b><br>Cổng thông tin của chúng tôi cung cấp cho các độc giả của mình khuyến mãi giảm giá cho sản phẩm ' + settings.product + '. Hãy thử vận may của bạn và nhấp vào nút "SPIN". Nếu may mắn, bạn có thể đặt mua thuốc với mức giá thấp hơn bình thường! Chúc may mắn!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Chúc mừng!</span> <p class="pop-up-text">Bạn đã nhận được giảm giá -50% cho sản phẩm ' + settings.product + '</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'it': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attenzione!</b><br>Il nostro portale mette in palio uno sconto aggiuntivo su ' + settings.product + '. Tentate la fortuna e premete il tasto "SPIN". Se sarete fortunati potrete ordinare il preparato ad ancora meno! Buona fortuna!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulazioni!</span> <p class="pop-up-text">Potete ordinare ' + settings.product + ' con lo sconto del 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'es': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Por favor ten cuidado!</b><br>En nuestro sitio ofrecemos descuentos a los lectores en toda la producción. Prueba tu suerte y presiona el botón "SPIN". ¡Si tiene suerte, puede solicitar nuestra producción a un precio inferior al habitual! Buena suerte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Felicitaciones!</span> <p class="pop-up-text">¡Has obtenido un descuento del 50% en ' + settings.product + '!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
        'pt': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atenção!</b><br>Os visitantes do nosso site têm a oportunidade exclusiva de encomendar '+ settings.product +' com um desconto de até 50%! Para fazer isso, inicie a roda da fortuna clicando no botão "SPIN" e espere que ele pare completamente. Quem sabe, talvez você seja o sortudo que consiga economizar muito dinheiro hoje! Boa sorte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Parabéns!</Span> <p class="pop-up-text">Você pode encomendar '+ settings.product +' com 50% de desconto!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'co': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Por favor ten cuidado!</b><br>En nuestro sitio ofrecemos descuentos a los lectores en toda la producción. Prueba tu suerte y presiona el botón "SPIN". ¡Si tiene suerte, puede solicitar nuestra producción a un precio inferior al habitual! Buena suerte! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Felicitaciones!</span> <p class="pop-up-text">¡Has obtenido un descuento del 50% en ' + settings.product + '!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'ro': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atenţie!</b><br>Portalul nostru oferă o reducere pentru ' + settings.product + '. Încercaţi-vă norocul şi apăsaţi pe butonul "SPIN". Dacă vă v-a zîmbi norocul veţi putea comanda medicamentul cu un preţ încă mai scăzut! Succes! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Vă felicităm!</span> <p class="pop-up-text">Aţi primit o reducere de -50% pentru ' + settings.product + '!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'cz': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Náš webový portál daruje možnost získat slevu na ' + settings.product + '. Stiskněte Spin a mějte štěstí. Pokud se vám bude dařit, získáte zboží se slevou. Hodně štěstí! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulujeme!</span> <p class="pop-up-text">Teď si můžete objednat ' + settings.product + ' se slevou 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'th': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>โปรดทราบ!</b><br>ตอนนี้กำลังมีการจับรางวัลเพื่อส่วนลดเพิ่มเติมสำหรับ ' + settings.product + ' ใช้โชคดีที่มีของคุณและกดปุ่ม "SPIN" ถ้าโชคดี คุณจะสามารถสั่งผลิตภัณฑ์ได้ในราคาพิเศษสุดๆ! ขอให้คุณโชคดี! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">ยินดีด้วย!</span> <p class="pop-up-text">คุณสามารถสั่ง ' + settings.product + ' พร้อมส่วนลด 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'gr': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Δοκιμάστε την τύχη σας!</b><br>Ο ιστότοπός μας σας δίνει την ευκαιρία να πάρετε μια έκπτωση 50% στο ' + settings.product + '. Για να το κάνετε, πιέστε το πλήκτρο "SPIN" και περιμένετε να σταματήσει ο τυχερός τροχός. Ίσως να είστε τυχεροί σήμερα! Καλή τύχη!  </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Συγχαρητήρια!</span> <p class="pop-up-text">Κερδίστε έκπτωση 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'de': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Achtung!</b><br>Unser Portal spielt einen zusätzlichen Rabatt auf ' + settings.product + ' aus. Fordern Sie Ihr Glück heraus und klicken Sie auf die Schaltfläche "SPIN". Wenn Sie Glück haben, können Sie ein Präparat zu einem niedrigeren Preis bestellen! Viel Glück! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Herzlichen Glückwunsch!</span> <p class="pop-up-text">Sie können ' + settings.product + ' mit einem Rabatt von 50% bestellen!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
      
      },
      'bg': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Опитай късмета си!</b><br>Нашият сайт ви дава възможност да получите 50% отстъпка от цената на лекарството Erogan. За да направите, това натиснете бутона "SPIN" и изчакайте, докато спре колелото на късмета. Може би, днес ще имаш късмет точно ти! Успех!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Честито!</span> <p class="pop-up-text">Ти печелиш 50% отстъпка!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
              
      },
      'fr': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Notre portail offre des rabais supplémentaires sur ' + settings.product + ' . Découvrez la fortune et cliquez sur le bouton "SPIN". Si vous aurez de la chance, vous pouvez commander ce remède au prix encore plus bas. Bonne chance!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Félicitations!</span> <p class="pop-up-text">Vous pouvez commander ' + settings.product + ' avec la réduction 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'al': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Kujdes!</b><br>Portali ynë i ofron lexuesve mundësinë të përfitojë një zbritje deri në -50% për ' + settings.product + '. Shtypni butonin “SPIN”, dhe prisni deri sa te ndalojë rrota e fatit! Ndoshta pikërisht juve do t’iu buzëqesh sot fati, dhe do të keni mundësinë të bëni porosinë me vetëm gjysëm çmimi! Ju urojmë fat!</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Ju përgëzojmë!</span> <p class="pop-up-text">Ju mund ta porositni ' + settings.product + ' me një zbritje prej 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'ru': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br>У поситителей нашего сайта есть эксклюзивная возможность заказать ' + settings.product + ' со скидкой до 50%! Для этого запустите колесо фортуны нажатием на кнопку "SPIN", и затем дождитесь его полной остановки. Кто знает, может именно Вы тот счастливчик, которому сегодня удастся неплохо сэкономить! Удачи! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Поздравляем!</span> <p class="pop-up-text">Вы можете заказать ' + settings.product + ' со скидкой 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'ua': { 
        wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Увага!</b><br>У відвідувачів нашого сайту є ексклюзивна можливість замовити' + settings.product + ' зі знижкою до 50%! Для цього запустіть колесо фортуни натисканням на кнопку "SPIN", і потім дочекайтеся його повної зупинки. Хто знає, може саме Ви той щасливчик, якому сьогодні вдасться непогано заощадити! Удачі! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
        popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Поздравляем!</span> <p class="pop-up-text">Вы можете заказать ' + settings.product + ' со скидкой 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
        
    },
      'rs': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Пажња!</b><br>Посетиоци нашег сајта имају ексклузивну опцију наручивања ' + settings.product + ' са попустом до 50%! Да бисте то урадили, покрените точак среће притиском на дугме "Ротирај", а затим сачекајте да се потпуно заустави. Ко зна, можда сте баш ви тај срећник који ће данас много уштедети! Срећно! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">Ротирај</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Честитам!</span> <p class="pop-up-text">Можете наручити ' + settings.product + ' са попустом од 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },

      'ar': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>ﺍﻧﺘﺒﺎﻩ!</b><br></p><p>لدى زوار موقعنا فرصة حصرية لطلب ' + settings.product + ' بخصم حتى 50%! لعمل الطلب، در عجلة الحظ بالنقر على زر "SPIN"، ثم انتظر حتى تتوقف عن الدوران. من يدري، قد تكون محظوظاً من سيوفر الكثير اليوم! حظا سعيدا!\n' +
          '\n</p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">تهانينا!\n</span> <p class="pop-up-text">يمكنك طلب ' + settings.product + ' بخصم 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',

      },
      
      
        'lt': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Dėmesio!</b><br>Mūsų svetainės lankytojai turi išskirtinę galimybę užsisakyti. ' + settings.product + ' iki 50% nuolaida! Norėdami tai padaryti, paleiskite likimo ratą paspaudę mygtuką „SPIN“ ir palaukite, kol jis visiškai sustos. Kas žino, gal jūs esate laimingas, kuris šiandien galės sutaupyti pinigų! Sėkmės! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Sveikiname!</span> <p class="pop-up-text">Galite užsisakyti ' + settings.product + ' su 50% nuolaida!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      
      
       'pl': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Dėmesio!</b><br>Mūsų svetainės lankytojai turi išskirtinę galimybę užsisakyti ' + settings.product + ' iki 50% nuolaida! Norėdami tai padaryti, paleiskite likimo ratą paspaudę mygtuką „SPIN“ ir palaukite, kol jis visiškai sustos. Kas žino, gal jūs esate laimingas, kuris šiandien galės sutaupyti pinigų! Sėkmės! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Sveikiname!</span> <p class="pop-up-text">Galite užsisakyti ' + settings.product + ' su 50% nuolaida!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      
      
      'pl': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Uwaga!</b><br>Odwiedzający naszą stronę mają wyłączną możliwość zamówienia. ' + settings.product + ' do 50% taniej! Aby to zrobić, uruchom koło fortuny, naciskając przycisk "SPIN", a następnie zaczekaj, aż całkowicie się zatrzyma. Kto wie, może jesteś szczęściarzem, który może dziś zaoszczędzić dużo pieniędzy! Powodzenia! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulacje!</span> <p class="pop-up-text">Możesz zamówić ' + settings.product + ' z 50% zniżką!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      
      
       'hu': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Figyelem!</b><br>Honlapunk látogatói kizárólagos lehetőséget biztosítanak a megrendelésre. ' + settings.product + ' akár 50% kedvezmény! Ehhez indítsa el a szerencse kerékét a "SPIN" gomb megnyomásával, majd várja meg, amíg teljesen leáll. Ki tudja, talán te vagy a szerencsés ember, aki ma sok pénzt takaríthat meg! Sok szerencsét! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Gratulálunk!</span> <p class="pop-up-text">Rendelhet ' + settings.product + ' 50% kedvezmény!</p> <a class="pop-up-button" href="landing/index.php">Ok</a> </div> </div>',
          
      },
       'lv': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Uzmanību!</b><br>Mūsu vietnes apmeklētājiem ir ekskluzīva iespēja pasūtīt. ' + settings.product + ' līdz 50% atlaide! Lai to izdarītu, ieslēdziet laimes riteni, nospiežot pogu "SPIN", un pēc tam pagaidiet, līdz tas pilnībā apstājas. Kas zina, varbūt esat laimīgs, kurš šodien var ietaupīt daudz naudas! Good luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Apsveicam!</span> <p class="pop-up-text">Jūs varat pasūtīt ' + settings.product + ' ar 50% atlaidi!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'sk': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Varovanie!</b><br>Naši návštevníci stránok majú exkluzívnu príležitosť objednať ' + settings.product + ' až 50% z ceny! Ak to chcete urobiť, spustite kolo šťastia stlačením tlačidla "SPIN" a počkajte, kým sa úplne zastaví. Kto vie, možno ste šťastný, kto dnes ušetrí peniaze! Veľa šťastia! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Blahoželáme!</span> <p class="pop-up-text">Môžete si ho objednať ' + settings.product + ' s 50% zľavou!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'si': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Obiskovalci naše spletne strani imajo enkratno možnost naročila ' + settings.product + ' s popustom do 50%! Za to zavrtite kolo fortune s pritiskom gumba "SPIN" in počakajte da se zaustavi. Kdo ve, mogoče ste Vi ta srečnež, ki bo lahko danes privarčeval z denarjem! Srečno! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Čestitamo!</span> <p class="pop-up-text">Lahko naročite ' + settings.product + ' s popustom 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'mk': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br> Посетителите на нашата веб-страна имаат ексклузивна можност да нарачаат ' + settings.product + ' со попуст до 50%! Потребно е да си ја пробате среќата со притискање на копчето "SPIN", и потоа да почекате до неговото целосно запирање. Кој знае, можеби токму Вие сте тој среќник, кој што денеска добро ќе заштеди! Среќно! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Ви честитаме!</span> <p class="pop-up-text"> Вие можете да нарачате ' + settings.product + ' со попуст 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'my': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Perhatian!</b><br> Pelawat ke tapak kami mempunyai peluang eksklusif untuk memesan ' + settings.product + ' dengan diskaun sehingga 50%! Untuk melakukan ini, mulakan roda nasib dengan menekan butang "SPIN", dan kemudian tunggu ia berhenti sepenuhnya. Siapa tahu, mungkin anda yang bertuah yang akan dapat menjimatkan banyak wang hari ini! Semoga berjaya! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Tahniah!</span> <p class="pop-up-text">Anda boleh memesan '+settings.product+' dengan diskaun sehingga 50%!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
      },
      'sg': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>注意!</b><br>我們網站的訪客有獨家訂購的機會' + settings.product + ' 折扣高達50％！ 要做到這一點，啟動命運之輪按下"SPIN"按鈕, 然後等待它完全停止。 誰知道，也許你是幸運的人今天可以節省一些錢！ 祝你好運！ </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">稱慶!</span> <p class="pop-up-text">你可以訂購' + settings.product + '享受50％的折扣！</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'bg': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Внимание!</b><br>Посетителите на нашия сайт имат изключителната възможност да поръчат ' + settings.product + ' с 50% отстъпка! За тази цел трябва да завъртите колелото на късмета като натиснете бутона "SPIN" и след това да изчакате докато то спре напълно. Кой знае, може би точно Вие сте този късметлия, който днес ще успее хубаво да спести! Късмет! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Честито!</span> <p class="pop-up-text">Можете да поръчате ' + settings.product + ' с 50% отстъпка! </p> <a class="pop-up-button" href="landing/index.php">Ok</a> </div> </div>',
          
      },
      'hr': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Pozor!</b><br>Posjetitelji naše stranice imaju ekskluzivnu mogućnost naručivanja ' + settings.product + ' s popustima do 50%! Za ovo morate pokreniti kotač sreće pritiskom na gumb "SPIN", i onda pričekajte da se potpuno zaustavi. Tko zna, možda Vi ste sretni koji će danas uspjeti uštedjeti svoj novac! Sretno! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Čestitamo!</span> <p class="pop-up-text">Možete naručiti ' + settings.product + ' popustom 50%!</p> <a class="pop-up-button" href="landing/index.php">Ok</a> </div> </div>',
          
      },
      'ph': {
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Atensyon!</b><br> Ang aming mambabasa ay may eksklusibong pagkakataong umorder ' + settings.product + '  na may diskwento hanggang 50%! Pindutin ang “SPIN” button para maumpisahan ang fortune wheel at antaying tumigil. Malay mo, baka ikaw ang maswerteng tao na makakuha ng pinakamagandang diskwento ngayon! Good luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Binabati kita!</span> <p class="pop-up-text">Pwedeng umorder ' + settings.product + ' na may 50% na diskwento !</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'en': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Our readers have an exclusive opportunity to order ' + settings.product + ' with discount up to 50%! Just launch the fortune wheel by pressing the "SPIN" button, and wait for it to stop. Who knows, maybe it is you that lucky guy, who will get the best discount today! Good Luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulations!</span> <p class="pop-up-text">You can order ' + settings.product + ' with a 50% discount!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
      'en_sg': { 
          wheel: '<span class="toform"></span><div class="spin-wrapper"><p><b>Attention!</b><br>Our readers have an exclusive opportunity to order ' + settings.product + ' with discount up to 50%! Just launch the fortune wheel by pressing the "SPIN" button, and wait for it to stop. Who knows, maybe it is you that lucky guy, who will get the best discount today! Good Luck! </p> <div class="wheel-wrapper"> <div class="wheel"> <img alt="" class="wheel-img" src="' + (settings.wheel.customWheel || featuresFilesSrc.prizeWheel) + '"> <div class="wheel-cursor"> <img alt="" src="' + featuresFilesSrc.wheelCursor + '"><span class="cursor-text">SPIN</span></div> </div> </div> </div>',
          popup: '<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading">Congratulations!</span> <p class="pop-up-text">You can order ' + settings.product + ' with a 50% discount!</p> <a class="pop-up-button" href="#">Ok</a> </div> </div>',
          
      },
  };
      
   $('body').append(wheelBlocks[settings.lang].popup + '<style>@import url("' + featuresFilesSrc.wheelStyles + '");\n </style>' );

  (!!settings.form && settings.form.isNeeded) ? $('.features-wrapper').prepend(wheelBlocks[settings.lang].wheel + genLocalForm()): $('.features-wrapper').prepend(wheelBlocks[settings.lang].wheel)
  var wheel = document.querySelector('.wheel-img');
  var resultWrapper = document.querySelector('.spin-result-wrapper');
  // направляем все ссылки на форму, если это ленд
  
  // запускаем колесо по клику
  $('.cursor-text').click(function() {
      if (wheel.classList.contains('rotated')) {
          resultWrapper.style.display = "block";
      } else {
          wheel.classList.add('super-rotation');
          setTimeout(function() {
              resultWrapper.style.display = "block";
          }, 8000);
          setTimeout(function() {
              if (!!settings.form && settings.form.isNeeded) {
                  $('.spin-wrapper').slideUp();
                  $('.order_block').slideDown();
              start_timer();
              }
          }, 10000);
          wheel.classList.add('rotated');
      }
  });
  if (!!settings.form && settings.form.isNeeded) {
      $('.close-popup, .pop-up-button').click(function(e) {
          e.preventDefault();
          $('.spin-result-wrapper').fadeOut();
          var top = $('.toform').offset().top;
          $('body,html').animate({
              scrollTop: top
          }, 800);
      });
  } else {
      $('.close-popup').click(function(e) {
          e.preventDefault();
          $('.spin-result-wrapper').fadeOut();
          
      });
  }
      
      
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
