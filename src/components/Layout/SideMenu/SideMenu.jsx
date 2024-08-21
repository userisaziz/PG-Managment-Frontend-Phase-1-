import React, { useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowUp, Logout } from '../../../assets/icon';
import { Typography } from '../../Common';
import { isActiveRoute } from '../../../utils';
import './SideMenu.scss';
import { SideMenuContent } from '../../../db';

const SideMenu = ({ className }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const menu = useMemo(() => SideMenuContent(), []);

	const [activeSubMenu, setActiveSubMenu] = useState(null);
	const [submenuHeight, setSubmenuHeight] = useState(0);

	const handleSubMenuClick = (key, firstSubMenuPath) => {
		setActiveSubMenu(activeSubMenu === key ? null : key);
		if (activeSubMenu === key) {
			setSubmenuHeight(0);
		} else {
			setSubmenuHeight(document.getElementById(`submenu-${key}`).scrollHeight);
			navigate(firstSubMenuPath);
		}
	};

	return (
		<aside className={`SideMenu ${className}`}>
			<section className="SideMenu--Body">
				{menu?.map(({ key, path, title, icon, subMenu }) => (
					<div key={key}>
						<div
							className={`SideMenu--Item ${isActiveRoute(path, location.pathname) || activeSubMenu === key ? 'SideMenu--Active' : 'SideMenu--Inactive'}`}
							onClick={() =>
								handleSubMenuClick(key, subMenu && subMenu.length > 0 ? subMenu[0].path : null)
							}
						>
							<div className="Icon">{icon}</div>
							<Typography variant="h1" className="SideMenu--ItemText">
								{title}
							</Typography>
							{subMenu.length > 0 && (
								<div className="SideMenu--Arrow">
									{activeSubMenu === key ? <ArrowUp /> : <ArrowDown />}
								</div>
							)}
						</div>
						<div
							id={`submenu-${key}`}
							className={`SubMenu`}
							style={{
								maxHeight: activeSubMenu === key ? submenuHeight : 0,
								overflow: 'hidden',
								transition: 'max-height 0.3s ease',
							}}
						>
							{subMenu &&
								subMenu.map(({ title: subMenuTitle, path: subMenuPath, subMenuKey }) => (
									<NavLink
										key={subMenuKey}
										to={subMenuPath}
										className={`SubMenu--Item ${isActiveRoute(subMenuPath, location.pathname) || activeSubMenu === subMenuKey ? 'SubMenu--Active' : 'SubMenu--Inactive'}`}
										draggable={false}
										end
										activeClassName="SubMenu--Active"
									>
										{subMenuTitle}
									</NavLink>
								))}
						</div>
					</div>
				))}
			</section>

			<section className="SideMenu--Logout">
				<div className="SideMenu--Item">
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
