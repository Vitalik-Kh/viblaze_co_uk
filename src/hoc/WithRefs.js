import React from 'react';

function withRefs(Component) {
    class WithRefs extends React.Component {
        render() {
            const { forwardedRef } = this.props;

            return <Component ref={ forwardedRef } />
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithRefs { ...props } forwardedRef={ ref } />
    })
}

export default withRefs;