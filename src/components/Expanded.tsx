import React from 'react';

interface Props {
  details: any;
}

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface State {
  totalDaily: any;
  healthLabels: any;
}

export default class Expanded extends React.Component<Props, State> {
  state: Readonly<State> = { totalDaily: {}, healthLabels: [] };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.details.totalDaily !== prevState.totalDaily) {
      this.setState({
        totalDaily: this.props.details.totalDaily,
        healthLabels: this.props.details.healthLabels,
      });
    }
  }

  render() {
    const { totalDaily, healthLabels } = this.state;
    const nutrition: any = Object.values(totalDaily);

    return (
      <div>
        <h3>More Details</h3>
        <ul>
          {healthLabels.map((label: string) => (
            <li>{label}</li>
          ))}
        </ul>

        <ul>
          {nutrition.map((elem: any) => (
            <li>{`${elem.label}: ${elem.quantity.toFixed(2)}${elem.unit}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
