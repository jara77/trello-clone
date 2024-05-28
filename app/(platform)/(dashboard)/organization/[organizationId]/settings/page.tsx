import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
	return (
		<div className="w-full">
			<OrganizationProfile
				appearance={{
					elements: {
						rootBox: {
							boxShadow: "none",
							width: "100%",
							height: "50%",
						},
						card: {
							boxShadow: "none",
							width: "100%",
							height: "50%",
						}
					}
				}}
			/>
		</div>
	);
}

export default SettingsPage;