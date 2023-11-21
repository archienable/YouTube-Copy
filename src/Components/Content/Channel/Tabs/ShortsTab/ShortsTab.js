import React, {useEffect, useState} from 'react';
import style from './ShortsTab.module.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import YouTube from 'react-youtube';

const ShortsTab = () => {

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

	// console.log('channelVideos', channelVideos)

	useEffect( () => {
		channelVideosApi()
	}, [channelVideosApi])

	const opts = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div className={style.shortsTabContainer}>
			<div className={style.shortsTabContent}>
				{channelVideos.map((shorts) => {
					return (
						<div className={style.shortsTabItem} key={`shortsTab-${shorts.id.videoId}`}>
							<div className={style.shortsTabPicture} style={{backgroundImage: `url(${shorts.snippet.thumbnails.default.url})`}}></div>
							{/*<YouTube*/}
							{/*	className={style.channelShortsPlayerYouTube}*/}
							{/*	videoId={shorts.id.videoId}*/}
							{/*	opts={opts}*/}
							{/*/>*/}
							<div className={style.shortsTabTitle}>{shorts.snippet.title}</div>
						 </div>
					)
				})}
			</div>
		</div>
	);
};

export default ShortsTab;



{/*<YouTube*/}
{/*	className={style.channelVideoPlayerYouTube}*/}
{/*	videoId={video.id.videoId}*/}
{/*	opts={opts}*/}
{/*/>*/}