<?php
$host = 'localhost';
$db = 'u925091178_eco_backend'; // Replace with your database name
$user = 'u925091178_eco_admin'; // Replace with your DB username
$pass = 'Kevcel122$$'; // Replace with your DB password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>EcoAdvantage Blog</title>
    <style>
        body { font-family: Arial; padding: 20px; max-width: 800px; margin: auto; }
        .post { border-bottom: 1px solid #ccc; margin-bottom: 20px; }
        .post h2 { margin-bottom: 5px; }
        .post p.date { font-size: 0.8em; color: #777; }
    </style>
</head>
<body>
    <h1>Our Blog</h1>

    <?php while($row = $result->fetch_assoc()): ?>
        <div class="post">
            <h2><?= htmlspecialchars($row['title']) ?></h2>
            <p class="date">Posted on <?= $row['created_at'] ?></p>
            <p><?= nl2br(htmlspecialchars($row['content'])) ?></p>
        </div>
    <?php endwhile; ?>

</body>
</html>
