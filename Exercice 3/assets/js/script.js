let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
for( i = 0; i <= languages.length -1; i++){
    let div = document.createElement('p');
div.innerHTML = languages[i];
document.body.appendChild(div);
}
