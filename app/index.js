import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import {
	Nearbyjobs,
	Popularjobs,
	Welcome,
	ScreenHeaderBtn,
} from "../components";

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchtermNavigation = () => {
		if (searchTerm) {
			router.push(`/search/${searchTerm}`);
		}
	};

	const btnLeft = () => (
		<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
	);

	const btnRight = () => (
		<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
	);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerLeft: btnLeft,
					headerRight: btnRight,
					headerTitle: "",
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={handleSearchtermNavigation}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
