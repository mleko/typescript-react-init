import * as React from "react";

export class Counter extends React.Component<{}, State> {

	public static increment(value: number): number {
		return value + 1;
	}

	public constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<button onClick={this.click}>Increment counter</button>
				<span>{this.state.counter}</span>
			</div>
		);
	}

	private click = () => {
		this.setState({counter: Counter.increment(this.state.counter || 0)});
	};
}

interface State {
	counter: number;
}
