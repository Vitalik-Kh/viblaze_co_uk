import React from 'react';
import classes from './About.scss';
import Title from '../../components/UI/Title/Title';
import SocialIcon from '../../components/About/SocialIcon/SocialIcons';
import photoOfMeSrc from '../../assets/imgs/PhotoOfMe.png';
import ScrollShow from '../../hoc/ScrollShow';
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
                                I'm Front End Web Developer based in Leeds. 
                                I enjoy building great looking web pages and applications with clean design and smooth animation. I believe that good UX and UI is a 50% of website success. 
                                Good looking code as important to me as good looking web-pages. So high readability, good structure and scalability of code is a must.
                                I enjoy using React as the main framework. Its declarative and modular approach gives all you need to build and maintain projects of any size.
                            </p>
                            <p>
                                I'm always open to new opportunities and challenges :) 
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