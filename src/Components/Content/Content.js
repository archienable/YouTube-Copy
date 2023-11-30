import React, {useState, useEffect} from 'react';
import axios from 'axios';
import style from './Content.module.css'
import {NavLink} from "react-router-dom";
import Moment from 'react-moment';

const Content = () => {

	const [allVideo, setAllVideo] = useState([])

	const video = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/search',
			params: {
				q: 'music',
				part: 'snippet,id',
				regionCode: 'US',
				maxResults: '50',
				order: 'date'
			},
			headers: {
				'X-RapidAPI-Key': 'f33caeeaecmsh63af1169a0d08e7p1b2b7ajsna6facd514219',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			// console.log(response.data);
			setAllVideo(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}


	// console.log('all', allVideo)


	useEffect( () => {
		video()
	}, [])

	return (
		<div className={style.contentContainer}>
			{allVideo.map((video) => {
				// console.log('video', video)
				return (
					<NavLink to={`/video/${video.id.videoId}`} key={`video-${video.id.videoId}`} className={style.contentItem}>
						<div className={style.contentVideo}>
							<div className={style.contentVideoItem} style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}}></div>
						</div>
						<div className={style.contentInfo}>
							<div className={style.leftBlock}>
								<div className={style.logoChannel}>
									AK
								</div>
							</div>
							<div className={style.rightBlock}>
								<div className={style.contentDescription}>
									{video.snippet.title}
								</div>
								<div className={style.channelInfo}>
									<NavLink to={`/channel/${video.snippet.channelId}`} className={style.contentChannelTitle} onClick={event => event.stopPropagation()}>
										{video.snippet.channelTitle}
									</NavLink>
									<div className={style.contentDate}>
										<Moment fromNow>
											{video.snippet.publishTime}
										</Moment>
									</div>
								</div>
							</div>
						</div>
					</NavLink>
				)
			})}
		</div>
	);
};

export default Content;