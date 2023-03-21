import "./App.css";

type Story = {
	objectID: number;
	url: string;
	title: string;
	author: string;
	num_comments: number;
	points: number;
};

type Stories = Story[];

const App = () => {
	const stories = [
		{
			title: "React",
			url: "https://reactjs.org/",
			author: "Jordan Walke",
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: "Redux",
			url: "https://redux.js.org/",
			author: "Dan Abramov, Andrew Clark",
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	return (
		<div>
			<h1>My Hacker Stories</h1>

			<Search />

			<hr />

			<List list={stories} />
		</div>
	);
};

const Search = () => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// synthetic event
		console.log(event);
		// value of target (here: input HTML element)
		console.log(event.target.value);
	};

	return (
		<div>
			<label htmlFor='search'>Search: </label>
			<input id='search' type='text' onChange={handleChange} />
		</div>
	);
};

type ListProps = {
	list: Stories;
};

const List: React.FC<ListProps> = (props) => (
	<ul>
		{props.list.map((item) => (
			<Item key={item.objectID} item={item} />
		))}
	</ul>
);

type ItemProps = {
	item: Story;
};

const Item: React.FC<ItemProps> = (props) => (
	<li>
		<span>
			<a href={props.item.url}>{props.item.title}</a>
		</span>
		<span>{props.item.author}</span>
		<span>{props.item.num_comments}</span>
		<span>{props.item.points}</span>
	</li>
);

export default App;
