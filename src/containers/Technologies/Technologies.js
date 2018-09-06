import React from 'react';
import classes from './Technologies.scss';
import ScrollShow from '../../hoc/ScrollShow/ScrollShow';
import TechIcon from '../../components/Technologies/TechIcon';

class Technologies extends React.Component {

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
            <section className={ classes.Technologies }>
                <div className={ classes.Container }>
                    <ScrollShow effect='transition.bounceIn' duration={ 1000 } delay={ 200 }> 
                        <h2>Technologies I use</h2> 
                    </ScrollShow>
                    <div className={ classes.Icons}>
                        { icons }
                    </div>
                </div>
            </section>
        )
    }
}

export default Technologies;