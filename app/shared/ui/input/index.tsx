import style from './style.module.css';
import Image from 'next/image';
import React from 'react';
import VoiceIcon from '../../assets/icons/mic.png';

const Input = () => {
	return (
		<div className={style.container}>
			<div>
				<Image className={style.searchIcon} src={VoiceIcon} alt='' />
			</div>
			<input className={style.input} type='text' />
		</div>
	);
};

export default Input;
