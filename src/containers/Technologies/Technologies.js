import React from 'react';
import classes from './Technologies.scss';
import ScrollShow from '../../hoc/ScrollShow';
import TechIcon from '../../components/Technologies/TechIcon';
import Title from '../../components/UI/Title/Title';
import withRefs from '../../hoc/WithRefs';
import scrollToAnim from '../../animation/scrollToAnim';

class Technologies extends React.Component {
    sectionRef = React.createRef();

    scrollIn = () => {
        scrollToAnim(this.sectionRef.current);
    }

    render() {
        const iconsNames = ['js', 'html', 'css', 'react', 'redux', 'webpack', 
        'jest', 'sass', 'bootstrap', 'git', 'ai', 'xd'];
        const icons = iconsNames.map((icon, i) => {
            return (
                <ScrollShow 
                    key={ i } 
                    className={ classes.TechIcon }
                    effect='transition.slideUpBigIn' 
                    duration={ 1000 }
                    delay={ 200 }
                >
                    <TechIcon name={ icon } />
                </ScrollShow>
            )
        })

        return (
            <section className={ classes.Technologies } ref={ this.sectionRef }>
                <div className={ classes.Container }>
                    <Title>Technologies I use</Title>
                    <div className={ classes.Icons}>
                        { icons }
                    </div>
                </div>
            </section>
        )
    }
}

export default withRefs(Technologies);