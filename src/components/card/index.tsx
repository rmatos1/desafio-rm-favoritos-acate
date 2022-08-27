import { View, ImageBackground, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { FavoritesReducerData } from '../../store/modules/favorites/reducer';

import { addFavorite, removeFavorite } from '../../store/modules/favorites/reducer';

const Card = (props: any) => {

    const dispatch = useDispatch();

    const favorites = useSelector(FavoritesReducerData);

    const { id, image, name } = props.data;

    const manageFavorite = (id: number) => {

        if(!favorites.includes(id))
            dispatch(addFavorite(id))
        else
            dispatch(removeFavorite(id));    
    }

    return(
        <ImageBackground 
            style={styles.cardImage}
            imageStyle={{ borderRadius: 10 }}
            source={{ uri: image }}
        >

            <View style={styles.textBox}>

                <Text style={styles.textName}>{ name }</Text>

                <TouchableOpacity
                    style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
                    activeOpacity={.3}
                    underlayColor={'rgba(255, 255, 255, .7)'}
                    onPress={() => manageFavorite(id)}
                >
                    {
                        favorites.includes(id)? 
                            <Image source={require("../../../assets/icons/heart-full.png")} style={styles.icon} /> : 
                            <Image source={require("../../../assets/icons/heart-outline.png")} style={styles.icon} />
                    }
                    
                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        flex: 1,
        height: 300,
        borderRadius: 25,
        margin: 10,
        justifyContent: 'flex-end' 
    },
    textBox: {
        minHeight: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textName: {
        color: '#fff',
        fontSize: 19,
        flex: 1,
        paddingRight: 5
    },
    icon: {
        width: 36, 
        height: 36
    }
})

export default Card;