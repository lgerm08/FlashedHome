import { View } from 'react-native';

export function BackgroundBalls({ hasShadow }: { hasShadow: boolean; }) {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
        }}>
            <View style={{
                backgroundColor: '#7902D5',
                height: 40.75,
                width: 40.75,
                borderRadius: 99,
                zIndex: 3,
                ...hasShadow ? {
                    shadowColor: '#E03388',
                    shadowOpacity: 1,
                    shadowRadius: 5
                } : {},
            }}/>

            <View style={{
                position: 'absolute',
                backgroundColor: '#410F68',
                borderColor: '#7902D5',
                borderWidth: 0.7,
                height: 55,
                width: 55,
                borderRadius: 99,
                zIndex: 2,
                opacity: 0.5,
                ...hasShadow ? {
                    shadowColor: '#E03388',
                    shadowOpacity: 1,
                    shadowRadius: 15
                } : {},
            }}/>

            <View style={{
                position: 'absolute',
                backgroundColor: '#7902D5',
                height: 72,
                width: 72,
                borderRadius: 99,
                zIndex: 1,
                opacity: 0.25,
                ...hasShadow ? {
                    shadowColor: '#E03388',
                    shadowOpacity: 1,
                    shadowRadius: 10
                } : {},
            }}/>

            {/* for shadow only */}
            <View style={{
                position: 'absolute',
                backgroundColor: '#3E007C',
                height: 72,
                width: 72,
                borderRadius: 99,
                zIndex: -10,
                ...hasShadow ? {
                    shadowColor: '#E03388',
                    shadowOpacity: 0.5,
                    shadowRadius: 20
                } : {},
            }}/>
        </View>
    )
}
