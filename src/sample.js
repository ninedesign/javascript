// const name = "John Doe";
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );


function formatName(user) {
    return user.firstName + " " + user.lastName;
}

// const user = {
//     firstName: "John",
//     lastName: "Doe"
// }

// const element = (
//     <h1>Hello, {formatName(user)}</h1>
// )

// function getGreeting(user) {
//     if (user) {
//         return  <h1>Hello, {formatName(user)}</h1>;
//     }
//     return <h1>Hello, stranger</h1>
// }

const element = <div className="" tabIndex="0" aria="" src={user.avatarUrl}></div>

ReactDOM.render(
    element,
    document.getElementById("root")
);

const element = (
    <h1>Hello</h1>
    <h2>{user}</h2>
    <p>How are you?</p>
)