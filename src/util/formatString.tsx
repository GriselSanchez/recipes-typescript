export default (str: string) => {
	const regex = /-|_/gi;
	let words: string[] = str.replace(regex, ' ').split(' ');
	let formatted: string[] = [];

	for (let word of words)
		formatted.push(word[0].toUpperCase() + word.slice(1).toLowerCase());

	return formatted.join(' ');
};
