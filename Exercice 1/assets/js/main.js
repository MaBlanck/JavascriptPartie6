for( i = 2020; i <= 2030; i++){
    let div = document.createElement('p');
    div.innerHTML = i;
    document.body.appendChild(div);
    if(i % 4 === 0){
    div.style.color = 'red';
    }};