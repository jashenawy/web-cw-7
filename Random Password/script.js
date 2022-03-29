// Database قاعدة البيانات
const chars = [
    { 1 : "1234567890"},
    { 2 : "avhdgurlomfhfkkepkdnd"},
    { 3 : "ADRKJJKLGOJKJHHTFGVDFHGFG"},
    { 4 : ">?:@$%&£!&*(~~????/"},

];

  
// دالة generate
function generate(){
    let randomPassword = "" ;
 randomPassword = 
    randomPassword + 
    chars[0] ["1"].charAt(Math.floor(Math.random() * chars[0]["1"].length));

 randomPassword = 
    randomPassword + 
    chars[1] ["2"].charAt(Math.floor(Math.random() * chars[1]["2"].length));

 randomPassword = 
    randomPassword + 
    chars[2] ["3"].charAt(Math.floor(Math.random() * chars[2]["3"].length));

 randomPassword = 
    randomPassword + 
    chars[3] ["4"].charAt(Math.floor(Math.random() * chars[3]["4"].length));

    

//     randomPassword = 
//     randomPassword + 
//     chars[0] ["1"].charAt(Math.floor(Math.random() * chars[0]["1"].length));

//  randomPassword = 
//     randomPassword + 
//     chars[1] ["2"].charAt(Math.floor(Math.random() * chars[1]["2"].length));

//  randomPassword = 
//     randomPassword + 
//     chars[2] ["3"].charAt(Math.floor(Math.random() * chars[2]["3"].length));

//  randomPassword = 
//     randomPassword + 
//     chars[3] ["4"].charAt(Math.floor(Math.random() * chars[3]["4"].length));
// chars.forEach((charAt) => console.log());



console.log(randomPassword);
display.value = randomPassword;

}



