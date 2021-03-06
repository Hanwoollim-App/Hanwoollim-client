import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	Platform,
} from 'react-native';
import color from '../../../utils/constant/common/design/Color';
import {
	SIGN_UP_COMPONENT_TEXT,
	SIGN_UP_ERROR_MESSAGE,
} from '../../../utils/constant/login/SingUpScreenUtils';
import CustomBtn from '../../common/CustomBtn';
import SignUpForm from './SignUpForm';
import CustomModal, { ModalValue } from '../../common/CustomModal';
import {
	fontPercentage,
	heightPercentage,
	widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import CustomStatusBar from '../../common/CustomStatusBar';

const styles = StyleSheet.create({
	barStyle: {
		backgroundColor: color.mainColor,
	},
	root: {
		flex: 1,
	},
	header: {
		height: heightPercentage(141),
		justifyContent: 'center',
		backgroundColor: color.mainColor,
	},
	headerText: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: fontPercentage(32),
		lineHeight: fontPercentage(40),
		letterSpacing: 0,
		fontWeight: 'bold',
		fontStyle: 'normal',
		textAlign: 'center',
		color: '#ffffff',
	},
	scrollView: {
		width: '100%',
	},
	scrollContent: {
		alignItems: 'center',
	},
	introText: {
		marginTop: heightPercentage(40),
		fontFamily: 'NotoSansKR-Regular',
		fontSize: fontPercentage(15),
		lineHeight: fontPercentage(20),
		letterSpacing: 0,
		fontWeight: 'bold',
		fontStyle: 'normal',
		textAlign: 'center',
		color: '#00203f',
	},
	middleEmpty: {
		height: heightPercentage(54),
	},
	input: {
		height: heightPercentage(33),
		marginTop: heightPercentage(53),
		flexDirection: 'row',
		alignItems: 'center',
	},
	alertText: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: fontPercentage(13),
		lineHeight: fontPercentage(18),
		letterSpacing: 0,
		fontWeight: 'normal',
		fontStyle: 'normal',
		textAlign: 'center',
		color: '#777777',
	},
	signUp: {
		width: '77.3%',
		height: heightPercentage(53),
		marginTop: heightPercentage(33),
		borderRadius: fontPercentage(15),
		backgroundColor: color.mainColor,
		...Platform.select({
			ios: {
				shadowColor: 'rgba(0, 0, 0, 0.16)',
				shadowOffset: {
					width: 0,
					height: heightPercentage(3),
				},
				shadowRadius: widthPercentage(6),
				shadowOpacity: widthPercentage(1),
			},
			android: {
				elevation: 1,
			},
		}),
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUpTitle: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: fontPercentage(20),
		lineHeight: fontPercentage(25),
		letterSpacing: 0,
		fontWeight: 'bold',
		fontStyle: 'normal',
		color: '#ffffff',
	},
});

function SignUp() {
	const navigation = useNavigation();
	const [name, setName]: [string, Function] = useState('');
	const [major, setMajor]: [string, Function] = useState('');
	const [studentID, setStudentID]: [string, Function] = useState('');
	const [modalValue, setModalValue]: [ModalValue, Function] = useState({
		isVisible: false,
		mainTitle: '',
	});

	const signUpBtnClickListener = () => {
		navigation.navigate('BottomTabNavigator', {
			screen: 'Home',
		});
	};

	return (
		<>
			<CustomStatusBar />
			<SafeAreaView style={styles.root}>
				<CustomModal
					isVisible={modalValue.isVisible}
					title={modalValue.mainTitle}
					firstButton={() =>
						setModalValue((prev: ModalValue) => ({
							...prev,
							isVisible: false,
						}))
					}
					firstBtnTitle={SIGN_UP_ERROR_MESSAGE.TRY_AGAIN_BTN}
				/>
				<View style={styles.header}>
					<Text style={styles.headerText}>{SIGN_UP_COMPONENT_TEXT.title}</Text>
				</View>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={styles.scrollContent}>
					<Text style={styles.introText}>{SIGN_UP_COMPONENT_TEXT.intro}</Text>
					<View style={styles.middleEmpty} />
					<SignUpForm
						placeholder={SIGN_UP_COMPONENT_TEXT.inputTitle.name}
						inputChangeListener={(value: string) => setName(value)}
						defaultValue={name}
					/>
					<SignUpForm
						placeholder={SIGN_UP_COMPONENT_TEXT.inputTitle.major}
						inputChangeListener={(value: string) => setMajor(value)}
						defaultValue={major}
					/>
					<SignUpForm
						placeholder={SIGN_UP_COMPONENT_TEXT.inputTitle.studentID}
						inputChangeListener={(value: string) => setStudentID(value)}
						defaultValue={studentID}
					/>
					<Text style={styles.alertText}>{SIGN_UP_COMPONENT_TEXT.alert}</Text>
					<CustomBtn
						title={SIGN_UP_COMPONENT_TEXT.signUpBtn}
						onClickListener={signUpBtnClickListener}
						btnStyle={styles.signUp}
						titleStyle={styles.signUpTitle}
					/>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}

export default SignUp;
