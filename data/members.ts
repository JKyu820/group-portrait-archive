import { desktopPositions, mobilePositions } from './portrait-layout'
import type { Placement } from './portrait-layout'

type Profile = {
  trait: string
  value: string
  memory: string
}

type Member = {
  memberId: string
  memberNumber: string
  nickname: string
  avatar: string
  accent: string
  position: Placement
  mobilePosition: Placement
  profile?: Profile
}

// 第六组成员名单。昵称为化名，灵感来自每人自述的「记忆点」；
// 资料来自小组人物卡片（个人特质 / 团队价值 / 别人记住我）。
const roster: ReadonlyArray<{
  nickname: string
  accent: string
  avatar: string
  profile?: Profile
}> = [
  {
    nickname: '稳稳子', accent: '#e8b96a', avatar: '/assets/members/member-001.webp',
    profile: {
      trait: '擅长带动头脑风暴，重视守信沟通，遇到疑问主动提问，减少误会。',
      value: '团队统筹发起者，源源不断输出创意点子，乐于分享 AI 网页工具，带领组员集思广益。',
      memory: '学得快，成品稳',
    },
  },
  {
    nickname: '冲冲', accent: '#e0907c', avatar: '/assets/members/member-002.webp',
    profile: {
      trait: '敢想敢做；愿意快速输出想法，有不同意见会附上理由及时沟通。',
      value: '快速产出初稿，推动团队先产出、再优化，源源不断提供新思路。',
      memory: '行动力强',
    },
  },
  {
    nickname: '跨界侠', accent: '#9db8e8', avatar: '/assets/members/member-003.svg',
    profile: {
      trait: '擅长评估创意可行性，留意细节，提倡互相鼓励，只提建议不评判。',
      value: '把控创意落地质量，集思广益，推动想法落地生根。',
      memory: '跨界思维强，富有创造力',
    },
  },
  {
    nickname: '耐心酱', accent: '#df8d95', avatar: '/assets/members/member-004.webp',
    profile: {
      trait: '好奇心强，有上进心，开放包容；善于看见他人付出，快速发现问题。',
      value: '把控会议时间、检查任务进度；多元视角发散创意，推动组员自主管理，不等催促。',
      memory: '有耐心，适应力强',
    },
  },
  {
    nickname: '次元君', accent: '#b9cd81', avatar: '/assets/members/member-005.webp',
    profile: {
      trait: '二次元爱好者、coser；目标感强，积极活跃氛围，主动学习 AI 相关知识。',
      value: '活跃小组气氛，在美术创意方向贡献想法，遵循「先测试→初版→终版」工作流程。',
      memory: '热爱二次元，乐于尝试 AI 创作',
    },
  },
  {
    nickname: '星探越', accent: '#81b5b9', avatar: '/assets/members/member-006.webp',
    profile: {
      trait: '善于发掘每位组员身上的亮点，愿意突破自身舒适圈。',
      value: '挖掘组员优势，为大家匹配合适项目位置，凝聚团队，对齐共同目标。',
      memory: '耐心打磨，执行力强',
    },
  },
  {
    nickname: '探索怡', accent: '#e8c49d', avatar: '/assets/members/member-007.svg',
    profile: {
      trait: '好奇心旺盛，愿意尝试新鲜事物，希望在项目过程提升个人能力。',
      value: '配合团队分工，依托自身特长补齐团队能力短板，依靠经验共享实现高效协作。',
      memory: '乐于探索，持续成长',
    },
  },
  {
    nickname: '认真芳', accent: '#a8c8a0', avatar: '/assets/members/member-008.svg',
    profile: {
      trait: '积极参与小组破冰与共创讨论，紧跟团队节奏。',
      value: '参与团队脑暴，配合小组各项活动推进。',
      memory: '认真参与团队共创',
    },
  },
  {
    nickname: '妙想涵', accent: '#dda4c7', avatar: '/assets/members/member-009.webp',
    profile: {
      trait: '充满奇思妙想；目标清晰，善于发现生活乐趣，踏实跟进各项任务。',
      value: '贡献创意想法，认真完成分配任务，广纳全员智慧开展创新。',
      memory: '严谨细致，有想法',
    },
  },
  {
    nickname: '速成凤', accent: '#eac47d', avatar: '/assets/members/member-010.webp',
    profile: {
      trait: '热爱生活，学习热情高，稳扎稳打落地任务。',
      value: '将模糊需求拆解成 AI 可执行指令，整理输出完整、可直接交付的成品。',
      memory: '现学现用，上手快',
    },
  },
  {
    nickname: '敢言雨', accent: '#a3b7e4', avatar: '/assets/members/member-011.webp',
    profile: {
      trait: '讨厌模棱两可，看重真实产出，喜欢正向反馈。',
      value: '推动团队输出第一版初稿，拒绝空谈，打造正向、不评判的团队氛围。',
      memory: '敢于表达想法',
    },
  },
  {
    nickname: '胆大颖', accent: '#bba7db', avatar: '/assets/members/member-012.webp',
    profile: {
      trait: '对 AI 充满兴趣，拥有旺盛好奇心。',
      value: '紧跟项目进度，带来多元视角，助力产出更包容、更有温度的作品。',
      memory: '敢尝试，胆大心细',
    },
  },
  {
    nickname: '共创宁', accent: '#90b8df', avatar: '/assets/members/member-013.webp',
    profile: {
      trait: '积极参与破冰游戏、小组讨论，跟随团队节奏共同推进项目。',
      value: '参与团队脑暴，配合小组活动。',
      memory: '积极参与小组共创',
    },
  },
  {
    nickname: '学霸霞', accent: '#96c9c7', avatar: '/assets/members/member-014.webp',
    profile: {
      trait: '目标感强，富有团队凝聚力，稳步完成分配任务。',
      value: '稳定可靠的后方执行者，保障任务落地。',
      memory: '学习能力强',
    },
  },
  {
    nickname: '落地扬', accent: '#edba69', avatar: '/assets/members/member-015.webp',
    profile: {
      trait: '拥有强大内驱力，对 AI 求知欲强；思维兼顾具象与抽象，忙碌依旧愿意尝试新事物。',
      value: '推动好奇心转化成看得见的落地成果，将成员差异转化为分工优势，产出最小可看样稿。',
      memory: '擅长把想法落地',
    },
  },
  {
    nickname: '靠谱彤', accent: '#d99bb5', avatar: '/assets/members/member-016.webp',
    profile: {
      trait: '不畏难，敢于提出建议，希望和伙伴共同进步。',
      value: '输出客观真实的反馈，实事求是评估团队成果。',
      memory: '话少但挺靠谱',
    },
  },
  {
    nickname: '快脚雯', accent: '#b59cc5', avatar: '/assets/members/member-017.webp',
    profile: {
      trait: '乐于交换想法，尊重差异，对事不对人。',
      value: '跟进任务进度，及时反馈进度，促进成员思想碰撞，营造包容氛围。',
      memory: '踏实，行动快',
    },
  },
  {
    nickname: '分享鲍', accent: '#93bdd6', avatar: '/assets/members/member-018.webp',
    profile: {
      trait: '乐于思考分享，可以提供 AI 经验渠道；主张先完成再打磨，包容友善。',
      value: '输出 AI 相关经验，主动同步个人进度，收集多方反馈打磨作品。',
      memory: '乐于分享 AI 经验',
    },
  },
  {
    nickname: '星陆彤', accent: '#aab4de', avatar: '/assets/members/member-019.webp',
    profile: {
      trait: '敢于发起思维碰撞，乐于取长补短。',
      value: '主动抛出问题带动思维碰撞，落实分工任务。',
      memory: '脚踏实地，仰望星空',
    },
  },
  {
    nickname: '包容琪', accent: '#a7b989', avatar: '/assets/members/member-020.webp',
    profile: {
      trait: '团结包容，富有创新力。',
      value: '营造包容的团队氛围，支持团队创新探索。',
      memory: '尊重差异，看重过程',
    },
  },
  {
    nickname: '创意山', accent: '#e5ab75', avatar: '/assets/members/member-021.webp',
    profile: {
      trait: '思维活跃，乐于发散创意，敢于尝试新颖方案。',
      value: '在头脑风暴中输出新鲜创意，配合完成创意构思。',
      memory: '创意活跃，乐于创新',
    },
  },
  {
    nickname: '规划洋', accent: '#c0a8d8', avatar: '/assets/members/member-022.svg',
    profile: {
      trait: '执行力强，目标感明确，对 AI 有学习热情。',
      value: '善于把概念与逻辑核对清楚，也乐于倾听和沟通。',
      memory: '爱做规划也爱踏实落地',
    },
  },
  {
    nickname: '纠错颜', accent: '#e99d8b', avatar: '/assets/members/member-023.webp',
    profile: {
      trait: '沉着冷静，善于思考，严谨认真。',
      value: '善于倾听团队成员的想法，并将想法落地。',
      memory: '稳重可靠，擅长任务检查和纠错',
    },
  },
  {
    nickname: '二创蕊', accent: '#e8a0be', avatar: '/assets/members/member-024.webp',
    profile: {
      trait: '对 AI 充满好奇心和热爱，求知欲旺盛且有执行力。',
      value: '执行力强，稳稳当当完成团队分配的任务。',
      memory: '喜欢用 AI 捣鼓二创的人',
    },
  },
  {
    nickname: '逻辑慧', accent: '#7fbeb4', avatar: '/assets/members/member-025.webp',
    profile: {
      trait: '沉稳细致，做事有条理。',
      value: '能把复杂的信息梳理成清晰的框架，乐于尝试用 AI 工具辅助提效，保障团队输出的质量。',
      memory: '稳重可靠，逻辑清晰，执行力强',
    },
  },
  {
    nickname: '边界渔', accent: '#d28c99', avatar: '/assets/members/member-026.webp',
    profile: {
      trait: '有边界感，先明确目标和标准再着手。',
      value: '把散落信息归拢成结构、把过程沉淀成复盘。',
      memory: '主动同步，按反馈迭代',
    },
  },
  {
    nickname: '安心嘉', accent: '#c5a9df', avatar: '/assets/members/member-027.webp',
    profile: {
      trait: '做事细致且沟通温和。',
      value: '擅长整理信息、推进任务、补位协作。',
      memory: '靠谱好沟通，交付让人安心',
    },
  },
  {
    nickname: '冒泡喜', accent: '#a1cfbb', avatar: '/assets/members/member-028.svg',
    profile: {
      trait: '开朗外向，认真负责。',
      value: '随时随地冒泡同步进展，从不忘记任何任务。',
      memory: '随时随地冒泡，从不忘记任务',
    },
  },
]

export const members: Member[] = roster.map((entry, index) => {
  const slot = index + 1
  const memberNumber = String(slot).padStart(3, '0')
  const memberId = `member-${memberNumber}`
  return {
    memberId,
    memberNumber,
    nickname: entry.nickname,
    avatar: entry.avatar,
    accent: entry.accent,
    position: desktopPositions[slot],
    mobilePosition: mobilePositions[slot],
    profile: entry.profile,
  }
})

export type { Member }
