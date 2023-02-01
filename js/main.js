
    
// fetch('https://imdb-api.com/API/Search/k_g4j5z2a8/recebivedik')
// .then((resp) => resp.json())
// .then((data) => {
//     // console.log(data.results);
//     for (let film of data.results) {
//         console.log(film);
//         document.getElementById("films").innerHTML += `
    //     <div class="row">
    //     <div class="col-md-12 blog-holder">
    //         <div class="row">
    //             <div style="flex: 1 0 33.333333%;
    //             max-width: 100.333333%;" class="col-md-4 blog-item-wrapper">
    //                 <div class="blog-item">
    //                     <div class="blog-img">
    //                         <img src="${film.image}" alt="">
    //                     </div>
    //                     <div class="blog-text">
    //                         <div class="blog-tag">
    //                         </div>
    //                         <div class="blog-title">
    //                             <h6 style="color: black;">${film.title}</h6>
    //                         </div>
    //                         <div class="blog-author">
    //                             <p>${film.description}</p>
    //                         </div>
    //                         <br>
    //                         <br>
    //                         <div class="blog-share-wrapper">
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
//         `
//     }
// })



const imdbaxtarr = document.querySelector('.search-button');
imdbaxtarr.addEventListener('click', async function () {
    try{
    const inputKeyword = document.querySelector('.input-keyword');
    const film = await getFilm(inputKeyword.value);
    updateUI(film);
    }catch(bos){
    }
});

function getFilm(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=189f03fe&s=' + keyword)
    .then(respon => {
        return respon.json();
    })
    .then(respon => {
        return respon.Search;
    });
}

function updateUI(film) {
        let kartlarr = '';
        film.forEach(f => kartlarr += tampilkartlarr(f));
        const kontainerFilm = document.querySelector('.kontainer-film');
        kontainerFilm.innerHTML = kartlarr;
}
document.addEventListener('click', async function (e) {
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const detailFilm = await getDetailFilm(imdbid);
        updateUIDetail(detailFilm);
    }
});

function getDetailFilm(imdbid) {
    return fetch('https://imdb-api.com/en/API/Search/k_g4j5z2a8/' + imdbid)
        .then(respon => respon.json())
        .then(f => f);
}

function updateUIDetail(f) {
    const detailFilm = tampilDetailFilm(f);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detailFilm;
}

function tampilkartlarr(f) {
            console.log(f);
    return `<div class="row">
    <div class="col-md-12 blog-holder">
        <div class="row">
            <div style="flex: 1 0 54%;
            max-width: 100%;" class="col-md-4 blog-item-wrapper">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="${f.Poster}" alt="Şəkil yoxdur">
                    </div>
                    <div class="blog-text">
                        <div class="blog-tag">
                        </div>
                        <div class="blog-title">
                            <h6 style="color: black;">${f.Title}</h6>
                        </div>
                        <div class="blog-author">
                            <p>${f.Year}</p>
                        </div>
                        <br>
                        <br>
                        <div class="blog-share-wrapper">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}