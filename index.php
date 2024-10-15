<?php>
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $question = $_POST['question'];
    $advice = getAdvice($question);
    echo $advice;
}

function getAdvice($question) {
    // Simple advice logic based on keywords
    if (stripos($question, 'study') !== false) {
        return 'Remember to balance your studies with prayer and rest.';
    } elseif (stripos($question, 'stress') !== false) {
        return 'Cast all your anxiety on Him because He cares for you. - 1 Peter 5:7';
    } else {
        return 'Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5';
    }
}
<php?>