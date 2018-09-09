import React from 'react';
import classes from './About.scss';
import Title from '../../components/UI/Title/Title';
import SocialIcon from '../../components/About/SocialIcon/SocialIcons';
import photoOfMeSrc from '../../assets/imgs/PhotoOfMe.png';
import ScrollShow from '../../hoc/ScrollShow/ScrollShow';
import withRefs from '../../hoc/WithRefs';
import scrollToAnim from '../../animation/scrollToAnim';

class About extends React.Component {

    socialIcons = [
        { name: 'github', link: 'https://github.com/Vitalik-Kh', title: 'GitHub' }, 
        { name: 'codepen', link: 'https://codepen.io/viblaze/', title: 'Codepen' },
        { name: 'facebook', link: 'https://www.facebook.com/vtlkx', title: 'Facebook' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/vitalii-khymynets-18792375/', title: 'LinkedIn' }
    ];

    sectionRef = React.createRef();

    scrollIn = () => {
        scrollToAnim(this.sectionRef.current);
    }

    render() {
        const icons = this.socialIcons.map((icon, i) => {
            return (
                <a href={ icon.link } target='_blank'  key={ i } title={ icon.title }>
                    <SocialIcon name={ icon.name } />
                </a>
            );
        });

        return (
            <section className={ classes.About } ref={ this.sectionRef }>
                <div className={ classes.Container }>
                    <Title>a little about me...</Title>
                    <div className={ classes.Content }>
                        <div className={ classes.Text }>
                            <p> Hi, my name is Vitalii Khymynets. </p>
                            <p>   
                                I’m a front end web developer student from Leeds, GB. 
                                I already have gone through online courses and challenges from w3school, 
                                freeCodeCamp, Codecademy and Udemy in HTML, CSS, JavaScript, jQuery, 
                                Bootstrap. 
                            </p>
                            <p>
                                My goal is to enter a world of web development as a junior front end 
                                developer. I’m passionate about making user-friendly products with responsive 
                                and clear design, spiced up with interactivity, using JavaScript. I believe 
                                that web development is the most exciting and fast growing area of programming.
                            </p>

                            <ScrollShow 
                                className={ classes.SocialIcons }
                                effect='transition.bounceIn'
                                stagger='100'
                                delay='200'
                                drag='true'>

                                { icons }
                            </ScrollShow>
                        </div>
                        
                        <ScrollShow 
                            className={ classes.PhotoOfMe }
                            effect='transition.slideUpBigIn'
                            duration='1000'
                            delay='200'>
                            
                            <img src={ photoOfMeSrc } alt='Vitalii - developer' />
                        </ScrollShow>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRefs(About);