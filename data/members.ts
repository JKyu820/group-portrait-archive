import { desktopPositions, mobilePositions } from './portrait-layout'
import type { Placement } from './portrait-layout'

type Profile = {
  introduction: string
  bio: string
  interests: string[]
  tags: string[]
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

const testRoster: ReadonlyArray<readonly [nickname: string, accent: string]> = [
  ['柚子', '#edba69'], ['雾蓝', '#a3b7e4'], ['阿栗', '#d9a083'], ['小满', '#a3c6a4'], ['桃枝', '#dda4c7'],
  ['青屿', '#81b5b9'], ['椿芽', '#df8d95'], ['青柠', '#b9cd81'], ['紫苏', '#bba7db'], ['暖阳', '#eac47d'],
  ['莓果', '#e8a0be'], ['海盐', '#7fbeb4'], ['山茶', '#e99d8b'], ['纸鸢', '#90b8df'], ['松露', '#96c9c7'],
  ['暮紫', '#b59cc5'], ['月见', '#aab4de'], ['琥珀', '#e5ab75'], ['玫果', '#d99bb5'], ['木槿', '#d28c99'],
  ['苔原', '#a7b989'], ['杏仁', '#e4b08d'], ['冰河', '#93bdd6'], ['麦穗', '#d7af78'], ['铃兰', '#c5a9df'],
  ['晨露', '#a1cfbb'],
]

const testProfiles: Readonly<Partial<Record<number, Profile>>> = {
  1: {
    introduction: '出门散步，总能捡回一点日光。',
    bio: '柚子喜欢去没走过的小巷。拍下一扇窗、一棵树，再在照片背面写上当天的天气。',
    interests: ['胶片摄影', '城市散步'],
    tags: ['晴天出没', '日常观察'],
  },
  2: {
    introduction: '替大家记下了今晚月亮升起的时间。',
    bio: '天气好的晚上，雾蓝会把望远镜搬上天台。看完星星，再把没认出来的星座画进笔记本。',
    interests: ['观星', '钢笔速写'],
    tags: ['夜猫子', '星图收藏'],
  },
  3: {
    introduction: '每次聚会都多做一份点心。',
    bio: '阿栗在烘焙本上记了很多失败配方，页角也贴着朋友的留言。今天带来的是刚出炉的栗子饼。',
    interests: ['烘焙', '逛旧书店'],
    tags: ['手作', '甜点分享'],
  },
  4: {
    introduction: '阳台上那盆薄荷，今天又长高了。',
    bio: '小满习惯把植物的名字写在旧票根上。散步回来，口袋里常装着一片叶子或者一颗种子。',
    interests: ['养植物', '做手账'],
    tags: ['慢热', '四季记录'],
  },
  5: {
    introduction: '给普通的一天配一首喜欢的歌。',
    bio: '桃枝会把每次出门听的歌存成一份歌单，名字就用那天去的地方。偶尔也寄一张手画明信片。',
    interests: ['听唱片', '画明信片'],
    tags: ['声音日记', '彩色铅笔'],
  },
}

export const members: Member[] = testRoster.map(([nickname, accent], index) => {
  const slot = index + 1
  const memberNumber = String(slot).padStart(3, '0')
  const memberId = `member-${memberNumber}`
  return {
    memberId,
    memberNumber,
    nickname,
    avatar: `/assets/members/${memberId}.svg`,
    accent,
    position: desktopPositions[slot],
    mobilePosition: mobilePositions[slot],
    profile: testProfiles[slot],
  }
})

export type { Member }
