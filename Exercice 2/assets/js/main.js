for( i = 0; i <= 100; i++){
    let div = document.createElement('p');
    div.innerHTML = i;
    document.body.appendChild(div);
    if(i % 15 === 0){
    div.innerText = '...';
    }};