function getGrade (total) {
    if (total > 90) {
        return ('A+')
    }
    if (total > 80 && total <= 90)
        {
        return ('A')
    }
    if (total > 70 && total <= 80){
        return ('B')
    }
    if (total > 60 && total <= 70){
        return ('C')
    }
    if (total > 50 && total <= 60){
        return ('D')
    }
    if (total > 40 && total <= 50){
        return ('E')
    }
    if (total > 30 && total <= 40){
        return ('F')
    }
    if (total < 30){
        return ('FAIL')
    }
    
}

console.log(getGrade(45));
