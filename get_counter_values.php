<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gender_counts";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

header('Content-Type: application/json');
echo json_encode(getCounters());

$conn->close();

function getCounters() {
    global $conn;
    $counters = array();

    $sql = "SELECT * FROM counters";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $counters[$row['gender']] = $row['value'];
        }
    }

    return $counters;
}
?>
