var now = new Date();
var hora = now.getHours();
if(hora < 12){
    console.log ('Bom dia')
}
else if(hora >= 12){
console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}