const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'],
	nameCourse = 'Базовый React',
	command = [];

employers.forEach(employer => employer.length > 0 && employer.trim() !== '' ? command.push(employer) : '');
command.forEach((item, i) => {
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);
	command[i] = item;
});
const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own, args) => {
	let total = own || 0;
	args.forEach(item => total += item)
	return total;
};

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const {react, add} = data, 
		sumTech = react.concat(add, 'и другие');

	console.log(`
Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда академии: ${gang}
Первое, что изучим будет ${react[0]}. Он очень похож на HTML!
Технологии, которые мы изучим:
${sumTech.join(' ')} 
	`);
}

makeBusiness('Артем', null, lesson, command, nameCourse);

