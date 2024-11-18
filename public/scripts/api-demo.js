document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('/api/data');
    const data = await response.json();

    const display = document.getElementById('dataDisplay');
    display.innerHTML = data.map(item => `
        <div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        </div>
    `).join('');
});
