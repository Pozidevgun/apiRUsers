let url = 'https://randomuser.me/api/?nat=gb'
const   nameCont = document.querySelector('.card__name'),
        ageCont = document.querySelector('.card__age'),
        imgCont = document.querySelector('.card__img'),
        imgUrl = imgCont.getAttribute('src');
 
        let timeId = setTimeout(function getData(){
            fetch(url)
            .then(res => res.json())
            .then(data  =>{
                
                let person = data.results;
                    person.forEach(elem => {
                        imgCont.setAttribute('src', elem.picture.large);
                        nameCont.innerHTML = `${elem.name.first} ${elem.name.last}`;
                        
                    });
        })
        timerId = setTimeout(getData, 2000); 
        },50);
