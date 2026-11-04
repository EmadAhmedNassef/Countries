import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import CountryDetailsComp from "../components/CountryDetailsComp";

export default function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <Button
        variant="outline"
        color="dark"
        className="dark:border-gray-400! dark:text-gray-100!"
        onClick={() => navigate(-1)}
        mb="xl"
      >
        Back
      </Button>
      <CountryDetailsComp name={name} />
    </div>
  );
}
