import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
	Button,
	Link,
	Menu as ChakraMenu,
	MenuButton as ChakraMenuButton,
	MenuList,
	MenuGroup,
	MenuItem,
	Text,
	chakra,
	Icon,
} from "@chakra-ui/react";
import { useState } from "react";
export interface MenuItf {
	children: any;
	href: string;
	icon?: any;
	disabled?: boolean;
	disabledTooltip?: string;
}
interface MenuButtonProps {
	menus: MenuItf[];
	text?: string;
	mainGroupTitle?: string;
	icon?: any;
}
const MenuButton = ({ menus, text, mainGroupTitle, icon }: MenuButtonProps) => {
	const renderMenus = (menusToRender: MenuItf[]) => {

		return menusToRender.map((menu, index: number) => {
			const { children, icon: menuItemIcon, href } = menu;
			return (
				<MenuItem
					// eslint-disable-next-line react/no-array-index-key
					key={`link-${href}-${index}`}
					cursor="pointer"
					href={href}
					color='black'
					as={Flex}
					_hover={{ opacity: "0.9 !important", transform: "translateY(-2px)" }}
				>
					{children}
				</MenuItem >
			);
		});
	};

	return (
		<ChakraMenu strategy="fixed" autoSelect={false} isLazy id="more-menu-id">
			{
				text ? (
					<ChakraMenuButton p={"25px 30px"} as={Button} backgroundImage={'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62a94274b999bfc0dfe13f91_gradient-stats.jpg'} backgroundSize='cover' >
						<Text fontSize="15px" as="span" color='black' fontWeight={'500'}>
							{text}
						</Text>
					</ChakraMenuButton >
				) : (
					<ChakraMenuButton as={Button} />
				)
			}
			<MenuList backgroundSize={"cover"} marginLeft="10px" backgroundImage={'https://assets-global.website-files.com/62535c6262b90afd768b9b26/62a94274b999bfc0dfe13f91_gradient-stats.jpg'}>
				< MenuGroup title={mainGroupTitle} color={"black"} >{renderMenus(menus)}</MenuGroup>
			</MenuList>
		</ChakraMenu >
	);
};

export default MenuButton;
