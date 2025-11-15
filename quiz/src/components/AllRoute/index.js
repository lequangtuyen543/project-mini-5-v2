import { routes } from "../../routes";
import { useRoutes } from "react-router-dom";

export const AllRoute = () => {
  const elements = useRoutes(routes);
  return (
    <>
      {elements}
    </>
  );
};