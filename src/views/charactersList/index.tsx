import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useQuery } from "@apollo/client";

import CHARACTER from "../../queries";

import Card from "../../components/card";

const CharactersList = () => {

    const { loading, error, data } = useQuery(CHARACTER);

    const _renderItem = (item: any) => (<Card data={item} />)

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>

            { loading && 
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <ActivityIndicator size="large" color="#3871c7" />

                    <Text>Loading...</Text>

                </View> }

            { error && <Text>Erro...</Text> }

            {
                data && 
                    <FlatList
                        data={data.characters.results}
                        renderItem={({ item }) => _renderItem(item)}
                        keyExtractor={item => item.id}
                    />
            }

        </SafeAreaView>
    )
}

export default CharactersList;