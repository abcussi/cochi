import { Store } from "../../utils/store";
import FormMember from "./components/Form";
import Membertable from "./components/Table";
import { Card, Col, Row } from "antd";

function Members() {
	return (
		<Store>
			<div className='site-card-wrapper'>
				<Row justify="center" align="top">
					<Col span={8}>
						<Card title='Add a new member' bordered={true}>
							<FormMember />
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Current members' bordered={true}>
						<Membertable />
						</Card>
					</Col>
				</Row>
			</div>
		</Store>
	);
}

export default Members;
