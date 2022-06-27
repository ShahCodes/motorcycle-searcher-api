document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const make = document.querySelector('#make').value
  const year = document.querySelector('#year').value
  // fixes spaces between characters for api Fetch(url)
  let model = document.querySelector('#model').value.replace(/ /g, "")
  const url = `https://motorcycle-specs-database.p.rapidapi.com/article/${year}/${make}/${model}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': '5b2fc96319msh22e006db453c941p14c81fjsn61d5a38c001e'
    }
  };
  
  
  fetch(url, options)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    if(data === null || data === undefined) {
      alert('Model Not Available, Try Searching for a Different Model!')
    }
    document.querySelector('#engine').innerText = data.engineAndTransmission['displacementName']

    document.querySelector('#power').innerText = data.engineAndTransmission['powerName']

    document.querySelector('#category').innerText = data.articleCompleteInfo['categoryName']

    document.querySelector('#img').src = data.articleImage['link']  
    img.alt = data.articleImage['imageName']

  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}


// Testing:

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f7b0f4f22fmsh130c2b5e0c5f133p189ee4jsnca7119544242'
//   }
// };


// fetch(`https://motorcycle-specs-database.p.rapidapi.com/article/2020/KTM/Duke%390`, options)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });