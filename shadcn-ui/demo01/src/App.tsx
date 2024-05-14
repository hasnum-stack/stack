import { Button } from 'components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from 'components/ui/alert';

const App = () => {
  return (
    <div>
      <div>
        <Button variant="outline">Button</Button>
      </div>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
      <div className="content">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div className="divide-y divide-gray-400 hover:divide-y-8">
        <div className="grid grid-cols-10 gap-2">
          <div className="bg-sky-50 aspect-square"></div>
          <div className="bg-sky-100 aspect-square"></div>
          <div className="bg-sky-200 aspect-square"></div>
          <div className="bg-sky-300 aspect-square"></div>
          <div className="bg-sky-400 aspect-square"></div>
          <div className="bg-sky-500 aspect-square"></div>
          <div className="bg-sky-600 aspect-square"></div>
          <div className="bg-sky-700 aspect-square"></div>
          <div className="bg-sky-800 aspect-square"></div>
          <div className="bg-sky-900 aspect-square"></div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-blue-50 aspect-square"></div>
        <div className="bg-blue-100 aspect-square"></div>
        <div className="bg-blue-200 aspect-square"></div>
        <div className="bg-blue-300 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-blue-500 aspect-square"></div>
        <div className="bg-blue-600 aspect-square"></div>
        <div className="bg-blue-700 aspect-square"></div>
        <div className="bg-blue-800 aspect-square"></div>
        <div className="bg-blue-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-indigo-50 aspect-square"></div>
        <div className="bg-indigo-100 aspect-square"></div>
        <div className="bg-indigo-200 aspect-square"></div>
        <div className="bg-indigo-300 aspect-square"></div>
        <div className="bg-indigo-400 aspect-square"></div>
        <div className="bg-indigo-500 aspect-square"></div>
        <div className="bg-indigo-600 aspect-square"></div>
        <div className="bg-indigo-700 aspect-square"></div>
        <div className="bg-indigo-800 aspect-square"></div>
        <div className="bg-indigo-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-violet-50 aspect-square"></div>
        <div className="bg-violet-100 aspect-square"></div>
        <div className="bg-violet-200 aspect-square"></div>
        <div className="bg-violet-300 aspect-square"></div>
        <div className="bg-violet-400 aspect-square"></div>
        <div className="bg-violet-500 aspect-square"></div>
        <div className="bg-violet-600 aspect-square"></div>
        <div className="bg-violet-700 aspect-square"></div>
        <div className="bg-violet-800 aspect-square"></div>
        <div className="bg-violet-900 aspect-square"></div>
      </div>
    </div>
  );
};

export default App;
