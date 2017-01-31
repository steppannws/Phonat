import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'

if (__DEV__) {
	Reactotron
		// .configure({name: 'Humber', host: '10.76.81.131'})
		.configure({name: 'Humber', host: '192.168.0.28'})
		.use(trackGlobalErrors())
		.connect();

	console.tron = Reactotron
}