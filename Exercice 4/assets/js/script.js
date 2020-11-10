let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
for( i = 0; i <= days.length -1; i++){
    let div = document.createElement('p');
div.innerHTML = days[i];
document.body.appendChild(div);
if(i >= 5 && i<= 6 ){
    div.style.fontWeight = 'bold';
}
};

