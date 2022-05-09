import { easyStore } from "easy-ts-redux";
import corona, { coronaWatchers } from "./corona";

export default easyStore({ corona }, [coronaWatchers]);
