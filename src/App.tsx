import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import SelectExample from './examples/SelectExample';

export default function App() {
  return <MantineProvider>
    <div className="center">
      <SelectExample></SelectExample>
    </div>
    </MantineProvider>;
}