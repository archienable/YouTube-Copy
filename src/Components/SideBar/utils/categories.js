import React from 'react';
import Home from '../../../icons/sideBarIcons/home'
import Explore from '../../../icons/sideBarIcons/explore-fill'
import Gaming from "../../../icons/sideBarIcons/gaming-fill";
import History from "../../../icons/sideBarIcons/history-fill";
import Library from "../../../icons/sideBarIcons/library-fill";
import Liked from "../../../icons/sideBarIcons/liked-fill";
import Live from "../../../icons/sideBarIcons/live-fill";
import Premium from "../../../icons/sideBarIcons/premium-fill";
import Report from "../../../icons/sideBarIcons/report-fill";
import Sports from "../../../icons/sideBarIcons/sports-fill";
import Subscriptions from "../../../icons/sideBarIcons/subscriptions-fill";
import WatchLater from "../../../icons/sideBarIcons/watchLater-fill";
import YourVideos from "../../../icons/sideBarIcons/yourVideos";
import Feedback from "../../../icons/sideBarIcons/feedback";
import Help from "../../../icons/sideBarIcons/help";
import Settings from "../../../icons/sideBarIcons/settings";
import LogoSub from "../../../icons/sideBarIcons/LogoSub/LogoSub";

export const categories = [

	{
		header: '',
		links: [
			{ name: 'Home', icon: < Home />, type: 'home' },
			{ name: 'Explore', icon: <Explore />, type: 'category' },
			{ name: 'Subscriptions', icon: <Subscriptions />, type: 'category' },
		],
	},
	{
		header: '',
		links: [
			{ name: 'Library', icon: <Library />, type: 'category' },
			{ name: 'History', icon: <History />, type: 'category' },
			{ name: 'Your Videos', icon: <YourVideos />, type: 'category' },
			{ name: 'Watch Later', icon: <WatchLater />, type: 'category' },
			{ name: 'Liked Videos', icon: <Liked />, type: 'category', }
		]
	},
	{ header: 'SUBSCRIPTIONS',
		links: [
 			{ name: 'Wilsacom', icon: <LogoSub />, link: '/channel/UCt7sv-NKh44rHAEb-qCCxvA' },
			{ name: 'MrBeast', icon: <LogoSub />, link: '/channel/UCX6OQ3DkcsbYNE6H8uQQuVA'},
			{ name: '2DROTS', icon: <LogoSub />, link: '/channel/UCOIRN19VunfPaW7ZfmOKeoQ' },
			{ name: 'Плюшки', icon: <LogoSub />, link: '/channel/UCPn3K92O2tkAjzu6mlMPtvA' },
			{ name: 'ТОПЛЕС', icon: <LogoSub />, link: '/channel/UC2Ru64PHqW4FxoP0xhQRvJg' },
			{ name: 'ВПИСКА', icon: <LogoSub />, link: '/channel/UCj7bSQWlq2O4lhGxGll5SUA' },
			{ name: 'Dude Perfect', icon: <LogoSub />, link: '/channel/UCRijo3ddMTht_IHyNSNXpNQ' }
		]
	},
	{ header: 'MORE FROM YOUTUBE',
		links: [
			{ name: 'Youtube Premium', icon: <Premium />, type: 'menu' },
			{ name: 'Gaming', icon: <Gaming />, type: 'menu' },
			{ name: 'Live', icon: <Live />, type: 'menu' },
			{ name: 'Sports', icon: <Sports />, type: 'menu' },
		]
	},
	{
		header: '',
		links: [
			{ name: 'Settings', icon: <Settings />, type: 'menu' },
			{ name: 'Report history', icon: <Report />, type: 'menu' },
			{ name: 'Help', icon: <Help />, type: 'menu' },
			{ name: 'Send feedback', icon: <Feedback />, type: 'menu' },
		]
	},
	// {
	// 	header: '',
	//
	// }
];
