import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import style from './VideosTab.module.css'
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import Moment from "react-moment";

const VideosTab = () => {

	const [channelVideos, setChannelVideos] = useState([])
	const { channelId } = useParams()

	const channelVideosApi = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/search',
			params: {
				channelId,
				part: 'snippet,id',
				order: 'date',
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
			setChannelVideos(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	console.log('channelVideos', channelVideos)

	useEffect( () => {
		channelVideosApi()
	}, [channelVideosApi])

	const opts = {
		width: '305',
		height: '172',
		playerVars: {
			autoplay: 0,
		},
	};

	const channelVideosFilter = channelVideos.filter((video) => video.id.videoId)

	return (
		<div className={style.videosTabContainer}>
			<div className={style.videosTabContent}>
				{channelVideosFilter.map((video) => {
					return (
						<NavLink to={`/video/${video.id.videoId}`} className={style.videosTabItem} key={`videoTab-${video.id.videoId}`}>
							<div className={style.videosTabPicture} style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}}></div>
							{/*<YouTube*/}
							{/*	className={style.channelVideosPlayerYouTube}*/}
							{/*	videoId={video.id.videoId}*/}
							{/*	opts={opts}*/}
							{/*/>*/}
							<div className={style.videosTabInfo}>
								<div className={style.videosTabTitle}>{video.snippet.title}</div>
									<Moment fromNow className={style.videosTabDate}>
										{video.snippet.publishTime}
									</Moment>
							</div>
						</NavLink>
					)
				})}
			</div>
		</div>
	);
};

export default VideosTab;


// <div className={style.tabsContainer}>
// 	<div className={style.tabsContent}>
// 		<div className={style.tabsItem}>
// 			<div className={style.tabs}>Videos</div>
// 			<div className={style.tabsBorder} />
// 		</div>
// 		<div className={style.tabsItem}>
// 			<div className={style.tabs}>Shorts</div>
// 			<div className={style.tabsBorder} />
// 		</div>
// 	</div>
// </div>