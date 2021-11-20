import { useState } from "react";
import CreateForm from "../components/create/CreateForm";
import Loading from "../components/Loading";

export function CreatePage() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return isLoading ? <Loading /> : <CreateForm />;
}
