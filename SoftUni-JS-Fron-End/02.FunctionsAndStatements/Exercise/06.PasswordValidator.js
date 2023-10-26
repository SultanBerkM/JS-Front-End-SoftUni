function checksIfPasswordIsValid(password){
    let result = '';
    let validLength = (pass) => pass.length >= 6 && pass.length <= 10;
    let consistOfLettersDigits = (pass) => pass.match("^[A-Za-z0-9]*$");
    let countDigits = password.match(/\d/g);
    let hasAtLeastTwoDigits = (pass) => pass || pass.length >=2;

    if(!validLength(password)){ result += "Password must be between 6 and 10 characters"}
    if(consistOfLettersDigits(password) === null){result += "Password must consist only of letters and digits"}
    if(!hasAtLeastTwoDigits(countDigits)){result += "Password must have at least 2 digits"}
    if(validLength && consistOfLettersDigits !==null && hasAtLeastTwoDigits){result += "Password is valid!"}

    console.log(result)
}
checksIfPasswordIsValid('logIn');