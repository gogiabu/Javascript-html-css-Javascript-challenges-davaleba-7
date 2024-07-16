
const array1 = [1, 2, 3, 4, 5]; 
const array2 = [7, 8, 9, 10]; 
const array3 = [17, 23, 45, 67];

function sevenBoom(arr) {
    for (let num of arr){
        if (num.toString().includes('7')){
                    return "გამოვიდა, ჩანს";
            }

            } return "ამ მასივში ციფრი 7-იანი არსად ჩანს";
        };

window.alert(sevenBoom(array1));
window.alert(sevenBoom(array2));
window.alert(sevenBoom(array3));


