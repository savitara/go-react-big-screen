import axios from "axios";

export const getBackButtonImageUrl = () => {
    const url = '/iconImage/backButton.png';
    const fullUrl = axios.getUri({url});
    return fullUrl;
};
