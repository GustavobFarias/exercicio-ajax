document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorio = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidor');
    const seguindo = document.getElementById('seg');
    const linkPerfil = document.getElementById('link');

    fetch('https://api.github.com/users/GustavobFarias')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        repositorio.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        linkPerfil.href = json.html_url;

    })
})

