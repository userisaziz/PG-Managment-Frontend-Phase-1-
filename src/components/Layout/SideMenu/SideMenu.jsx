import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { NavLink, useLocation } from 'react-router-dom';

import { Logout } from '../../../assets/icon';
import { pathname } from '../../../router/pathname';
import { Typography } from '../../Common';
import { isActiveRoute } from '../../../utils';

import './SideMenu.scss';
import AdminPanelLayout from '../../../layouts/AdminPanelLayout/AdminPanelLayout';
import { SideMenuContent } from '../../../db';

const SideMenu = (props) => {
	const { className } = props;
	const navigateTo = useNavigate();
	const location = useLocation();

	const menu = SideMenuContent();

	const customClassName = `SideMenu ${className}`;

	const isActiveTab = (isActive, path) => {
		if (isActive) {
			return 'SideMenu--Active';
		} else {
			return isActiveRoute(path, location.pathname) ? 'SideMenu--Active' : 'SideMenu--Inactive';
		}
	};

	const handleLogout = () => {
		localStorage.clear();
		navigateTo(pathname.LOGIN);
	};

	return (
		<aside className={customClassName}>
			<section className="SideMenu--Body">
				{menu?.map(({ key, path, title, icon }) => {
					return (
						<NavLink
							to={path}
							className={({ isActive }) => isActiveTab(isActive, path)}
							key={key}
							draggable={false}
							end
						>
							<div className="SideMenu--Item">
								<div className="Icon">{icon}</div>
								<Typography variant="h1" className="SideMenu--ItemText">
									{title}
								</Typography>
							</div>
						</NavLink>
					);
				})}
			</section>

			<section className="SideMenu--Logout">
				<div className="SideMenu--Item " onClick={handleLogout}>
					<div className="Icon">
						<Logout color="#878787" />
					</div>
					<Typography variant="h1" className="SideMenu--ItemText">
						Sign Out
					</Typography>
				</div>
			</section>
		</aside>
	);
};

export default SideMenu;
