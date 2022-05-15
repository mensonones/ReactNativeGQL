import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import INFO_PERSON from '../queries';

import Card from '../components/Card';

const Home = () => {

    const { loading, error, data } = useQuery(INFO_PERSON);

    return (
        <View>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error! {error.message}</Text>}
            {data && 
            <FlatList
                data={data.characters.results}
                renderItem={({ item }) => <Card card={item} />}
                keyExtractor={item => item.id}
            />}
        </View>
    );
}

export default Home;