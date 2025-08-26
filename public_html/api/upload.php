<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$target_dir = "uploads/";
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST allowed"]);
    exit;
}

if (!isset($_FILES['photo'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No file uploaded"]);
    exit;
}

$file = $_FILES['photo'];
$filename = uniqid() . "_" . basename($file["name"]);
$target_file = $target_dir . $filename;

if (move_uploaded_file($file["tmp_name"], $target_file)) {
    echo json_encode([
        "status" => "success",
        "url" => "https://coreclub.in/api/uploads/" . $filename
    ]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Upload failed"]);
}
