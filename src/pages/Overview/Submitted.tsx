import { useEffect, useState } from "react";
import styled from "styled-components";
import { NormalBungaeCard } from "../../components/BungaeCard";
import { Contacts } from "../../components/BungaeCard/Contacts";
import { api } from "../../services";
import { Bungae } from "../../services/types/bungaeService";

export function SubmittedPage() {
  const [bungaeList, setBungaeList] = useState<Bungae[]>([]);

  useEffect(() => {
    (async () => {
      const list = await api.bungae.getBungaeClosedList();
      setBungaeList(list);
    })();
  }, []);

  return (
    <StyledSubmittedPage>
      {bungaeList.map((bungae) => (
        <NormalBungaeCard
          {...bungae}
          key={bungae.id}
          contactsComponent={
            <Contacts
              items={[
                { name: "hello", contact: "world" },
                { name: "hello", contact: "world" },
              ]}
            />
          }
        />
      ))}
    </StyledSubmittedPage>
  );
}

const StyledSubmittedPage = styled.div`
  margin-top: 5rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  & > * {
    margin-bottom: 4.6rem;
  }
`;
