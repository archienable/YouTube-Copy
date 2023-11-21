import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import style from './VideoDetails.module.css'
import axios from "axios";
import RightBlock from "./RightBlock/RightBlock";
import {NavLink, useParams} from "react-router-dom";
import Button from "../InputGroup/Button/Button";

const VideoDetails = () => {

	const { videoId } = useParams()
	const [videoDetails, setVideoDetails] = useState([])
	const [videoComments, setVideoComments] = useState([])
	const [showMore, setShowMore] = useState(false)

	const video = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/videos',
			params: {
				part: 'contentDetails,snippet,statistics',
				id: videoId
			},
			headers: {
				'X-RapidAPI-Key': 'f33caeeaecmsh63af1169a0d08e7p1b2b7ajsna6facd514219',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			// console.log(response.data);
			setVideoDetails(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	// console.log('videoDetails', videoDetails)

	const VideoComments = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
			params: {
				part: 'snippet',
				videoId: videoId,
				maxResults: '100'
			},
			headers: {
				'X-RapidAPI-Key': 'f33caeeaecmsh63af1169a0d08e7p1b2b7ajsna6facd514219',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			// console.log(response.data);
			setVideoComments(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	// console.log('videoComments', videoComments)

	useEffect( () => {
		video()
		VideoComments()
	}, [videoId])

	const opts = {
		height: '720',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const func = (total) => {
		if (total > 1000000000) {
			return Math.abs(Number((total / 1000000000).toFixed(1))) + 'B'
		} else if (total > 1000000) {
			return Math.abs(Number((total / 1000000).toFixed(1))) + 'M'
		} else if (total > 1000) {
			return Math.abs(Number((total / 1000).toFixed(1))) + 'K'
		}
		// console.log('total', total)
		return total
	}



	return (
		<div className={style.videoDetailsContainer}>
			{videoDetails.map((detail) => {
				return (
					<div key={`detail-${detail.id}`}>
						<div className={style.videoDetailsLeftBlock}>
							<YouTube
								className={style.videoDetailsPlayerYouTube}
								videoId={detail.id}
								opts={opts}
							/>
							<div className={style.detailInfo}>
								<div className={style.detailTitle}>
									{detail.snippet.title}
								</div>
								<div className={style.detailChannelInfo}>
									<div className={style.channelInfo}>
										<NavLink to={`/channel/${detail.snippet.channelId}`} className={style.logoChannel}>
											AK
										</NavLink>
										<div>
											<NavLink to={`/channel/${detail.snippet.channelId}`} className={style.channelTitle}>
												{detail.snippet.channelTitle}
											</NavLink>
											{/*<div className={style.channelLike}>*/}
											{/*	like*/}
											{/*	{func(detail.statistics.likeCount)}*/}
											{/*</div>*/}
										</div>
									</div>
									<div className={style.videoInfo}>
										<div className={style.videoInfoViews}>
											{func(detail.statistics.viewCount)} views
										</div>
										{
											!!(detail.snippet.tags && detail.snippet.tags.length > 0) && (
												<div>
													#{detail.snippet.tags[0]} #{detail.snippet.tags[1]}
												</div>
											)
										}
										<div className={style.videoInfoDescription}>
											<div className={`${style.videoInfoDescriptionText} ${!showMore && style.showMoreSuccess}`}>
												{detail.snippet.description}
												{showMore &&
													<Button onClick={() => setShowMore(!showMore)} className={style.btnShowLess}>Show less</Button>
												}
											</div>
											<div className={style.videoInfoDescriptionShowMore}>
												{!showMore &&
												<Button onClick={() => setShowMore(!showMore)} className={style.btnShowMore}>...more</Button>
												}
											</div>
										</div>
									</div>
									<div className={style.videoComments}>
										{func(detail.statistics.commentCount)} Comments
									</div>
									{
										!!(videoComments && videoComments.length > 0) && (
											<div className={style.videoCommentContainer}>
												{videoComments.map((comment) => {
													return (
														<div className={style.commentBlock} key={`comment-${comment.id}`}>
															<div className={style.commentImage}
																	 style={{backgroundImage: `url(${comment.snippet.topLevelComment.snippet.authorProfileImageUrl})`}}
															>

															</div>
															<div className={style.commentContent}>
																<div className={style.commentDisplayName}>
																	@{comment.snippet.topLevelComment.snippet.authorDisplayName}
																</div>
																<div className={style.commentTextOriginal}>
																	{comment.snippet.topLevelComment.snippet.textOriginal}
																</div>
															</div>
														</div>
													)
												})}
											</div>
										)
									}
								</div>
							</div>
						</div>
						<div className={style.videoDetailsRightBlock}>
							<RightBlock />
						</div>
					</div>
				)
			})}
		</div>
	);
};

export default VideoDetails;