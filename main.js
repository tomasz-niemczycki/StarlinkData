const APIKey = "DL9J24-A4ERFH-NJWL44-5M7D";

function fetchData() {
    fetch("https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=" + APIKey)
    .then(res => res.json)
    .then(data => console.log(data.id))
    .catch(err => console.error("Couldn't fetch error: " + err))
};

fetchData();