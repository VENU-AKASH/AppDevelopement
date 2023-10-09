// MainContent.js
import React from 'react';
import '../assets/css/Sidebar.css'; // Import the CSS file
import Chart from 'chart.js/auto';
import Dashboard from './Dashboard';
import { useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function MainContent() {
  const barChartRef = useRef(null); // Create a ref for the bar chart
  const pieChartRef = useRef(null); // Create a ref for the pie chart

  useEffect(() => {
    // Data for the bar chart (replace with your data)
    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [10, 20, 15, 30, 25],
          backgroundColor: 'lightpink', // Bar color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1,
        },
      ],
    };

    // Chart configuration for the bar chart
    const barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Check if the bar chart already exists, and destroy it if it does
    if (barChartRef.current !== null) {
      barChartRef.current.destroy();
    }

    // Create the bar chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const newBarChart = new Chart(barCtx, {
      type: 'bar', // Specify the chart type (bar, line, pie, etc.)
      data: barChartData,
      options: barChartOptions,
    });

    // Store the bar chart reference for later destruction
    barChartRef.current = newBarChart;

    // Data for the pie chart (replace with your data)
    const pieChartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ['red', 'blue', 'yellow'],
        },
      ],
    };

    // Chart configuration for the pie chart
    const pieChartOptions = {
      responsive: true,
    };

    // Check if the pie chart already exists, and destroy it if it does
    if (pieChartRef.current !== null) {
      pieChartRef.current.destroy();
    }

    // Create the pie chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const newPieChart = new Chart(pieCtx, {
      type: 'pie', // Specify the chart type (bar, line, pie, etc.)
      data: pieChartData,
      options: pieChartOptions,
    });

    // Store the pie chart reference for later destruction
    pieChartRef.current = newPieChart;
  }, []);
  return (
    <div className="main-content">
        <Dashboard/>
      <h2>Welcome to the Dashboard</h2>

      {/* Sample Widget 1 */}
      <div className="widget">
        <h3>Widget 1 - Order Details</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Product A</td>
              <td>5</td>
              <td>$20.00</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Product B</td>
              <td>3</td>
              <td>$15.00</td>
              <td>$45.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Sample Widget 2 */}
    

      {/* Sample Chart */}
      <div className="chart">
        <h3>Bar Chart</h3>
        <canvas id="barChart" width="400" height="200"></canvas>
      </div>


      <div className="chart">
        <h3>Pie Chart</h3>
        <canvas id="pieChart" width="20" height="20"></canvas>
      </div>
      
    
      <Footer/>
    
      
    </div>
  );
}

export default MainContent;
