"use client"

import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import {
	Activity,
	CreditCard,
	Layout,
	Settings
} from "lucide-react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type organization = {
	id: string;
	slug: string;
	imageUrl: string;
	name: string;
};

interface NavItemProps {
	isExpanded: boolean;
	isActive: boolean;
	organization: any;
	onExpand: (id: string) => void;
}

export const NavItem = ({
	isExpanded,
	isActive,
	organization,
	onExpand,
}: NavItemProps) => {

	const router = useRouter();
	const pathname = usePathname();

	const routes = [
		{
			label: "Boards",
			icon: <Layout className="h4 w-4 mr-2" />,
			href: `/organization/${organization.id}/`,
		},
		{
			label: "Activity",
			icon: <Activity className="h4 w-4 mr-2" />,
			href: `/organization/${organization.id}/activity`,
		},
		{
			label: "Settings",
			icon: <Settings className="h4 w-4 mr-2" />,
			href: `/organization/${organization.id}/settings`,
		},
		{
			label: "Billing",
			icon: <CreditCard className="h4 w-4 mr-2" />,
			href: `/organization/${organization.id}/billing`,
		},
	];

	const onClick = (href: string) => {
		router.push(href);
	};

	return (
		<AccordionItem
			value={organization.id}
			className="border-noce"
		>
			<AccordionTrigger
				onClick={() => onExpand(organization.id)}
				className={cn(
					"flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transitiontext-start no-underline hover:no-underline",
					isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
				)}
			>
				<div className="flex items-center gap-x-2">
					<div className="w-7 h-7 relative">
						<Image
							fill
							src={organization.imageUrl}
							alt="Organization"
							className="rounded-sm object-cover"
						/>
					</div>
					<span className="font-medim text-sm">
						{organization.name}
					</span>
				</div>
			</AccordionTrigger>
			<AccordionContent className="pt-1 bg-white text-neutral-700">
				{routes.map((route) => (
					<Button
						key={route.href}
						size="sm"
						onClick={() => onClick(route.href)}
						className={cn(
							"w-full hover:bg-gray-100 bg-white text-neutral-700 font-normal justify-start pl-10 mb-1",
							pathname === route.href && "bg-sky-100 text-sky-700"
						)}
					>
						{route.icon}
						{route.label}
					</Button>
				))}
			</AccordionContent>
		</AccordionItem>
	);
}

NavItem.Skeleton = function SkeletonNavItem() {
	return (
		<div className="flex items-center gap-x-2">
			<div className="w-10 h-10 relative shrink-0">
				<Skeleton className="h-full w-full absolute" />
			</div>
			<Skeleton className="h-10 w-full" />
		</div>
	);
}