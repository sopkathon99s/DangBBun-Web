import { format, parseISO } from "date-fns";
import { Bungae, BungaeService, CreateBungaeInfo } from "../types/bungaeService";
import { RequestService } from "../types/requestService";

interface ServerGetBungaeResponse {
  data: {
    meetings: {
      meetingId: number;
      title: string;
      meetingDate: string;
      minMember: number;
      maxMember: number;
      description: string;
      location: string;
      deadline: string;
      isAnonymous: boolean;
      isParticipated: boolean;
      participants: unknown[];
    }[];
  };
}

interface ServerPostBungaeRequest {
  title: string;
  meetingDate: string;
  minMember: number;
  maxMember: number;
  description: string;
  location: string;
  deadline: string;
  isAnonymous: boolean;
}

export class BungaeServiceReal implements BungaeService {
  constructor(private request: RequestService) {}
  getBungaeClosedList(): Promise<Bungae[]> {
    throw new Error("Method not implemented.");
  }

  async getBungaeList(): Promise<Bungae[]> {
    const res = await this.request.call<undefined, ServerGetBungaeResponse>("POST", "/meeting");
    return res.data.meetings.map((item) => ({
      title: item.title,
      applied: item.isParticipated,
      currentMember: item.participants.length,
      description: item.description,
      id: item.meetingId,
      location: item.location,
      maxMember: item.maxMember,
      minMember: item.minMember,
      hurryMessage: "아직도 망설여?",
      status: { mode: "timeLeft", message: "마마마마" },
      meetDate: format(parseISO(item.meetingDate), "yyyy.MM.dd HH시 mm분"),
    }));
  }
  async createBungae(info: CreateBungaeInfo): Promise<void> {
    await this.request.call<ServerPostBungaeRequest, unknown>("POST", "/meeting", {
      deadline: info.deadline.toISOString(),
      description: info.description,
      location: info.location,
      maxMember: info.maxMember,
      meetingDate: info.meetingDate.toISOString(),
      title: info.title,
      minMember: info.minMember,
      isAnonymous: info.isAnonymous,
    });
  }
}
