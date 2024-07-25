import { Navigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../app";
import MainLayout from "../layout/MainLayout";
import { PublicRoutes } from "../../models";
import { LinearProgress } from "@mui/material";

type Props = {};

function Private(_props: Props) {
  const { tokenResult, loading } = useAppSelector(
    (state: RootState) => state.token
  );

  return (
    <>
      {!loading ? (
        tokenResult?.access ? (
          <MainLayout />
        ) : (
          <Navigate replace to={`/${PublicRoutes.LOGIN}`} />
        )
      ) : (
        <LinearProgress color="secondary" />
      )}
    </>
  );
}

export default Private;
