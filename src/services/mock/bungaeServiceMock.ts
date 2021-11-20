import { Bungae, BungaeService } from "../types/bungaeService";

export class BungaeServiceMock implements BungaeService {
  async getBungaeList(): Promise<Bungae[]> {
    return [...mockBungaeData];
  }
  async createBungae(): Promise<void> {
    return;
  }
  async getBungaeClosedList(): Promise<Bungae[]> {
    return [...mockBungaeFinish];
  }
}

const mockBungaeData: Bungae[] = [
  {
    id: 0,
    status: { mode: "timeLeft", message: "마감 15시간 전" },
    hurryMessage: "아직도 망설여?",
    title: "충무로 복소사 갈기실 분~",
    minMember: 4,
    maxMember: 6,
    currentMember: 3,
    meetDate: "2021.12.25 18시 30분",
    location: "하얀집 (서울시 충무로 5가 서예로 12-20)",
    description: "복소사 갈겨~",
    applied: false,
  },
  {
    id: 1,
    status: { mode: "timeLeft", message: "마감 9시간 전" },
    hurryMessage: "hurryMessage",
    title: "겨울 대방어 사냥",
    minMember: 7,
    maxMember: 9,
    currentMember: 6,
    meetDate: "2021.12.01 18시",
    location: "노량진 수산시장",
    description: "대방어는 비싸기 때문에 한 번에 갑니다. 와서 배 터지게 드셔 보세요, 어차피 n빵입니다",
    applied: true,
  },
];

const mockBungaeFinish: Bungae[] = [
  {
    id: 0,
    status: { mode: "timeLeft", message: "마감 15시간 전" },
    hurryMessage: "아직도 망설여?",
    title: "충무로 복소사 갈기실 분~",
    minMember: 4,
    maxMember: 6,
    currentMember: 3,
    meetDate: "2021.12.25 18시 30분",
    location: "하얀집 (서울시 충무로 5가 서예로 12-20)",
    description: "복소사 갈겨~",
    applied: false,
  },
  {
    id: 1,
    status: { mode: "failed" },
    hurryMessage: "hurryMessage",
    title: "겨울 대방어 사냥",
    minMember: 7,
    maxMember: 9,
    currentMember: 6,
    meetDate: "2021.12.01 18시",
    location: "노량진 수산시장",
    description: "대방어는 비싸기 때문에 한 번에 갑니다. 와서 배 터지게 드셔 보세요, 어차피 n빵입니다",
    applied: true,
  },
];
