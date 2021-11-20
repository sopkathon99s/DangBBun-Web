import { Bungae, BungaeService } from "../types/bungaeService";

export class BungaeServiceMock implements BungaeService {
  async getBungaeList(): Promise<Bungae[]> {
    return [...mockBungaeData];
  }
}

const mockBungaeData: Bungae[] = [
  {
    id: 0,
    status: { mode: "timeLeft", message: "status" },
    hurryMessage: "hurryMessage",
    title: "title",
    minMember: 2,
    maxMember: 6,
    currentMember: 4,
    meetDate: "meetDate",
    location: "location",
    description: "description",
    applied: false,
  },
  {
    id: 1,
    status: { mode: "failed" },
    hurryMessage: "hurryMessage",
    title: "title",
    minMember: 2,
    maxMember: 6,
    currentMember: 4,
    meetDate: "meetDate",
    location: "location",
    description: "description",
    applied: true,
  },
];
