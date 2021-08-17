import Counter from './Counter';

function App() {
  console.log('Render App');
  //Passes down initalCount as 0 down to <Counter/>
  //access it by deconstructing it inside function parameters
  return <Counter initialCount={0}/>;
}

export default App;
