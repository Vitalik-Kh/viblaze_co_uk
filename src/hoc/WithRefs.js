import React from 'react';

function withRefs(Component) {
    class WithRefs extends React.Component {
        render() {
            const { forwardedRef, ...rest } = this.props;

            return <Component ref={ forwardedRef } {...rest} />
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithRefs { ...props } forwardedRef={ ref } />
    })
}

export default withRefs;