console.log("Promises");

const data = [{
    title: 'Aprendiendo JS',
    year: 2021,
    isbn: '125-54541-12',
    author: 'Carlos Azistre'
},{
    title: 'React Practico',
    year: 2022,
    isbn: '247-12547-25',
    author: 'Carlos Azistre'
},{
    title: 'Clean JS',
    year: 2020,
    isbn: '591-25766-01',
    author: 'Miguel Gomez'
}]

// const data = [];

function getData() {
    // setTimeout(() => {
    //     // console.log(data);
    //     return data;
    // }, 2000);
    // // return data;
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('Data is empty!!!!'))
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

console.log('Result', getData());

getData()
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error)=> {
        console.log(error);
    });

