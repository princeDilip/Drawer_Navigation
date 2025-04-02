import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawerContent from '@/src/components/CustomDrawerContent';



export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer drawerContent={CustomDrawerContent} screenOptions={{
				drawerHideStatusBarOnOpen: true,
				drawerActiveBackgroundColor: '#5363df',
				drawerActiveTintColor: "#fff",
			}}>
				<Drawer.Screen
					name="index"
					options={{
						drawerLabel: 'Home',
						headerTitle: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						)
					}}
				/>
				<Drawer.Screen
					name="about"
					options={{
						drawerLabel: 'About',
						headerTitle: 'About',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="information-circle" size={size} color={color} />
						)
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}

