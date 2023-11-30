import React, {useEffect, useState} from 'react';
import style from './RightBlock.module.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import Moment from 'react-moment';

const RightBlock = () => {

	const [rightBlock, setRightBlock] = useState([])

	const SuggestedVideos = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/search',
			params: {
				relatedToVideoId: '7ghhRHRP6t4',
				part: 'id,snippet',
				type: 'video',
				maxResults: '50'
			},
			headers: {
				'X-RapidAPI-Key': 'f33caeeaecmsh63af1169a0d08e7p1b2b7ajsna6facd514219',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			// console.log(response.data);
			setRightBlock(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	// console.log('rightBlock', rightBlock)


	useEffect( () => {
		SuggestedVideos()
	}, [])


	return (
		<div className={style.rightBlockContainer}>
			{rightBlock.map((item) => {
				return (
					<NavLink className={style.rightBlockItem} to={`/video/${item.id.videoId}`} key={`rightBlockVideo-${item.id.videoId}`}>
						<div className={style.rightBlockVideo} style={{backgroundImage: `url(${item.snippet.thumbnails.default.url})`}}>

						</div>
						<div className={style.rightBlockVideoText}>
							<div className={style.rightBlockVideoTitle}>
								{item.snippet.title}
							</div>
							<NavLink to={`/channel/${item.snippet.channelId}`} className={style.rightBlockVideoChannelTitle}>
								{item.snippet.channelTitle}
							</NavLink>
							<div className={style.rightBlockVideoPublishTime}>
								<Moment fromNow>
								{item.snippet.publishTime}
								</Moment>
							</div>
						</div>
					</NavLink>
				)
			})}
		</div>
	);
};

export default RightBlock;