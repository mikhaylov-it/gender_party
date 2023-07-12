<?php
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gender_counts";

// Создание подключения к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения на ошибки
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Обработка нажатия на кнопку "Мальчик"
if (isset($_POST['maleButton'])) {
    // Получение текущего значения из базы данных
    $sql = "SELECT value FROM counters WHERE gender='male'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $currentValue = $row['value'];
        $newValue = $currentValue + 1;
        
        // Обновление значения в базе данных
        $sql = "UPDATE counters SET value=$newValue WHERE gender='male'";
        $conn->query($sql);
        
        // Возвращение нового значения клиенту
        echo $newValue;
    }
}

// Обработка нажатия на кнопку "Девочка"
if (isset($_POST['femaleButton'])) {
    // Получение текущего значения из базы данных
    $sql = "SELECT value FROM counters WHERE gender='female'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $currentValue = $row['value'];
        $newValue = $currentValue + 1;
        
        // Обновление значения в базе данных
        $sql = "UPDATE counters SET value=$newValue WHERE gender='female'";
        $conn->query($sql);
        
        // Возвращение нового значения клиенту
        echo $newValue;
    }
}

// Закрытие соединения с базой данных
$conn->close();
?>
