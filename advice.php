<?php  
// Sample array of advice  
$adviceList = [  
    "Trust in the Lord with all your heart.",  
    "Be kind to one another.",  
    "Pray for guidance in your decisions.",  
    "Seek wisdom from trusted mentors.",  
    "Always strive for excellence in your studies."  
];  

// Check if the question is set; avoid processing if not  
if (isset($_POST['question'])) {  
    // You can process the question here if needed  
    // For now, we will just return a random piece of advice  
    $randomIndex = array_rand($adviceList); // Get a random index from the advice list  
    echo $adviceList[$randomIndex]; // Return the advice  
} else {  
    echo "No question was provided.";  
}  
?>