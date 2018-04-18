function contains(val, list) {
    if (!list || !list.indexOf) {
        return false;
    }

    return list.indexOf(val) >= 0;
}

export default contains;