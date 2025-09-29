// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Cisco Networking 1',
					collapsed: true,
					items: [
						{
							label: "Modern Networking",
							autogenerate: {directory: "Cisco-Networking-1/Networking-Today"}
						},
						{
							label: "Basic Switch and End Device Configuration",
							autogenerate: {directory: "Cisco-Networking-1/Basic-Switch-And-End_Device-Config"}
						},
						{
							label: "Protocols and Models",
							autogenerate: {directory: "Cisco-Networking-1/Protocols-And-Models"}
						},
						{
							label: "Physical Layer",
							autogenerate: {directory: "Cisco-Networking-1/Physical-Layer"}
						},
						{
							label: "Number Systems",
							autogenerate: {directory: "Cisco-Networking-1/Number-Systems"}
						},
						{
							label: "Data Link Layer",
							autogenerate: {directory: "Cisco-Networking-1/Data-Link-Layer"}
						},
						{
							label: "Ethernet Switching",
							autogenerate: {directory: "Cisco-Networking-1/Ethernet-Switching"}
						},
						{
							label: "Network Layer",
							autogenerate: {directory: "Cisco-Networking-1/Network-Layer"}
						},
						{
							label: "Address Resolution",
							autogenerate: {directory: "Cisco-Networking-1/Address-Resolution"}
						},
						{
							label: "Basic Router Configuration",
							autogenerate: {directory: "Cisco-Networking-1/Basic-Router-Configuration"}
						},
						{
							label: "IPv4 Addressing",
							autogenerate: {directory: "Cisco-Networking-1/IPv4-Addressing"}
						},
						{
							label: "IPv6 Addressing",
							autogenerate: {directory: "Cisco-Networking-1/IPv6-Addressing"}
						},
						{
							label: "ICMP",
							autogenerate: {directory: "Cisco-Networking-1/ICMP"}
						},
						{
							label: "Transport Layer",
							autogenerate: {directory: "Cisco-Networking-1/Transport-Layer"}
						},
						{
							label: "Application Layer",
							autogenerate: {directory: "Cisco-Networking-1/Application-Layer"}
						},
						{
							label: "Network Security Fundamentals",
							autogenerate: {directory: "Cisco-Networking-1/Network-Security-Fundamentals"}
						},
						{
							label: "Building a Small Network",
							autogenerate: {directory: "Cisco-Networking-1/Build-a-Small-Network"}
						}
					]
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
