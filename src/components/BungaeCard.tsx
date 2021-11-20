interface BungaeCardProps {
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
  const { bungaeState, title, currentCnt, minCnt, maxCnt, date, location, detail } = props;

  return (
    <article>
      <div>{bungaeState}</div>
      {/* card */}
      <div>
        {/* left */}
        <header>{title}</header>
      </div>
      <div>
        {/* right */}
        {/* 사람들 동그라미 */}
        {currentCnt}명/{minCnt}~{maxCnt}명<p>아직도 망설여?</p>
      </div>
      <h3>언제 만나요?</h3>
      <h4>{date}</h4>
      <h3>언제 만나요?</h3>
      <h4>{location}</h4>
      <p>
        {/* 토글되는 내용 */}
        {detail}
      </p>
      <button>
        나도 데려가~
        {/* 안 갈래요 토글 */}
      </button>
      <button>상세</button>
    </article>
  );
}
