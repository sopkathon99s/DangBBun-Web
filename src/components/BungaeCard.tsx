import styled from "styled-components";
import { theme } from "../styles/theme";

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
  const { bungaeState, title, currentCnt, minCnt, maxCnt, date, location, detail } = props;

  return (
    <StyledBungaeCard>
      <div>{bungaeState}</div>
      <Title>{title}</Title>
      <div>
        <WhenWhereLabel>
          <span>언제</span> 만나요?
        </WhenWhereLabel>
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
    </StyledBungaeCard>
  );
}

const StyledBungaeCard = styled.article`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.29);
  border-radius: 12px;
`;

const Title = styled.header`
  font-size: 1.9rem;
  font-weight: bold;
`;

const WhenWhereLabel = styled.div`
  font-size: 1rem;

  & > span {
    font-weight: bold;
    color: ${theme.color.red};
  }
`;
