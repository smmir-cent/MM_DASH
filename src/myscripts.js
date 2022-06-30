// var link = "url has not been built";
// var link_ = "url has not been built";


async function The_Shawshank_Redemption(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/')
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index1.html' }, 5000);

    setTimeout(() => { window.location.href = url_a; }, 5500);

}

async function The_Godfather(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/' + id)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index2.html' }, 1000);

    setTimeout(() => { window.location.href = url_a; }, 1500);

}


async function The_Dark_Knight(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/' + id)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index3.html' }, 1000);

    setTimeout(() => { window.location.href = url_a; }, 1500);

}


async function The_Godfather_PartII(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/' + id)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index4.html' }, 1000);

    setTimeout(() => { window.location.href = url_a; }, 1500);

}


async function Angry_Men(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/' + id)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index5.html' }, 1000);

    setTimeout(() => { window.location.href = url_a; }, 1500);

}


async function Schindler_List(id) {
    event.preventDefault(); //for preventing the web to do it's default behavior

    fetch('http://127.0.0.1:5000/movies/' + id)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(() => { url_a = 'index6.html' }, 1000);

    setTimeout(() => { window.location.href = url_a; }, 1500);

}

function index1_call() {
    event.preventDefault(); //for preventing the web to do it's default behavior

    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    const name_ = data.name.replaceAll('%22', '');
    document.getElementById("name__id").value = name_;
    console.log(document.location.href)

}


function selectText() {
    var input = document.getElementById('name__id');
    input.focus();
    input.select();
    url_a = 'index2.html?name=' + input.value;
    window.location.href = url_a;
}

function showNote() {

    console.log(document.location.href)
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    const name_ = data.name.replaceAll('%22', '');
    url_a = name_;
    console.log(url_a)

    url_b = url_a.replaceAll('get', 'delete')
    // console.log(url_a.replaceAll('get', 'delete'))

    fetch(url_b)
    .then(response => response.text())
    .then(data => link_ = data)
    .catch(error => console.log('error', error));

    console.log(link_)

    setTimeout(() => { console.log(link_); }, 6000);

    setTimeout(() => { url_a = 'index3.html?name=' + link_; }, 6500);

    setTimeout(() => { window.location.href = url_a; }, 7500);



}

function index2_call() {
    event.preventDefault(); //for preventing the web to do it's default behavior

    var url = document.location.href,
        params = url.split('?')[1];
        
    document.getElementById("new_name_id").value = params;
}






