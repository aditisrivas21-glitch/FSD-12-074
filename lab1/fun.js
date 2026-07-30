//write a program to take any digit (0-9) and
//return its in word
//0-one
//1-two

const toWords = (digit)=>{
    const words=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return words[digit];
}
console.log(toWords(5));
console.log(toWords(3));
console.log(toWords(6));
