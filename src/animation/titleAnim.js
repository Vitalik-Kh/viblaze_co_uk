import Velocity from 'velocity-animate';

function dotsAnim(dotsContainer) {
    const dots = dotsContainer.children;
    this.count = 0;

    this.animate = () => {
        const runReposition = () => { this.reposition() }
        const count = this.count;
        const animProps = { left: '+=35px' };
        const animOptions = { duration: 700, easing: 'linear' };
        const opacity = [(Math.random() * 2 + 4) / 10, 0];
        const lastDot = dots[7];
        const sequence = [
            { e: dots[0], p: { opacity: [0.9, 0] }, o: { duration: 1 } },
            { e: lastDot, p: { opacity: opacity }, o: { duration: 1 } },

            { e: dots, p: { scaleX: [1, 0], scaleY: [1, 0] }, o: { duration: 1000 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[1], p: { opacity: opacity }, o: { duration: 1 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[2], p: { opacity: opacity }, o: { duration: 1 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[3], p: { opacity: opacity }, o: { duration: 1 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[4], p: { opacity: opacity }, o: { duration: 1 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[5], p: { opacity: opacity }, o: { duration: 1 } },

            { e: lastDot, p: animProps, o: animOptions },
            { e: dots[6], p: { opacity: opacity }, o: { duration: 1 } }, 
            
            { e: lastDot, p: animProps, o: animOptions },

            { 
                e: dots, 
                p: { scaleX: 0, scaleY: 0 }, 
                o: { 
                    duration: 2000, 
                    complete: function() { 
                        if (count <= 3) {
                            runReposition() 
                        }  
                    } 
                } 
            }
            
        ];

        Velocity.RunSequence(sequence);
    }

    this.reposition = () => {
        const runAnimate = () => { this.animate() }
        const newTop = Math.floor(Math.random() * 60 + 20) + '%';
        const newLeft = Math.floor(Math.random() * 60 + 20) + '%';
        const rotates = [ 0, 90, 180, 270 ];
        const newRotate = rotates[Math.floor(Math.random() * 4)];
        const newSize = Math.random() + 0.1;

        Velocity(
            dotsContainer, 
            { 
                top: [newTop, 0], 
                left: [newLeft,0], 
                rotateZ: [newRotate, '0deg'],
                scaleX: [newSize, 1],
                scaleY: [newSize, 1]
            }, 
            { duration: 1 });
        Velocity(
            dots, 
            { opacity: [0, 0.5] }, 
            { duration: 1 });
        Velocity(
            dots[7], 
            { left: ['0px', '245px'], opacity: 0.5 }, 
            { duration: 1, complete: function() { runAnimate() } });
        this.count++;
    }

    this.init = () => {
        this.reposition();
    }
}

export default dotsAnim;