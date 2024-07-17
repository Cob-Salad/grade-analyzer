


const input = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];


const gradeAnalysis = () => {

    const scoreObject = {
        "total": 0,
        "average": 0,
        "highest": 0,
        "lowest": 100,
        "passing": false
    }
    
    for (let i = 0; i < input.length; i++) {
        scoreObject.total += input[i];
        scoreObject.average = scoreObject.total/input.length;
        
        if (input[i] >= scoreObject.highest){
            scoreObject.highest = input[i];
        }
        if (input[i] <= scoreObject.lowest) {
            scoreObject.lowest = input[i];
        }
    }
    if (scoreObject.average > 60){
        scoreObject.passing = true;
    }
    console.log(scoreObject);
    return scoreObject;
}

