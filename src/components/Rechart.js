import React, { PureComponent } from "react";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class Chart extends PureComponent {
  getData = () => {
    const { locations, displayedEvents } = this.props
    const data = locations.map((location) => {
      const number = displayedEvents.filter(
        (event) => event.location === location
      ).length
      let city = location.split(', ').shift()
      city = city.charAt(0).toUpperCase() + city.slice(1)
      return { city, number }
    })
    return data
  }

  render() {
    return (

      <ResponsiveContainer height={400}>
        <ScatterChart

          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid />
          <XAxis
            type="category"
            dataKey="city"
            name="city" />

          <YAxis
            type="number"
            dataKey="number"
            name="number 0f events"
            allowDecimals={false} />

          <Tooltip
            cursor={{ strokeDasharray: "3 3" }} />

          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    )
        }
      }
export default Chart;