import {configureStore} from "@reduxjs/toolkit";
import {epicMiddleware, rootEpic} from "./root-epic";
import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware] as const,
});

epicMiddleware.run(rootEpic);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root-reducer", () => {
    const newRootReducer = require("./root-reducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
