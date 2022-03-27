import { Store } from "../../utils/store";
import FormMember from "./components/Form";
import Membertable from "./components/Table";

function Members() {
	return (
		<Store>
			<FormMember />
			<Membertable />
		</Store>
	);
}

export default Members;
