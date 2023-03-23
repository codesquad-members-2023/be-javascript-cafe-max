fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const table = document.querySelector('table tbody');

            data.forEach(item => {
                const row = table.insertRow();
                row.insertCell().textContent = item.title;
                row.insertCell().textContent = item.nickname;
                row.insertCell().textContent = item.date;
                row.insertCell().textContent = item.hit;
            });
        })
        .catch(error => console.error(error));