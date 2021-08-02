import useWindowDimensions from "./use-window-dimensions";
import { 
  mobile as mobileScreen, 
  tablet as tabletScreen ,
  largeTablet as largeTabletScreen,
} from "../lib/window-screen-widths";

const useDeviceScreen = () => {
  const { width } = useWindowDimensions();
  const isMobileScreen = width < mobileScreen;
  const isTabletScreen = width < tabletScreen;
  const isLargeTabletScreen = width < largeTabletScreen;
  
  return {
    isMobileScreen,
    isTabletScreen,
    isLargeTabletScreen,
  };
};

export default useDeviceScreen;