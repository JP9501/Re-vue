
export default function(tirm){
     let date = new Date(tirm);
     return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}