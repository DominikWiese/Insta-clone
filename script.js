let posts = [
    {
        'profileImg': 'img/profile1.jpg',
        'author': 'Aline Schmidt',
        'location': 'Prag',
        'image': 'img/forrest.jpg',
        'likes': 354,
        'commentAuthor': [`<b>Thomas Meier</b>`, `<b>Sonja Lechner</b>`, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `],
        'comments': [` Tolles Bild!`, ` Da waren wir 2010 auch.`],
        'postAuthor': []
    },
    {
        'profileImg': 'img/profile2.jpg',
        'author': 'Thomas Meier',
        'location': 'Hamburg',
        'image': 'img/kiez.jpg',
        'likes': 1789,
        'commentAuthor': [`<b>Dennis Lehmann</b>`, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `],
        'comments': [` Warst du auch auf dem Fischmarkt?`],
        'postAuthor': []
    },
    {
        'profileImg': 'img/profile3.jpg',
        'author': 'Sonja Lechner',
        'location': 'Lübeck Travemünde',
        'image': 'img/beach.jpg',
        'likes': 12540,
        'commentAuthor': [`<b>Susanne Frank</b>`, `<b>Natalie Hartmann</b>`, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `],
        'comments': [` Wunderschön!`, ` Fernweh!`],
        'postAuthor': []
    },
    {
        'profileImg': 'img/profile5.jpg',
        'author': 'Natalie Hartmann',
        'location': '',
        'image': 'img/berge.jpg',
        'likes': 51,
        'commentAuthor': [`<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `],
        'comments': [],
        'postAuthor': []
    },
    {
        'profileImg': 'img/profile4.jpg',
        'author': 'Dennis Lehmann',
        'location': 'Hamburg',
        'image': 'img/eisdiele.jpg',
        'likes': 164,
        'commentAuthor': [`<b>Susanne Frank</b>`, `<b>Thomas Meier</b>`, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `, `<b>Dominik</b> `],
        'comments': [` Lecker!`, ` Lasst es euch schmecken!`],
        'postAuthor': []
    }
];


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += `
        <div class="card">

            <div class="card-head">
                <img class="profile-img margin-16" src="${post['profileImg']}">
                <div class="card-title">
                    <h2>${post['author']}</h2>
                    <span>${post['location']}</span>
                </div>
            </div>

            <img class"card-image" src="${post['image']}">

            <div class="card-icon-container">
                <div>
                    <img onclick="addLike(${i})" id="heartImg${i}" class="card-icon" src="img/heart_fett.png">
                    <img class="card-icon" src="img/speechbubble_fett.png">
                    <img class="card-icon" src="img/arrow.png">
                </div>
                <img onclick="addBookmark(${i})" id="bookmark${i}" class="card-icon margin-right-16" src="img/bookmark.png">
            </div>
            <div class="likes margin-16">
                <b class="margin-right-8">Gefällt</b> <b class="margin-right-8" id="like${i}">${post['likes']}</b> <b>Mal</b>
            </div>
            <div class="comments" id="commentcontent${i}"></div>

            <div class="card-footer">
                <input id="new_comment${i}" class="card-input" placeholder="Kommentar">
                <button onclick="addComment(${i})">Senden</button>
            </div>
        </div>
        `;

        let comments = document.getElementById(`commentcontent${i}`);

        for (let j = 0; j < post[`comments`].length; j++) {
            const author = post[`commentAuthor`][j];
            const comment = post[`comments`][j];

            comments.innerHTML += `<div>${author}${comment}</div>`;
            
        }
    }
}

function addComment(i) {
    let input = document.getElementById(`new_comment${i}`);
    posts[i]['comments'].push(input.value);
    render();
    input.value = '';
}

function addLike(i) {
    let heart = document.getElementById(`heartImg${i}`);
    let black = 'img/heart_fett.png';
    let red = 'img/heart_red.png';
    let likes = document.getElementById(`like${i}`)

    if (heart.getAttribute('src') === black) {
        heart.setAttribute('src', red);
        likes.innerHTML = posts[i]['likes']+1;
    } else {
        heart.src = black;
        likes.innerHTML = posts[i]['likes']-0;
    }
}

function addBookmark(i) {
    let mark = document.getElementById(`bookmark${i}`);
    let oldImg = 'img/bookmark.png';
    let newImg = 'img/bookmark_black.png';

    if (mark.getAttribute('src') === oldImg) {
        mark.setAttribute('src', newImg);
    } else {
        mark.src = oldImg;
    }
}