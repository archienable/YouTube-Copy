import React, {useEffect, useState} from 'react';
import style from './Channel.module.css'
import axios from "axios";
import Button from "../../InputGroup/Button/Button";
import {useParams} from "react-router-dom";
import VideosTab from "./Tabs/VideosTab/VideosTab";
import ShortsTab from "./Tabs/ShortsTab/ShortsTab";
import 'react-tabs/style/react-tabs.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const Channel = () => {

	const [channelDetails, setChannelDetails] = useState([])
	const [tabIndex, setTabIndex] = useState(0);
	const { channelId } = useParams()

	// console.log('tabIndex', tabIndex)

	const channelApi = async () => {
		const options = {
			method: 'GET',
			url: 'https://youtube-v31.p.rapidapi.com/channels',
			params: {
				part: 'snippet,statistics',
				id: channelId
			},
			headers: {
				'X-RapidAPI-Key': 'f33caeeaecmsh63af1169a0d08e7p1b2b7ajsna6facd514219',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			// console.log(response.data);
			setChannelDetails(response.data.items)
		} catch (error) {
			console.error(error);
		}
	}

	console.log('channelDetails', channelDetails)


	useEffect( () => {
		channelApi()
	}, [channelApi])

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
		<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			<div className={style.channelContainer}>
				{channelDetails.map((channel) => {
					return (
						<div className={style.channelContent} key={`channel-${channel.id.videoId}`}>
							{
								!!channel.brandingSettings.image?.bannerExternalUrl && (
									<div className={style.channelBanner} style={{backgroundImage: `url(${channel.brandingSettings.image.bannerExternalUrl})`}}>

									</div>
								)
							}
							<div className={style.channelInfo}>
								<div className={style.channelLogo} style={{backgroundImage: `url(${channel.snippet.thumbnails.default.url})`}}>

								</div>
								<div className={style.channelProfile}>
									<div className={style.channelProfileHeader}>
										<div className={style.channelProfileTitle}>
											{channel.brandingSettings.channel.title}
										</div>
										<div className={style.channelProfileStatistics}>
											<span>{channel.snippet.customUrl} </span>
											<span>* {func(channel.statistics.subscriberCount)} subscribers </span>
											* {channel.statistics.videoCount} videos
										</div>
										<div className={style.channelProfileDescription}>
											{channel.brandingSettings.channel.description}
										</div>
									</div>
									<Button className={style.btnSub}>
										Subscribe
									</Button>
								</div>
							</div>
					</div>
					)
				})}
				<div className={style.tabsContainer}>
					<TabList className={style.tabsContent}>
							<Tab className={style.tabsItem} selectedClassName={style.tabsBorder}>
								<div className={style.tabs}>
									Videos
								</div>
							</Tab>
							<Tab className={style.tabsItem} selectedClassName={style.tabsBorder}>
								<div className={style.tabs}>
									Shorts
								</div>
							</Tab>
					</TabList>
				</div>
				<TabPanel>
					<VideosTab />
				</TabPanel>
				<TabPanel>
					<ShortsTab />
				</TabPanel>
			</div>
		</Tabs>
	);
};

export default Channel;