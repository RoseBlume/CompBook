// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://roseblume.github.io/",
	base: "CompBook",
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: "Overview",
					slug: "overview"
				},
				{
					label: 'Cisco Networking 1',
					collapsed: true,
					items: [
						{
							label: "Modern Networking",
							autogenerate: {directory: "Cisco-Networking-1/Networking-Today"},
							collapsed: true,
						},
						{
							label: "Basic Switch and End Device Configuration",
							autogenerate: {directory: "Cisco-Networking-1/Basic-Switch-And-End-Device-Config"},
							collapsed: true,
						},
						{
							label: "Protocols and Models",
							autogenerate: {directory: "Cisco-Networking-1/Protocols-And-Models"},
							collapsed: true,
						},
						{
							label: "Physical Layer",
							autogenerate: {directory: "Cisco-Networking-1/Physical-Layer"},
							collapsed: true,
						},
						{
							label: "Number Systems",
							autogenerate: {directory: "Cisco-Networking-1/Number-Systems"},
							collapsed: true,
						},
						{
							label: "Data Link Layer",
							autogenerate: {directory: "Cisco-Networking-1/Data-Link-Layer"},
							collapsed: true,
						},
						{
							label: "Ethernet Switching",
							autogenerate: {directory: "Cisco-Networking-1/Ethernet-Switching"},
							collapsed: true,
						},
						{
							label: "Network Layer",
							autogenerate: {directory: "Cisco-Networking-1/Network-Layer"},
							collapsed: true,
						},
						{
							label: "Address Resolution",
							autogenerate: {directory: "Cisco-Networking-1/Address-Resolution"},
							collapsed: true,
						},
						{
							label: "Basic Router Configuration",
							autogenerate: {directory: "Cisco-Networking-1/Basic-Router-Configuration"},
							collapsed: true,
						},
						{
							label: "IPv4 Addressing",
							autogenerate: {directory: "Cisco-Networking-1/IPv4-Addressing"},
							collapsed: true,
						},
						{
							label: "IPv6 Addressing",
							autogenerate: {directory: "Cisco-Networking-1/IPv6-Addressing"},
							collapsed: true,
						},
						{
							label: "ICMP",
							autogenerate: {directory: "Cisco-Networking-1/ICMP"},
							collapsed: true,
						},
						{
							label: "Transport Layer",
							autogenerate: {directory: "Cisco-Networking-1/Transport-Layer"},
							collapsed: true,
						},
						{
							label: "Application Layer",
							autogenerate: {directory: "Cisco-Networking-1/Application-Layer"},
							collapsed: true,
						},
						{
							label: "Network Security Fundamentals",
							autogenerate: {directory: "Cisco-Networking-1/Network-Security-Fundamentals"},
							collapsed: true,
						},
						{
							label: "Building a Small Network",
							autogenerate: {directory: "Cisco-Networking-1/Build-a-Small-Network"},
							collapsed: true,
						}
					]
				},
				{
					label: 'It Essentials 1',
					collapsed: true,
					items: [
						{
							label: "Introduction to PC Hardware",
							autogenerate: {directory: "It-Essentials-1/Introduction-To-PC-Hardware"},
							collapsed: true,
						},
						{
							label: "PC Assembly",
							autogenerate: {directory: "It-Essentials-1/PC-Assembly"},
						},
						{
							label: "Advanced Computer Hardware",
							autogenerate: {directory: "It-Essentials-1/Advanced-Computer-Hardware"},
							collapsed: true,
						},
						{
							label: "Preventive Maintenance and Troubleshooting",
							autogenerate: {directory: "It-Essentials-1/Preventive-Maintenance-and-Troubleshooting"},
							collapsed: true,
						},
						{
							label: "Networking Concepts",
							autogenerate: {directory: "It-Essentials-1/Networking-Concepts"},
							collapsed: true,
						},
						{
							label: "Applied Networking",
							autogenerate: {directory: "It-Essentials-1/Applied-Networking"},
							collapsed: true,
						},
						{
							label: "Laptops and Other Mobile Devices",
							autogenerate: {directory: "It-Essentials-1/Laptops-and-Other-Mobile-Devices"},
							collapsed: true,
						},
						{
							label: "Printers",
							autogenerate: {directory: "It-Essentials-1/Printers"},
							collapsed: true,
						},
						{
							label: "Virtualization and Cloud Computing",
							autogenerate: {directory: "It-Essentials-1/Virtualization-and-Cloud-Computing"},
							collapsed: true,
						},
						{
							label: "Windows Installation",
							autogenerate: {directory: "It-Essentials-1/Windows-Installation"},
							collapsed: true,
						},
						{
							label: "Windows Configuration",
							autogenerate: {directory: "It-Essentials-1/Windows-Configuration"},
							collapsed: true,
						},
						{
							label: "Mobile Linux and macOS Operating Systems",
							autogenerate: {directory: "It-Essentials-1/Mobile-Linux-and-macOS-Operating-Systems"},
							collapsed: true,
						},
						{
							label: "Security",
							autogenerate: {directory: "It-Essentials-1/Security"},
							collapsed: true,
						},
						{
							label: "The IT Professional",
							autogenerate: {directory: "It-Essentials-1/The-IT-Professional"},
							collapsed: true,
						}
					]
				},
				{
					label: 'Guides',
					items: [
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
