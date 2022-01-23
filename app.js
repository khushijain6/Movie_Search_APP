const form = document.querySelector('form');
const list = document.getElementById('list');

function getMovies(searchtext){
    //remove all displayed movies first
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }


    // url from tvmaze api
    const url = `https://api.tvmaze.com/search/shows?q=${searchtext}`;
    axios.get(url)
        .then((res) => {
            for(let item of res.data) {
                if(item.show.image){
                    // console.log(item.show.image.medium);
                    const image = document.createElement('img');
                    image.src = item.show.image.medium;
                    image.style.margin='10px';
                    list.append(image);
                }
            }
            // console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Form Submitted');
    const inpText = form.elements[0].value ;

    getMovies(inpText);
    form.elements[0].value = "";
    
})