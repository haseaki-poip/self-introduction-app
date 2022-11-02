import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext } from "../_app";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_Introductions = gql`
  query ($lng: Float!, $lat: Float!) {
    getIntroductions(lng: $lng, lat: $lat) {
      id
      name
      introduction
    }
  }
`;

const Show: NextPage = () => {
  const { position } = useContext(GeolocationContext);

  const { data, loading, error } = useQuery(GET_Introductions, {
    variables: { lng: position.longitude, lat: position.latitude },
  });

  console.log(data);

  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  return <div></div>;
};

export default Show;
