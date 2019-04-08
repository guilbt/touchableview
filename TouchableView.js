import React from 'react'

import { View, TouchableOpacity, TouchableNativeFeedback, 
    ViewProps, TouchableOpacityProps, TouchableNativeFeedbackProps,
    Platform } from 'react-native'


export type TouchableViewProps = {
    /**
     * Accept props from TouchableNativeFeedback (TNF) or TouchableOpacity (TO)
     * TNF props are used in Android Platgorms
     * TO props are used in IOS
     */
    touchableProps?: TouchableNativeFeedbackProps|TouchableOpacityProps,

    /**
     * This props could be passed through TouchableProps, but since it's easier
     * to implement simple TouchableViews if it's passed directly, i repeated it outside the touchableProps object.
     * Specially handy if you wanna change all your Touchables + Views to the TouchableView component.
     */
    onPress?: (event: GestureResponderEvent) => void,

    /**
     * Props passed to the View,
     * in IOS, are also passed to the TouchableOpacity
     */
    otherProps?: ViewProps,

    /**
     * Are children required to a TouchableView?
     * May change in the future, depending on team feedback.
        */
    children: React.PropTypes.element.isRequired
}

export class TouchableView extends React.PureComponent<TouchableViewProps> {
    render() {
        const {onPress, touchableProps, children, ...otherProps} = this.props
        return Platform.select({
            ios: (
                <TouchableOpacity
                    {...touchableProps} {...otherProps} onPress={onPress}>
                    {children}
                </TouchableOpacity>
            ),
            android: (
                <TouchableNativeFeedback {...touchableProps} onPress={onPress}>
                    <View {...otherProps}>
                        {children}
                    </View>
                </TouchableNativeFeedback>
            )
        })
    }
} 
