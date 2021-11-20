export interface Bungae {
  id: number;

  status: BungaeStatus;
  hurryMessage: string;
  title: string;
  minMember: number;
  maxMember: number;
  currentMember: number;
  meetDate: string;
  location: string;
  description: string;

  applied: boolean;
}

export interface CreateBungaeInfo {
  title: string;
  meetingDate: Date;
  minMember: number;
  maxMember: number;
  description: string;
  location: string;
  deadline: Date;
  isAnonymous: boolean;
}

type BungaeStatus = { mode: "timeLeft"; message: string } | { mode: "failed" } | { mode: "success" };

export interface BungaeService {
  getBungaeList(): Promise<Bungae[]>;
  createBungae(info: CreateBungaeInfo): Promise<void>;

  getBungaeClosedList(): Promise<Bungae[]>;
}
