import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'
import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawerContent = (props: any) => {
	const router = useRouter();
	const { top, bottom } = useSafeAreaInsets();


	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ backgroundColor: '#fff'}}>
				<View style={{ padding: 10, backgroundColor: 'cyan',}}>
					<Image
						source={{ uri: "https://images.hellomagazine.com/horizon/square/f835369de025-robert-downey-jr.jpg" }}
						style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50 }} />
					<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Robert Downey Jr.</Text>
				</View>
				<View style={{ backgroundColor: '#fff', paddingTop: 10, width:'100%' }}>
					<DrawerItemList {...props} />
					<DrawerItem label={"Logout"} onPress={() => router.replace('/')} />
				</View>
			</DrawerContentScrollView>

			<View style={{
				borderTopColor: '#dde3fe',
				borderTopWidth: 1,
				padding: 20,
				paddingBottom: 20 + bottom,
			}}>
				<Text>Footer</Text>
			</View>
		</View>
	)
}

export default CustomDrawerContent

