import React, {useEffect, useState} from 'react';
import style from './SearchResults.module.css'
import axios from "axios";
import {useParams, useLocation, NavLink} from 'react-router-dom';
import Moment from "react-moment";

const SearchResults = () => {

	const [searchResults, setSearchResults] = useState([])


		const aaa = useParams();

		const location = useLocation();
		const searchParams = new URLSearchParams(location.search);
		const queryParam = searchParams.get('queryParam');


		const bbb = Object.fromEntries(searchParams.entries())

		const SearchQuery = async () => {
			const options = {
				method: 'GET',
				url: 'https://youtube-v31.p.rapidapi.com/search',
				params: {
					q: bbb.search_query,
					part: 'snippet, id',
					regionCode: 'US',
					maxResults: '25',
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
			setSearchResults(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		SearchQuery()
	}, [SearchQuery]);

	// console.log('searchResults', searchResults)


	return (
		<div className={style.searchResultsContainer}>
			{searchResults.map((result) => {
				return (
					<div className={style.searchResultsItem}>
						<NavLink to={`/video/${result.id.videoId}`} className={style.searchResultsItemVideo} style={{backgroundImage: `url(${result.snippet.thumbnails.medium.url})`}}>

						</NavLink>
						<div className={style.searchResultsItemVideoInfo}>
							<NavLink to={`/video/${result.id.videoId}`} className={style.searchResultsItemTitle}>
								{result.snippet.title}
							</NavLink>
							<div className={style.searchResultsItemDate}>
								<Moment fromNow>
									{result.snippet.publishTime}
								</Moment>
							</div>
							<div className={style.searchResultsItemChannelInfo}>
								<div className={style.searchResultsItemChannelLogo}>

								</div>
								<NavLink to={`/channel/${result.snippet.channelId}`} className={style.searchResultsItemChannelTitle}>
									{result.snippet.channelTitle}
								</NavLink>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
};

export default SearchResults;