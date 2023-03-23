<?php
$mbid = $_POST['mbid'];
$fb = $_POST['pixel'];
$source = $_POST['utm_source'];
$content = $_POST['utm_content'];
$tphone = $_POST['phone'];
$id_offer = $_POST['id_offer'];
//get client ip
$stip = $_SERVER['REMOTE_ADDR'];

//get ccode from server future
$chz_ip = curl_init('http://ipwho.is/'.$stip);
curl_setopt($chz_ip, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chz_ip, CURLOPT_HEADER, false);
$ipwhois = json_decode(curl_exec($chz_ip), true);
curl_close($chz_ip);




$ipcountry = $ipwhois["country"];
$ipcity = $ipwhois["city"];
$flagImgIp = $ipwhois['flag']['emoji'];
$countrycode = $ipwhois['country_code'];






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
   

if (
    (
        empty($_POST['name'])
        && empty($_POST['firstName'])
        && empty($_POST['last_name'])
    )
    || empty($_POST['phone'])
) {
    if (isset($_SERVER['HTTP_REFERER'])) {
        header("Location: " . $_SERVER['HTTP_REFERER']);
    } else {
        header("Location: /");
    }
}

//prepare IP
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} elseif (!empty($_SERVER['REMOTE_ADDR'])) {
    $ip = $_SERVER['REMOTE_ADDR'];
} else {
    $ip = null;
}
//php7.4 only
if (strpos($ip, ',') !== false) {
    $ip = substr($ip, 0, strpos($ip, ','));
}

//Prepare DATA for lead
$name = null;
if (!empty($_POST['firstName'])) {
    $name .= $_POST['firstName'];
}
if (!empty($_POST['last_name'])) {
    if (!empty($name)) {
        $name .= ' ';
    }
    $name .= $_POST['last_name'];
}
if (!empty($_POST['name'])) {
    if (!empty($name)) {
        $name .= ' ';
    }
    $name .= $_POST['name'];
}

$data = [
    'country'    => 'UA',
    'stream_key' => $_POST['stream_key'],

   'name'       => $name,
    'phone'      => $_POST['phone'],
    'ip'         => $ip,
    'tz'         => !empty($_POST['tz']) ? $_POST['tz'] : null,
    'address'    => !empty($_POST['address']) ? $_POST['address'] : null,
    'city'       => !empty($_POST['city']) ? $_POST['city'] : null,
    'zip'        => !empty($_POST['zip']) ? $_POST['zip'] : null,
    'email'      => !empty($_POST['email']) ? $_POST['email'] : null,
    'password'   => !empty($_POST['password']) ? $_POST['password'] : null,
    'product_id' => !empty($_POST['product_id']) ? $_POST['product_id'] : null,
    'order'      => !empty($_POST['order']) ? $_POST['order'] : null,
    'comment'    => !empty($_POST['comment']) ? $_POST['comment'] : null,
    'user_agent' => $_SERVER['HTTP_USER_AGENT'],

    'utm_source'   => $source,
    'utm_medium'   => "$stip"." "."city -"." "."$ipcity",
    'utm_campaign' => !empty($_GET['utm_campaign']) ? $_GET['utm_campaign'] : null,
    'utm_term'     => $id_offer,
    'utm_content'  => $content,

    'sub_id'   => !empty($_GET['sub_id']) ? $_GET['sub_id'] : (!empty($_POST['subid']) ? $_POST['subid'] : null),
    'sub_id_1' => $mbid,
    'sub_id_2' => $fb,
    'sub_id_3' => $_POST['phone'],
    'sub_id_4' => $name,
    'click_id' => !empty($_GET['click_id']) ? $_GET['click_id'] : (!empty($_POST['click_id']) ? $_POST['click_id'] : null),

    'referrer' => !empty($_POST['referrer']) ? $_POST['referrer'] : null,

    'landing_url' => !empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : null,
];

if (!empty($name) && !empty($tphone)){
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


$offerName = trim(trim($_SERVER[REQUEST_URI],"/lander"),"/api.php");

//Telegram
$tsend = array(
    "NEW CPAECOM LEAD in ID "."$id_offer"."!!\n",
    "\n😈campaign:","$offerName",
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
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://app.cpaecom.com/api/leads');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Send Lead
$result = curl_exec($ch);

$curl_error = curl_error($ch);
$curl_errno = curl_errno($ch);
$http_code  = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

//Prepare response
$response = [
    'error'     => $curl_error,
    'errno'     => $curl_errno,
    'http_code' => $http_code,
    'result'    => $result,
];

if ($http_code == 200 && $response['errno'] === 0) {
    $resultOk = json_decode($response['result'], true);
    if (!empty($resultOk['redirect_url'])) {
        header('Location: ' . $resultOk['redirect_url']);
        exit;
    }

    session_start();
    $_SESSION['data']    = $data;
    $_SESSION['lead_id'] = $resultOk['lead_id'];

    $queryParams = [];
    if (!empty($_GET['pixel'])) {
        $queryParams['pixel'] = $_GET['pixel'];
    }
    if (!empty($_POST['pixel'])) {
        $queryParams['pixel'] = $_POST['pixel'];
    }
    if (!empty($_GET['tiktok'])) {
        $queryParams['tiktok'] = $_GET['tiktok'];
    }
    if (!empty($_POST['tiktok'])) {
        $queryParams['tiktok'] = $_POST['tiktok'];
    }

    header('Location: success.php?' . http_build_query($queryParams));
} else {
    echo 'response code: ' . $http_code . '<br>';
    echo 'error: ' . $curl_error . '<br>';
    echo 'response : ' . $result . '<br>';
}
} else{
    // error double 2 or more
}

