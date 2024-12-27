const watchListUtils = {
    check: ({ watchList, mediaId }) => watchList && watchList.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
};
export default watchListUtils;