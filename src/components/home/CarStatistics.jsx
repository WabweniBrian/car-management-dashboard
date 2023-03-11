import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class CarStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-lg font-semibold">Car Statistics</h1>
        <p>20 February 2022</p>
        <div className="mt-5">
          <ReactApexChart
            options={this.state.chartOptions}
            series={this.state.chartData}
            type="line"
            width="100%"
            height="250"
          />
        </div>
      </div>
    );
  }
}

export default CarStatistics;
