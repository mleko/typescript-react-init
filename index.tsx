import * as React from "react";
import * as ReactDOM from "react-dom";

class SampleComponent extends React.Component<void, void> {
	public render(): JSX.Element {
		return (
			<h1>Hello, TypeScript!</h1>
		);
	}
}

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<SampleComponent/>, element);
