import { Button, Col, Row, Space } from "antd";

function Buttons(props) {
	return (
		<>
			<Row >
				<Col span={12} >
					<Button style={{ width: "90%", height: "100%"  }}  type='primary'>Home</Button>
				</Col>
				<Col span={12} >
					<Button style={{ width: "90%", height: "100%" }} type='primary'>Other Page</Button>
				</Col>
			</Row>
		</>
	);
}

export default Buttons;
