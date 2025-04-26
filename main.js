let dashboardData = [];
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly')



fetch('./data.json').then(response=> {
    if (!response.ok) console.log('Network response was not ok');
    return response.json();
}).then((data) => {
    dashboardData = data
    weekly.style.color = "#FFFFFF"
    displayTimeFrame('weekly');

})

daily.addEventListener('click', (e) => {
    weekly.style.color = "hsl(235, 45%, 61%)"
    e.preventDefault();
    displayTimeFrame('daily');
})

weekly.addEventListener('click', (e) => {
     weekly.style.color = "#FFFFFF"
    e.preventDefault();
    displayTimeFrame('weekly');
})

monthly.addEventListener('click', (e) => {
    weekly.style.color = "hsl(235, 45%, 61%)"
    e.preventDefault();
    displayTimeFrame('monthly');
})


function displayTimeFrame (timeframe) {
    dashboardData.forEach(item => {
        const card = document.getElementById(item.title)
        if (card) {
            const hours = card.querySelector('h1');
            const lastPeriod = card.querySelector('p');
            const title = card.querySelector('h2');

            title.textContent = item.title;
            hours.textContent = `${item.timeframes[timeframe].current}hrs`;
            lastPeriod.textContent = `Previous ${item.timeframes[timeframe].period} - ${item.timeframes[timeframe].previous}` 
        }
    })
}



