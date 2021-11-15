import React, { Fragment, useState } from 'react';

//Libraries
import Lottie from 'react-lottie-player';

//Animations
import Coin from '../../src/animaciones/lf20_2KNQ1X.json';


const Mouse = () => {

	//State Animations
	const [toggleButton, setToggleButton] = useState(false);
	const [segmentFrom, setSegmentFrom] = useState(0);
	const [segmentTo, setSegmentTo] = useState(60);
	const [segmentsEnabled, setSegmentsEnabled] = useState(false);
	const [play, setPlay] = useState(true);
	const [loop, setLoop] = useState(true);
	const [loopTimes, setLoopTimes] = useState(0);
	const [speed, setSpeed] = useState(0.5);
	const [direction, setDirection] = useState(1);
	const segments = [segmentFrom, segmentTo];

	const [log, setLog] = useState([]);
	const addLog = (v) => setLog(l => [v, ...l]);

	return (
		<Fragment>
			<Lottie
				loop={loop}
				speed={speed}
				play={play}
				animationData={Coin}
				direction={direction}
				segments={segmentsEnabled && segments}
				style={{ width: 60, marginBottom: 0, alignSelf: 'center', cursor: 'pointer' }}
				onComplete={() => addLog('complete')}
				onLoopComplete={() => addLog('loopComplete')}
				onEnterFrame={() => { /* addLog('enterFrame') */ }}
				onSegmentStart={() => addLog('segmentStart')}
				onLoad={() => addLog('load')}
			/>
		</Fragment>
	 );
}

export default Mouse;