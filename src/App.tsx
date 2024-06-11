import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './router';

import { Fragment } from 'react';

function App() {
    return (
        <Routes>
            {publicRouter.map((item, idx) => {
                const Page = item.component;
                let Layout;
                if (item.layout) {
                    Layout = item.layout;
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    Layout = Fragment;
                }
                return (
                    <Route
                        key={idx}
                        path={item.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}
export default App;
