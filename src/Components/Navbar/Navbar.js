function Navbar() {
  // in this component I am using "require" inside the src of the img to import images dynamiclly
  const NavArr = [
    'Home',
    'Spread',
    'Trackers',
    'Interest',
    'Mood',
    'Collections',
    'Settings',
  ];

  // this will define the active tap to change its style in the navbar, we can get its value from the Route later
  const active = 'Trackers';

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-wrap justify-between px-72 py-2 mx-8 my-2">
      {NavArr.map((el) => {
        if (active === el) {
          return (
            <div
              key={el}
              className="bg-white rounded-xl items-center flex flex-col bg-primary p-2"
            >
              <div>
                <img
                  className="h-9 w-9 justify-self-center max-w-none"
                  src={require(`../../assets/icons/${el}-Active.png`).default}
                  alt={`${el} Logo`}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={el}
              className="bg-white rounded-xl items-center flex flex-col flex-auto"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-6 w-6 justify-self-center"
                  src={require(`../../assets/icons/${el}.png`).default}
                  alt={`${el} Logo`}
                />
              </div>
              <div>
                <div className="font-medium text-Grey">{el}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Navbar;
