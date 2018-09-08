import Velocity from 'velocity-animate';

const scrollToAnim = (el) => {
    Velocity(el, 'scroll', { duration: 500 })
}

export default scrollToAnim;