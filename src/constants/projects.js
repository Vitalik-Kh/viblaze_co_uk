import ticTacToeImg from '../assets/imgs/TicTacToe.png';
import calculatorImg from '../assets/imgs/calculator.jpg';
import fashionBlogImg from '../assets/imgs/fashionBlog.jpg';
import LeedsPlacesMapImg from '../assets/imgs/LeedsPlacesMap.jpg';
import photoPortfolioImg from '../assets/imgs/photoPortfolio.jpg';
import pomodoroImg from '../assets/imgs/pomodoro.jpg';


const projects = [
    {   
        title: 'TicTacToe Game',
        imgSrc: ticTacToeImg,
        techs: ['HTML', 'Sass', 'React'],
        playLink: 'https://vitalik-kh.github.io/TicTacToe/',
        srcLink: 'https://github.com/Vitalik-Kh/TicTacToe'
    },
    {   
        title: 'Calculator',
        imgSrc: calculatorImg,
        techs: ['HTML','Sass', 'Bootstrap', 'VanillaJS'],
        playLink: 'https://vitalik-kh.github.io/Calculator-JS/',
        srcLink: 'https://github.com/Vitalik-Kh/Calculator-JS'
    },
    {   
        title: 'Pomodoro Timer',
        imgSrc: pomodoroImg,
        techs: ['HTML','Sass', 'VanillaJS'],
        playLink: 'https://vitalik-kh.github.io/Pomodoro/',
        srcLink: 'https://github.com/Vitalik-Kh/Pomodoro'
    },
    {   
        title: 'Neighbourhood Map',
        imgSrc: LeedsPlacesMapImg,
        techs: ['HTML','Sass', 'jQuery', 'Knockout.js', 'Google Maps API', 'Foursquare API'],
        playLink: 'https://vitalik-kh.github.io/Neighbourhood-map/',
        srcLink: 'https://github.com/Vitalik-Kh/Neighbourhood-map'
    },
    {   
        title: 'Photographer Portfolio',
        imgSrc: photoPortfolioImg,
        techs: ['CSS', 'HTML', 'VanillaJS'],
        playLink: 'https://codepen.io/viblaze/full/dWYKQm/',
        srcLink: 'https://codepen.io/viblaze/pen/dWYKQm'
    },
    {   
        title: 'Beauty Blog',
        imgSrc: fashionBlogImg,
        techs: ['CSS', 'HTML', 'VanillaJS'],
        playLink: 'https://codepen.io/viblaze/full/BWbMeE/',
        srcLink: 'https://codepen.io/viblaze/pen/BWbMeE/'
    }

];

export default projects;