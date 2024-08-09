function List() {

    const fruits = ["apple", "orange",
        "banana", "coconut", "pineapple"];

    fruits.sort();

    const listItems = fruits.map(fruit =>
        <li key={fruit}>{fruit}</li>);

    //////////////////////////////////////////////////////////////////////////

    const fruits2 = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 }];

    //alphabetical order
    //fruits2.sort((a, b) => a.name.localeCompare(b.name));

    //reverse alphabetical order
    //fruits2.sort((a, b) => b.name.localeCompare(a.name));

    //calories ascending order
    //fruits2.sort((a, b) => a.calories - b.calories);

    //calories descending order
    //fruits2.sort((a, b) => b.calories - a.calories);

    //const highCalFruits2 = fruits2.filter(fruit2 => fruit2.calories >= 100);
    //const lowCalFruits2 = fruits2.filter(fruit2 => fruit2.calories < 100);

    const listItems2 = fruits2.map(fruit2 =>
        <li key={fruit2.id}>
            {fruit2.name}: &nbsp; <b>{fruit2.calories}</b>
        </li>
    );

    return (<><ol>{listItems}</ol> <hr /> <ol>{listItems2}</ol></>);
}

export default List