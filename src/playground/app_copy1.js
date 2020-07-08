console.log("App.js is running");

const appObj = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subTitle && <p>{appObj.subTitle}</p>}
        {appObj.options.length>0?<p>Here are your options</p>:<p>No options</p>}
    </div>
);

const user={
    name: "Asidipta",
    age: 21,
    location: 'Asansol'
};

function getLocation(location){
    if(location)
        return location;
    else
        return 'unknown';
}

const templateTwo=(
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);