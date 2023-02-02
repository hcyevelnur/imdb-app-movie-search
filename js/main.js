
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById("films").innerHTML = ``
    fetch(`https://imdb-api.com/API/Search/k_g4j5z2a8/${document.getElementById('tapdigin').value}`)
    .then((resp) => resp.json())
    .then((data) => {
    for (let film of data.results) {
        console.log(film);
        document.getElementById("films").innerHTML += `
        <div class="row">
        <div class="col-md-12 blog-holder">
            <div class="row">
                <div style="flex: 1 0 33.333333%;
                max-width: 100.333333%;" class="col-md-4 blog-item-wrapper">
                    <div class="blog-item">
                        <div class="blog-img">
                            <img src="${film.image}" alt="">
                        </div>
                        <div class="blog-text">
                            <div class="blog-tag">
                            </div>
                            <div class="blog-title">
                                <h6 style="color: black;">${film.title}</h6>
                            </div>
                            <div class="blog-author">
                                <p>${film.description}</p>
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
    </div>
            `
        }
    })
})



document.getElementById('btn').addEventListener('click', () => {
    console.log(document.getElementById('tapdigin').value)
})
