const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();


    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement("IMG");
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);

    makeImages(res.data);
    form.elements.value = "";
})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}


const bunica = async () => {
    let sum = 8 + 5;
    return sum
}
console.log(bunica());
const getSum = async () => {
    let rezultat = await bunica();
    console.log(rezultat)
}
getSum()