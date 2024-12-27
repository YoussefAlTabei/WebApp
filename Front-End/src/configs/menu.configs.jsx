import { TvOutlined,HomeOutlined, SlideshowOutlined, LiveTvOutlined, FavoriteBorderOutlined, SearchOutlined, RateReviewOutlined } from "@mui/icons-material";

const main = [
    {
        display: "home",
        path: "/",
        icon: () => <HomeOutlined />,
        state: "home"
    },
    {
        display: "movies",
        path: "/movie",
        icon: () => <SlideshowOutlined />,
        state: "movie"
    },
    {
        display: "tv series",
        path: "/tv",
        icon: () => <LiveTvOutlined />,
        state: "hometv"
    },
    {
        display: "search",
        path: "/search",
        icon: () => <SearchOutlined />,
        state: "search"
    }
];

const user = [
    {
        display: "favourites",
        path: "/favourites",
        icon: () => <FavoriteBorderOutlined />,
        state: "favourite"
    },
    {
        display: "watchList",
        path: "/watchList",
        icon: () => <TvOutlined />,
        state: "watchlist"
    },
    {
        display: "reviews",
        path: "/reviews",
        icon: () => <RateReviewOutlined />,
        state: "search"
    }
];

const menuConfigs = { main, user };
export default menuConfigs;


