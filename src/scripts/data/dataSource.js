const __url = 'DATA.json';

export default function dataSource(){
    return fetch(__url)
    .then(results=>results.json())
    .then(data => data);
}

