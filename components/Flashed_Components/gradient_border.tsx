import { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

interface IGradientBorder {
    borderWidth: number;
    borderRadius: number;
    colors: (string | number)[];
    children: ReactNode;
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    style?: ViewStyle;
}

export function GradientBorder({
    borderWidth,
    borderRadius,
    colors,
    start,
    end,
    children,
    style,
}: IGradientBorder) {
    return (
        <View
            style={[{
                // overflow: 'hidden',
                // backgroundColor: 'transparent',
                // borderRadius
            }, style]}
        >
            <View style={{
                marginLeft: borderWidth,
                marginRight: borderWidth,
                marginTop: borderWidth,
                marginBottom: borderWidth,
                borderRadius,
                overflow: 'hidden',
                zIndex: 2
            }}>
                {children}
            </View>

            <MaskedView
                style={[
                    StyleSheet.absoluteFill,
                    { zIndex: 1 }
                ]}
                maskElement={(
                    <View
                        pointerEvents='none'
                        style={[
                            StyleSheet.absoluteFill,
                            {
                                borderWidth,
                                borderRadius,
                                backgroundColor: 'transparent',
                            },
                        ]}
                    ></View>
                )}
            >
                <LinearGradient
                    colors={colors}
                    start={start}
                    end={end}
                    pointerEvents='none'
                    style={{
                        flex: 1,
                    }}
                ></LinearGradient>
            </MaskedView>
        </View>
    );
}