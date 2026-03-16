import { View, Text } from 'react-native';
import React, {useState} from 'react';

export default function login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>login</Text>
        </View>
    );
}
