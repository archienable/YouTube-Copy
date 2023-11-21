import React from 'react';
import style from './SideBar.module.css'
import {categories} from "./utils/categories";
import Home from "../../icons/sideBarIcons/home";
import Explore from "../../icons/sideBarIcons/explore-fill";
import Subscriptions from "../../icons/sideBarIcons/subscriptions-fill";
import Library from "../../icons/sideBarIcons/library-fill";
import Button from "../InputGroup/Button/Button";
import {NavLink} from "react-router-dom";


const SideBar = ({ isActiveBurger }) => {

	let sideBarClass = `${style.sideBarContainer} `
	if (isActiveBurger) {
		sideBarClass += style.sideBarSmallContainer
	}

	if (isActiveBurger) {
		return (
			<div className={sideBarClass}>
				<div className={style.sideBarSmall}>
						<NavLink to='/' className={style.sideBarSmallItem}>
							<Home />
							Home
						</NavLink>
					<Button className={style.sideBarSmallItem}>
						<Explore />
						Explore
					</Button>
					<Button className={style.sideBarSmallItem}>
						<Subscriptions />
						Subscriptions
					</Button>
					<Button className={style.sideBarSmallItem}>
						<Library />
						Library
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={sideBarClass}>
			<div>
				{categories.map((item, categoriesIndex) => {
					return (
						<div className={style.sideBarBlock} key={`categories-${categoriesIndex}`}>
							{
								item.header ? (
									<div className={style.sideBarHeader}>
										{item.header}
									</div>
								) : null
							}
							{item.links.map((linkItem, linkIndex) => {
								return (
									<NavLink to={linkItem.link || '/'}
													 className={style.sideBarItem}
													 key={`categories-${categoriesIndex}-link-${linkIndex}`}>
										{linkItem.icon}
										{linkItem.name}
									</NavLink>
								)
							})}
						</div>
					)
				})}
				<div className={style.sideBarFooter}>
					<div className={style.sideBarFooterBlock}>
						About press Copyright
						Contact us Creators
						Advertise Developers
					</div>
					<div className={style.sideBarFooterBlock}>
						Terms Privacy Policy & Safety
						How YouTube works
						Test new features
					</div>
					<div className={style.sideBarFooterBlock}>
						© 2023 Artem Kozhanov
					</div>
				</div>
			</div>
		</div>
	)
};

export default SideBar;
