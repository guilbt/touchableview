# Touchable View
Touchable View component for react-native that works around all differences between android and ios touchables, making them look as native as possible.

The main purpose is changing code that would be done like this:

```
export const AddCard = ({onPress, title, style, titleStyle}) => {
  Platform.select({
    ios: (
      <TouchableOpacity
          onPress={onPress}>
        <Text style={[styles.title, titleStyle]} ellipsizeMode={'tail'} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    ),
    android: (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
              <Text style={[styles.title, titleStyle]} ellipsizeMode={'tail'} numberOfLines={1}>
                {title}
              </Text>
            </View>
        </TouchableNativeFeedback>
    )
  })
};

```

To a cleaner way:
```
export const AddCard = ({onPress, title, style, titleStyle}) => {
  return (
    <TouchableView onPress={onPress} style={[styles.container, style]} >
        <Text style={[styles.title, titleStyle]} ellipsizeMode={'tail'} numberOfLines={1}>
          {title}
        </Text>
    </TouchableView>
  );
};

```

All feedback is appreciated.
