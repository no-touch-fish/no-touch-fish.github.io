import type { Education, Publication } from '@/types/cv'

export const education: Education[] = [
	{
		school: 'University of Illinois Urbana-Champaign',
		time: 'Aug. 2025 – May 2027 (expected)',
		degree: 'M.S. in Electrical and Computer Engineering',
		description: 'GPA: 3.91/4.00. Relevant courses: Reinforcement Learning (ECE586), Natural Language Processing (CS546), Computer Vision (CS543), and Graph Machine Learning (CS598).',
	},
	{
		school: 'Zhejiang University and University of Illinois Urbana-Champaign',
		time: 'Aug. 2021 – Jun. 2025',
		degree: 'Dual bachelor’s degrees in Electrical and Computer Engineering',
		description: 'GPA: 3.96/4.00. Relevant courses: Computer Systems Engineering (ECE391), Data Structures (CS225), Artificial Intelligence (CS440), Algorithms (CS374), Machine Learning (CS446), and Applied Parallel Programming (ECE408).',
	},
]

export const publications: Publication[] = [
	{
		title: 'SAFTAC: Simulation-Augmented Fine-Tuning of Open-Source LLMs for Analog Circuit Design',
		authors: 'Junsheng Huang*, Yifan Sun*, Zhouer Zhang*, Ning Wei, Yening Liu, Michael Molter, Pavan Kumar Hanumolu, Elyse Rosenbaum, Bin Hu, Huan Zhang',
		journal: 'NeurIPS 2026 Main Conference',
		abstract: 'We study simulation-grounded post-training of open-source LLMs for specification-conditioned analog circuit design.',
	},
	{
		title: 'MAC-Tuning: LLM Multi-Compositional Problem Reasoning with Enhanced Knowledge Boundary Awareness',
		authors: 'Junsheng Huang, Zhitao He, Yuchen Huang, Sandeep Polisetty, Qingyun Wang, Yi R. Fung',
		journal: 'EMNLP 2025 Main Conference',
		link: 'https://arxiv.org/abs/2504.21773',
		abstract: 'We study hallucination detection and reasoning when language models answer multiple compositional questions together. MAC-Tuning improves average precision by up to 25% over baselines while reducing confidence calibration error.',
	},
	{
		title: 'Stochastic Monkeys at Play: Random Augmentations Cheaply Break LLM Safety Alignment',
		authors: 'Jason Vega, Junsheng Huang, Gaokai Zhang, Hangoo Kang, Minjia Zhang, Gagandeep Singh',
		journal: 'arXiv preprint',
		time: '2024',
		link: 'https://arxiv.org/abs/2411.02785',
		abstract: 'We evaluate how simple random prompt augmentations can weaken safety alignment in large language models.',
	},
	{
		title: 'From Predict to Generate: A Cross-Layer Survey of Generative AI for IC Design and Manufacturing',
		authors: 'W. Yan, Z. Deng, M. Molter, R. Krishna, N. Rouf, S. S. Sofla, E. Thieme, S. Chatterjee, P. P. P. Linn, Y. Wen, X. Xiao, Z. Zhang, Junsheng Huang, Y. Liu, Y. Zhou, P. Franzon, M. Swaminathan, E. Rosenbaum, A. Aysu',
		journal: 'Preprint',
	},
]
