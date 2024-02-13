import { AppRouter } from "./router/AppRouter";
import AppTheme from "./theme/AppTheme";

function TodoApp() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

export default TodoApp;
