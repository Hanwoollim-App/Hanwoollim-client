import React from "react";
import {View, StyleSheet} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import weekItem from "../../../../utils/constant/reservation/timeTable/ReservationTimeTableUtil";
import CustomBtn from "../../../common/CustomBtn";

// 라이브러리용 StyleSheet
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontFamily: "KoreanYNSJG3",
		fontSize: 10,
		lineHeight: 16,
		letterSpacing: 0,
		textAlign: "left",
		color: "#000000",
	},
	inputAndroid: {
		width: "100%",
		height: "100%",
		fontSize: 12,
		fontFamily: "KoreanYNSJG3",
		lineHeight: 12,
		letterSpacing: 0,
		textAlign: "center",
		color: "#000000",
	},
});

const styles = StyleSheet.create({
	picker: {
		width: 138,
		height: 35,
		marginLeft: 28,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#00203f",
		justifyContent: "center",
	},
	reserve: {
		marginLeft: 100,
		width: 95,
		height: 28,
	},
	reserve__btn: {
		width: "100%",
		height: "100%",
		borderRadius: 20,
		backgroundColor: "#00203f",
		alignItems: "center",
		justifyContent: "center",
	},
	reserve__text: {
		width: 46,
		height: 16,
		fontFamily: "KoreanYNSJG3",
		fontSize: 10,
		fontWeight: "normal",
		fontStyle: "normal",
		lineHeight: 16,
		letterSpacing: 0,
		textAlign: "center",
		color: "#ffffff",
	},
});


function Header({btnListener, pickerValue, pickerValueChangeListener}) {
	return (
		<>
			<View style={styles.picker}>
				<RNPickerSelect
					style={pickerSelectStyles}
					useNativeAndroidPickerStyle={false}
					onValueChange={(value) => {
						pickerValueChangeListener(weekItem[value - 1]);
					}}
					placeholder={{}}
					value={pickerValue.value}
					items={weekItem}
				/>
			</View>
			<View style={styles.reserve}>
				<CustomBtn
					title={`예약하기`}
					onClickListener={btnListener}
					btnStyle={styles.reserve__btn}
					titleStyle={styles.reserve__text}
				/>
			</View>
		</>
	);
}

export default React.memo(Header);
