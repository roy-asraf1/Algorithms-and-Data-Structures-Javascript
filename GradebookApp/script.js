function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    // Calculate the class average
    let average = getAverage(totalScores);
    
    // Get the student's grade
    let grade = getGrade(studentScore);
    
    // Format the class average correctly
    let formattedAverage = Number(average);
    
    // Construct and return the appropriate message
    if (grade !== "F") {
      return "Class average: " + formattedAverage + ". Your grade: " + grade + ". You passed the course.";
    } else {
      return "Class average: " + formattedAverage + ". Your grade: " + grade + ". You failed the course.";
    }
  }
  // Example usage
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  
  
  