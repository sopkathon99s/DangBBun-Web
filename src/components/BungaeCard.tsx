interface BungaeCardProps {
  restTime: number;
  bungaeState: string;
  title: string;
  currentCnt: number;
  minCnt: number;
  maxCnt: number;
  date: Date;
  location: string;
  detail: string;
}

export function BungaeCard(props: BungaeCardProps) {
  const { restTime, bungaeState, title, currentCnt, minCnt, maxCnt, date, location, detail } = props;

  return (
    <article>
      <div>{restTime}시간 전</div>
      <div>{bungaeState}</div>
      <header>{title}</header>
      <div>
        <h3>
          <span>언제</span> 만나요?
        </h3>
        <h4>{date.getDate()}</h4>
      </div>
      <div>
        <h3>
          <span>어디서</span> 만나요?
        </h3>
        <h4>{location}</h4>
      </div>
      <div>
        <span>현재 {currentCnt}명</span>
        <span>
          {minCnt}~{maxCnt}명 정원
        </span>
      </div>
      <div>{/* 동그라미 */}</div>

      <p>
        {/* 토글되는 내용 */}
        {detail}
      </p>
      <button>
        나도 데려가~
        {/* 안 갈래요 토글 */}
      </button>
      <button>{/* toggle */}</button>
    </article>
  );
}
