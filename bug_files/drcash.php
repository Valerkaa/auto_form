<?php
$mbid = $_POST['mbid'];
$fb = $_POST['pixel'];
$source = $_POST['utm_source'];
$content = $_POST['utm_content'];
$tphone = $_POST['phone'];
$id_offer = $_POST['id_offer'];
$subid = $_POST['subid'];
$name = $_POST['firstName'];
//get client ip
$stip = $_SERVER['REMOTE_ADDR'];




$chz_ip = curl_init('http://ipwho.is/'.$stip);
curl_setopt($chz_ip, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chz_ip, CURLOPT_HEADER, false);
$ipwhois = json_decode(curl_exec($chz_ip), true);
curl_close($chz_ip);




$ipcountry = $ipwhois["country"];
$ipcity = $ipwhois["city"];
$flagImgIp = $ipwhois['flag']['emoji'];
$countycode = $ipwhois['country_code'];






$connect = mysqli_connect("5.101.180.160:3306", "valeranutra_usr", "2WsaXEni2Fy0XS61", "ValeraNutra");
if ($connect == false) {
    $log = date('Y-m-d H:i:s') . ' ' . 'Error : Невозможно подключиться к MySQL ' . mysqli_connect_error();
    file_put_contents('log.txt', $log . PHP_EOL, FILE_APPEND);
    print('Ошибка: Невозможно подключиться к MySQL ' . mysqli_connect_error());
    die();
}if ( $stip == "193.110.163.34" || $stip == "176.36.142.226"){
    $flag = true;
}else{
  

$flag = false;
    $selectIp = mysqli_query($connect, "SELECT * FROM nutra WHERE ip= '$stip'" ); // вибираємо всі записи із бд
    $selectIp_arr = array();
    while ($row = mysqli_fetch_array($selectIp)) {
        $selectIp_arr[] = $row;
    };
    print_r(count($selectIp_arr));          
if(count($selectIp_arr) == 0){
    $flag = true;
    $selectIp = mysqli_query($connect, "INSERT INTO nutra (id, name, phone, ip) VALUES (NULL, '$name', '$tphone', '$stip');" ); // вибираємо всі записи із бд
}elseif (count($selectIp_arr) == 1){
    $flag = true;
    $selectIp = mysqli_query($connect, "INSERT INTO nutra (id, name, phone, ip) VALUES (NULL, '$name', '$tphone', '$stip');" );
}else{
    print_r('upsss....');
    die();
}


}




if($flag == true){
   











if (!function_exists('curl_version')) {
    echo 'Curl is not installed';
}

if ($_SERVER["REQUEST_METHOD"]=="POST") {
    // Required params
    $token = 'OGY0Y2UWZMQTOWQ1MS00MZYYLWEWNTQTNZFIYJM1NTLJOWQ5';
    $stream_code = $_POST['stream_key'];

    // Fields to send
    $post_fields = [
        'stream_code'   => $stream_code,    // required
        'client'        => [
            'phone'     => $tphone, // required
            'name'      => $name,
            // 'surname'   => $_POST['surname'],
            // 'email'     => $_POST['email'],
            // 'address'   => $_POST['address'],
            // 'ip'        => $stip,
            // 'country'   => $ipcountry,
            // 'city'      => $ipcity,
            // 'postcode'  => $councode,
        ],
        'sub1'      => $subid,
        'sub2'      => $id_offer,
        'sub3'      => $content,
        'sub4'      => $source,
        'sub5'      => $mbid,
    ];

    $headers = [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://order.drcash.sh/v1/order");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, true);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $body = substr($response, $header_size);

    curl_close ($ch);

    if ($httpcode != 200) {
        echo 'Error: ' . $httpcode;
        echo '<br>';
        echo $response;
    }
    if ($httpcode == 200) {
       header("Location: success.php?pixel=$fb");
    }
}






//таблица google
$url_table = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5WKpo2oWh8ke394vqtwiup3mpg3mb7HrwFcnE5SMBvogSMA/formResponse"; // как получить будет показанно на видео
$utm = $_SERVER["HTTP_REFERER"];
$post_data = array (
"entry.215684933" => $name, // name
"entry.131865841" => $tphone, //phone
"entry.1610390545" => $mbid, // mbId
"draftResponse" => "[null,null,&quot;3623592011258391272&quot;]", 
"pageHistory" => "0",
"fbzx" => "3623592011258391272"
);
$chz = curl_init();
curl_setopt($chz, CURLOPT_URL, $url_table);
curl_setopt($chz, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($chz, CURLOPT_POST, 1);
curl_setopt($chz, CURLOPT_POSTFIELDS, $post_data);
$output = curl_exec($chz);
curl_close($chz);
//таблица google








$offerNameApi = trim($_SERVER[REQUEST_URI],"/lander");
$offerName = trim($offerNameApi,"/api.php");
//Telegram
$tsend = array(
    "NEW DRCASH LEAD in ID "."$id_offer"."!!\n",
    "\n😈campaign:", "$offerName",
    "\n😈name:", "$name ",
    "\n😈phone:", "$tphone",
    "\n😈country:", "$ipcountry $countrycode","$flagImgIp",
    "\n😈ip:", "$stip ", "$ipcity ",
    "\n😈content:", "$content",
    "\n😈mbid:", "$mbid",
    "\n😈source:", "$source",

            );
    //Send the request & save response to $resp
    //chat_id
    $chat_id = -1001579479826;

    //tg bot api from father bot
    $tgbotapi ="bot6157079372:AAE-tl6QVL82qlLoycSSB0jLRGyQOKBjkIc";
    // path to the picture,
    $text = implode(' ', $tsend);
    // following ones are optional, so could be set as null
    $disable_web_page_preview = null;
    $reply_to_message_id = null;
    $reply_markup = null;

      $data_telegram = array(
        'chat_id' => urlencode($chat_id),
        'text' => urldecode($text),
        'disable_web_page_preview' => urlencode($disable_web_page_preview),
        'reply_to_message_id' => urlencode($reply_to_message_id),
        'reply_markup' => urlencode($reply_markup)
    );
    $url = "https://api.telegram.org/$tgbotapi/sendMessage";
    //  open connection
    $ch2 = curl_init();
    //  set the url
    curl_setopt($ch2, CURLOPT_URL, $url);
    //  number of POST vars
    curl_setopt($ch2, CURLOPT_POST, count($data_telegram));
    //  POST data
    curl_setopt($ch2, CURLOPT_POSTFIELDS, $data_telegram);
    //  To display result of curl
    curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
    //  execute post
    $resul = curl_exec($ch2);
    //  close connection
    curl_close($ch2);
//Telegram
}else{
    // error double 2 or more
}

