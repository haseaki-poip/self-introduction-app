import { useGeolocation } from "../../hooks/useGeolocation";
import GeolocationButton from "./GeolocationButton";
import SelectStartType from "./SelectStartType";

const StartButtons = () => {
  const { position, getCurrentPosition } = useGeolocation();
  return (
    <div className="pt-8">
      {position.latitude != null && position.longitude != null ? (
        <SelectStartType />
      ) : (
        <GeolocationButton getCurrentPosition={() => getCurrentPosition()} />
      )}
    </div>
  );
};

export default StartButtons;
