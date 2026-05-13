<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uri = 'https://api.cpagetti.com/order/register';

    $order = [
        'api_key' => 'uFGFP6oiqXPyLiDn6_3crII8qDn7JSFx', // ваш API ключ
        'name' => $_REQUEST['name'],
        'phone' => $_REQUEST['phone'],
        'offer_id' => '15607', //  ID оффера
        'country' => $_REQUEST['country'],  // страна https://ru.wikipedia.org/wiki/ISO_3166-1
        'lang' => 'TR', // язык https://www.exlab.net/tools/tables/languages.html
        //'stream_code' => '',  // айди потока (необязательно)
        'ip' => (!empty($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null),
        //'sub1' => $_REQUEST['sub1'],
    ];

    $headers = [
        "Host" => $uri,
        "User-Agent" => (!empty($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : null),
        "Accept" => (!empty($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : null),
        "Accept-Language" => (!empty($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : null),
        "Keep-Alive" => '15',
        "Connection" => "keep-alive",
        "Referer" => (!empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : null),
    ];

    $curl = curl_init();

    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_URL, $uri);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $order);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $return= curl_exec($curl);
    curl_close($curl);
}
header('Location: success.html');
exit;

?>