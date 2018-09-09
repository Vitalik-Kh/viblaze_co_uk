import ticTacToeImg from '../assets/imgs/projects/TicTacToe.png';
import ticTacToeImg_15x from '../assets/imgs/projects/TicTacToe_1.5x.png';
import ticTacToeImg_2x from '../assets/imgs/projects/TicTacToe_2x.png';

import calculatorImg from '../assets/imgs/projects/calculator.jpg';
import calculatorImg_15x from '../assets/imgs/projects/calculator_1.5x.jpg';
import calculatorImg_2x from '../assets/imgs/projects/calculator_2x.jpg';


import fashionBlogImg from '../assets/imgs/projects/fashionBlog.jpg';
import fashionBlogImg_15x from '../assets/imgs/projects/fashionBlog_1.5x.jpg';
import fashionBlogImg_2x from '../assets/imgs/projects/fashionBlog_2x.jpg';


import LeedsPlacesMapImg from '../assets/imgs/projects/LeedsPlacesMap.jpg';
import LeedsPlacesMapImg_15x from '../assets/imgs/projects/LeedsPlacesMap_1.5x.jpg';
import LeedsPlacesMapImg_2x from '../assets/imgs/projects/LeedsPlacesMap_2x.jpg';

import photoPortfolioImg from '../assets/imgs/projects/photoPortfolio.jpg';
import photoPortfolioImg_15x from '../assets/imgs/projects/photoPortfolio_1.5x.jpg';
import photoPortfolioImg_2x from '../assets/imgs/projects/photoPortfolio_2x.jpg';

import pomodoroImg from '../assets/imgs/projects/pomodoro.jpg';
import pomodoroImg_15x from '../assets/imgs/projects/pomodoro_1.5x.jpg';
import pomodoroImg_2x from '../assets/imgs/projects/pomodoro_2x.jpg';

const projects = [
    {   
        title: 'TicTacToe Game',
        imgSrc: [ticTacToeImg, ticTacToeImg_15x, ticTacToeImg_2x],
        techs: ['HTML', 'Sass', 'React'],
        playLink: 'https://vitalik-kh.github.io/TicTacToe/',
        srcLink: 'https://github.com/Vitalik-Kh/TicTacToe'
    },
    {   
        title: 'Calculator',
        imgSrc: [calculatorImg, calculatorImg_15x, calculatorImg_2x],
        techs: ['HTML','Sass', 'Bootstrap', 'VanillaJS'],
        playLink: 'https://vitalik-kh.github.io/Calculator-JS/',
        srcLink: 'https://github.com/Vitalik-Kh/Calculator-JS'
    },
    {   
        title: 'Pomodoro Timer',
        imgSrc: [pomodoroImg, pomodoroImg_15x, pomodoroImg_2x],
        techs: ['HTML','Sass', 'VanillaJS'],
        playLink: 'https://vitalik-kh.github.io/Pomodoro/',
        srcLink: 'https://github.com/Vitalik-Kh/Pomodoro'
    },
    {   
        title: 'Neighbourhood Map',
        imgSrc: [LeedsPlacesMapImg, LeedsPlacesMapImg_15x, LeedsPlacesMapImg_2x],
        techs: ['HTML','Sass', 'jQuery', 'Knockout.js', 'Google Maps API', 'Foursquare API'],
        playLink: 'https://vitalik-kh.github.io/Neighbourhood-map/',
        srcLink: 'https://github.com/Vitalik-Kh/Neighbourhood-map'
    },
    {   
        title: 'Photographer Portfolio',
        imgSrc: [photoPortfolioImg, photoPortfolioImg_15x, photoPortfolioImg_2x],
        techs: ['CSS', 'HTML', 'VanillaJS'],
        playLink: 'https://codepen.io/viblaze/full/dWYKQm/',
        srcLink: 'https://codepen.io/viblaze/pen/dWYKQm'
    },
    {   
        title: 'Beauty Blog',
        imgSrc: [fashionBlogImg, fashionBlogImg_15x, fashionBlogImg_2x],
        techs: ['CSS', 'HTML', 'VanillaJS'],
        playLink: 'https://codepen.io/viblaze/full/BWbMeE/',
        srcLink: 'https://codepen.io/viblaze/pen/BWbMeE/'
    }

];

export default projects;