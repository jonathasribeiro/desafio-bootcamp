import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Meetups from './pages/Meetups';
import Profile from './pages/Profile';
import Subscriptions from './pages/Subscriptions';

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp,
                }),
                App: createBottomTabNavigator(
                    {
                        Meetups,
                        Subscriptions,
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#fff',
                            inactiveTintColor: 'rgba(255,255,255,0.6)',
                            style: {
                                backgroundColor: '#2B1A2F',
                                paddingVertical: 5,
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: isSigned ? 'App' : 'Sign',
            }
        )
    );
