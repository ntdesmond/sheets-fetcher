const formatDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleDateString('ru');

export default formatDate;
