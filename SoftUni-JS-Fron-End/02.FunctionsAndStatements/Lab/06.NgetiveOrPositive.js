function SignCheck(...number){
    return result = number.filter((x) => x<0).length%2 !== 0 ? 'Negative' : 'Positive'; 
}

console.log(SignCheck(-5, -12, -13))