const a = document.querySelector(".menu");
a.addEventListener("click", function(){
    this.classList.toggle("open");
})
// Array.prototype.forEach1 = function(callback){
//     var output = [];
//     for(var i in this){
//         if(this.hasOwnProperty(i)){
//             callback(this[i], i);
//         };
//     }
// }

// Array.prototype.find1 = function(callback){
//     var output = [];
//     var result = true;
//     for(var i in this){
//         if(this.hasOwnProperty(i)){
//             result = callback(this[i], i, this);
//             if(result){
//                 output.push(this[i]);
//                 break;
//             }
//         }
//     }
//     return output;
// }

Array.prototype.every1 = function(callback){
    var result = true;
    for(var i in this){
        if(this.hasOwnProperty(i)){
           result = callback(this[i], i, this);
           if(!result){
               break;
           }
        }
    }
    return result;
}
var languages = ["Java","Ruby","Javascript","Python","Java"];
var test = languages.every1((language,index) => {
    return language.length < 5;
});
console.log(test);
console.log("------------------");
// languages.forEach1((language,index) => {
//     console.log(index,language);
// })
console.log("------------------");
console.log("------------------");


