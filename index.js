const data = [];
function getColorStyleByTitle(data, key) {
    switch (data[key]) {
        case 'Name1': return 'name1';
        case 'Name2': return 'name2';
        case 'Name3': return 'name3';
        default: return 'other';
    }
}

function sortByKey(data, key, order) {
    return data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
}

function clearGrid() {
    const root = document.getElementsByTagName("tbody");
    root[0].innerHTML = '';
}

function drawGrid(data) {
    const t = document.getElementById("container");
    let order = 1;
    t.addEventListener("click", (event) => {
        if(event.target.tagName === 'TH') {
            const title = event.target.innerText;
            order = order * (-1);
            if(title) {
                const sortedData =sortByKey(data, title.toLowerCase(), order);
                drawGrid(sortedData);
            }
        }
    });
    const root = document.getElementsByTagName("tbody");
    if(root[0].hasChildNodes()) {
        clearGrid();
    }

    data.forEach((d) => {
        const col = document.createElement('tr');
        Object.keys(d).forEach(key => {
            const row = document.createElement('td');
            row.innerHTML = d[key];
            col.appendChild(row);
            if(key==='name') {
                const styl = getColorStyleByTitle(d, key);
                col.className = styl;
            }
        });
        root[0].appendChild(col);
    });
}

(
    function (data) {
        data = [
            { name: 'Name1', age: 11, sex: 'Male'},
            { name: 'Name2', age: 12, sex: 'FeMale'},
            { name: 'Name3', age: 13, sex: 'Male'},
            { name: 'Name2', age: 14, sex: 'FeMale'},
            { name: 'Name1', age: 15, sex: 'Male'},
            { name: 'Name3', age: 16, sex: 'FeMale'}
        ];
        drawGrid(data);
    }
)(data);