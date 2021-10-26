fetch('https://api.kawalcorona.com/')
    .then(res => res.json())
    .then((out) => {
        // console.log('Output: ', out);
        let dataList = document.querySelector("#dataList");
        let no=1;
        for(let data of out){
            let row = document.createElement('tr');
            row.innerHTML="<td>"+no+"</td>"
            row.innerHTML += "<td>" + data.attributes.Country_Region + "</td>";
            row.innerHTML += "<td>" + data.attributes.Confirmed + "</td>";
            row.innerHTML += "<td>" + data.attributes.Deaths+ "</td>";
            row.innerHTML += "<td>" + data.attributes.Recovered+ "</td>";
            dataList.appendChild(row);
            no++;
        }
}).catch(err => console.error(err));

