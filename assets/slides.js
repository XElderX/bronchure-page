let selectedProject = 0;

let slide1 = [ 
    './assets/slides/project1slides/Screenshot_1.jpg',
    './assets/slides/project2slides/Screenshot_4.jpg',
    './assets/slides/project3slides/Screenshot_7.jpg',
    './assets/slides/project4slides/Screenshot_10.jpg',
    './assets/slides/project5slides/Screenshot_13.jpg',
    './assets/slides/project6slides/Screenshot_16.jpg',
    './assets/slides/project7slides/Screenshot_19.jpg',
    './assets/slides/project8slides/Screenshot_22.jpg'
]
let slide2 = [ 
    './assets/slides/project1slides/Screenshot_2.jpg',
    './assets/slides/project2slides/Screenshot_5.jpg',
    './assets/slides/project3slides/Screenshot_8.jpg',
    './assets/slides/project4slides/Screenshot_11.jpg',
    './assets/slides/project5slides/Screenshot_14.jpg',
    './assets/slides/project6slides/Screenshot_17.jpg',
    './assets/slides/project7slides/Screenshot_20.jpg',
    './assets/slides/project8slides/Screenshot_23.jpg'
]
let slide3 = [ 
    './assets/slides/project1slides/Screenshot_3.jpg',
    './assets/slides/project2slides/Screenshot_6.jpg',
    './assets/slides/project3slides/Screenshot_9.jpg',
    './assets/slides/project4slides/Screenshot_12.jpg',
    './assets/slides/project5slides/Screenshot_15.jpg',
    './assets/slides/project6slides/Screenshot_18.jpg',
    './assets/slides/project7slides/Screenshot_21.jpg',
    './assets/slides/project8slides/Screenshot_24.jpg'
]

function showProject(n){ 
    const portItems = document.getElementsByClassName('portfolio-item')
   
    if (n==0) { 
        for (let index = 0; index < portItems.length; index++) {
            portItems[index].style.display = 'block';
            
        }
        return document.querySelector('.slider').style.display = 'none';
    }
    document.getElementById("slide1").src = slide1[n-1];
    document.getElementById("slide2").src = slide2[n-1];
    document.getElementById("slide3").src = slide3[n-1];
    document.querySelector('.slider').style.display = 'block';

    for (let index = 0; index < portItems.length; index++) {
        portItems[index].style.display = 'none';
        
    }
    console.log('selected: ' + n);


    portfolio-item

}

var count = 1;
setInterval(function(){
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 3 ){
        count = 1;
    }
}, 5000);